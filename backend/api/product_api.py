from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from db import get_db
from db import Product, Shop

router = APIRouter(prefix="/products", tags=["Product"])

def format_product_with_shop(product: Product):
    return {
        "id": product.id,
        "shop_id": product.shop_id,
        "shop_name": product.shop.name if product.shop else None,
        "city": product.shop.city if product.shop else None,
        "name": product.name,
        "description": product.description,
        "image_path": product.image_path,
        "original_price": float(product.original_price) if product.original_price else 0,
        "current_price": float(product.current_price) if product.current_price else 0
    }

# 1. Lấy tất cả sản phẩm theo shop_id
@router.get("/by-shop")
def get_products_by_shop(
    shop_id: int = Query(..., description="ID của shop"),
    db: Session = Depends(get_db)
):
    products = db.query(Product).filter(Product.shop_id == shop_id).all()
    return [format_product_with_shop(p) for p in products]

# 2. Tìm kiếm theo tên sản phẩm (nếu không truyền search thì lấy toàn bộ)
@router.get("/search")
def search_products(
    search: str = Query(None, description="Từ khoá tìm kiếm theo tên"),
    db: Session = Depends(get_db)
):
    query = db.query(Product).join(Shop)
    if search:
        query = query.filter(Product.name.ilike(f"%{search}%"))
    products = query.all()
    return [format_product_with_shop(p) for p in products]
