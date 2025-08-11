from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import init_db
from api import shop_api, product_api, chatbot_api, user_api

app = FastAPI()

# ---- CORS ----
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # hoặc ["*"] để mở tất cả
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    init_db()

# Root
@app.get("/")
def root():
    return {"message": "Souvenir API is running!"}

# Include router
app.include_router(shop_api.router)
app.include_router(product_api.router)
app.include_router(chatbot_api.router)
app.include_router(user_api.router)

