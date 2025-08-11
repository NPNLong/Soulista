from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from db import get_db, User
from datetime import date

router = APIRouter(prefix="/user", tags=["User"])


# ===== Helper =====
def format_user(user: User):
    return {
        "id": user.id,
        "username": user.username,
        "fullname": user.fullname,
        "birthday": user.birthday.isoformat() if user.birthday else None,
        "gender": user.gender,
        "phone": user.phone,
        "points": user.points,
        "member_rank": user.member_rank,
        "checked_in_today": user.checked_in_today
    }


# 1. Đăng ký
@router.post("/register")
def register(username: str = Query(...), password: str = Query(...),
             fullname: str = Query(None), phone: str = Query(None),
             db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.username == username).first()
    if existing:
        raise HTTPException(status_code=400, detail="Username already exists")

    new_user = User(
        username=username,
        password=password,  # Lưu plain text (KHÔNG khuyến nghị cho production)
        fullname=fullname,
        phone=phone
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "Register success", "user": format_user(new_user)}


# 2. Đăng nhập
@router.post("/login")
def login(username: str = Query(...), password: str = Query(...),
          db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username, User.password == password).first()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    return {"message": "Login success", "user": format_user(user)}


# 3. Điểm danh (+100 điểm)
@router.post("/checkin")
def checkin(user_id: int = Query(...), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if user.checked_in_today:
        raise HTTPException(status_code=400, detail="Already checked in today")

    user.points += 100
    user.checked_in_today = True
    db.commit()
    db.refresh(user)
    return {"message": "Check-in success (+100 points)", "user": format_user(user)}


# 4. Mua voucher (trừ điểm)
@router.post("/buy-voucher")
def buy_voucher(user_id: int = Query(...), cost: int = Query(...),
                db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if user.points < cost:
        raise HTTPException(status_code=400, detail="Not enough points")

    user.points -= cost
    db.commit()
    db.refresh(user)
    return {"message": f"Voucher purchased (-{cost} points)", "user": format_user(user)}
