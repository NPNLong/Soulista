from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from db import get_db
from db import Shop

router = APIRouter(prefix="/user", tags=["Shop"])

def format_shop(shop: Shop):
    return {
        "id": shop.id,
        "name": shop.name,
        "join_date": shop.join_date,
        "avatar_path": shop.avatar_path,
        "images": shop.images,
        "price_range": shop.price_range,
        "address": shop.address,
        "city": shop.city,
        "type": shop.type,
        "description": shop.description,
        "latitude": float(shop.latitude) if shop.latitude else None,
        "longitude": float(shop.longitude) if shop.longitude else None,
        "weekly_points": shop.weekly_points,
        "monthly_points": shop.monthly_points,
        "contact": shop.contact,
        "qr_code_path": shop.qr_code_path,
        "has_sale": shop.has_sale,
        "average_rating": shop.average_rating,
        "total_ratings": shop.total_ratings,
    }

# 1. Lấy toàn bộ shop
@router.get("/shops")
def get_all_shops(db: Session = Depends(get_db)):
    shops = db.query(Shop).all()
    return [format_shop(s) for s in shops]

# 2. Lấy shop theo search word trong name
@router.get("/shops/search")
def search_shops(search: str = Query(..., description="Từ khoá tìm kiếm theo tên"),
                 db: Session = Depends(get_db)):
    shops = db.query(Shop).filter(Shop.name.ilike(f"%{search}%")).all()
    return [format_shop(s) for s in shops]

# 3. Top 6 điểm cao nhất tuần (nếu không có city thì lấy tất cả)
@router.get("/shops/top-week")
def top_weekly_shops(city: str = Query(None, description="Tên thành phố"),
                     db: Session = Depends(get_db)):
    query = db.query(Shop)
    if city:
        query = query.filter(Shop.city == city)
    shops = query.order_by(Shop.weekly_points.desc()).limit(6).all()
    return [format_shop(s) for s in shops]

# 4. Top 6 điểm cao nhất tháng (nếu không có city thì lấy tất cả)
@router.get("/shops/top-month")
def top_monthly_shops(city: str = Query(None, description="Tên thành phố"),
                      db: Session = Depends(get_db)):
    query = db.query(Shop)
    if city:
        query = query.filter(Shop.city == city)
    shops = query.order_by(Shop.monthly_points.desc()).limit(6).all()
    return [format_shop(s) for s in shops]

# 5. Lấy shop theo id
@router.get("/shops/{shop_id}")
def get_shop_by_id(shop_id: int, db: Session = Depends(get_db)):
    shop = db.query(Shop).filter(Shop.id == shop_id).first()
    if not shop:
        return {"error": "Shop not found"}
    return format_shop(shop)