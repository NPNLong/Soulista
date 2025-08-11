from sqlalchemy import create_engine, Column, Integer, String, Date, Boolean, DECIMAL, Text, ForeignKey, TIMESTAMP
from sqlalchemy.orm import declarative_base, relationship, sessionmaker
from datetime import datetime

# Thay thông tin kết nối MySQL ở đây
DATABASE_URL = "mysql+pymysql://root:123456@localhost:3306/soulista_new?charset=utf8mb4"

# Kết nối DB
engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
Base = declarative_base()

# --------- Model ---------

class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    fullname = Column(String(100))
    birthday = Column(Date)
    gender = Column(String(10))
    phone = Column(String(20))
    points = Column(Integer, default=0)
    member_rank = Column(String(50), default="Đồng")
    checked_in_today = Column(Boolean, default=False)

    ratings = relationship("Rating", back_populates="user")
    user_vouchers = relationship("UserVoucher", back_populates="user")
    transactions = relationship("Transaction", back_populates="user")


class Shop(Base):
    __tablename__ = "shop"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    join_date = Column(Date)
    avatar_path = Column(String(255))
    images = Column(Text)
    price_range = Column(String(50))
    address = Column(String(255))
    city = Column(String(100))
    type = Column(String(100))
    description = Column(Text)
    latitude = Column(DECIMAL(10, 7))
    longitude = Column(DECIMAL(10, 7))
    weekly_points = Column(Integer, default=0)
    monthly_points = Column(Integer, default=0)
    contact = Column(Text)
    qr_code_path = Column(String(255))
    has_sale = Column(Boolean, default=False)
    average_rating = Column(DECIMAL(3, 2), default=0.0)
    total_ratings = Column(Integer, default=0)

    products = relationship("Product", back_populates="shop")
    ratings = relationship("Rating", back_populates="shop")
    vouchers = relationship("Voucher", back_populates="shop")
    transactions = relationship("Transaction", back_populates="shop")


class Product(Base):
    __tablename__ = "product"
    id = Column(Integer, primary_key=True, index=True)
    shop_id = Column(Integer, ForeignKey("shop.id"))
    name = Column(String(100))
    description = Column(Text)
    image_path = Column(String(255))
    original_price = Column(DECIMAL(12, 2))
    current_price = Column(DECIMAL(12, 2))

    shop = relationship("Shop", back_populates="products")


class Rating(Base):
    __tablename__ = "rating"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    shop_id = Column(Integer, ForeignKey("shop.id"))
    rating = Column(Integer)  # 0 - 5
    comment = Column(Text)
    image_path = Column(String(255))
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

    user = relationship("User", back_populates="ratings")
    shop = relationship("Shop", back_populates="ratings")


class Voucher(Base):
    __tablename__ = "voucher"
    id = Column(Integer, primary_key=True, index=True)
    shop_id = Column(Integer, ForeignKey("shop.id"))
    sale_percent = Column(Integer)  # 0 - 100
    title = Column(String(100))
    description = Column(Text)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)
    expired_at = Column(TIMESTAMP)
    saved_count = Column(Integer, default=0)
    used_count = Column(Integer, default=0)

    shop = relationship("Shop", back_populates="vouchers")
    user_vouchers = relationship("UserVoucher", back_populates="voucher")


class UserVoucher(Base):
    __tablename__ = "user_voucher"
    voucher_id = Column(Integer, ForeignKey("voucher.id"), primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"), primary_key=True)
    used = Column(Boolean, default=False)

    voucher = relationship("Voucher", back_populates="user_vouchers")
    user = relationship("User", back_populates="user_vouchers")


class Transaction(Base):
    __tablename__ = "transaction"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    shop_id = Column(Integer, ForeignKey("shop.id"))
    amount = Column(DECIMAL(12, 2))
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

    user = relationship("User", back_populates="transactions")
    shop = relationship("Shop", back_populates="transactions")


# --------- Tạo bảng nếu chưa có ---------
def init_db():
    Base.metadata.create_all(bind=engine)


# --------- Session ---------
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
