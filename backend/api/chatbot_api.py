# from fastapi import APIRouter, Depends
# from sqlalchemy.orm import Session
# from pydantic import BaseModel
# import google.generativeai as genai
# import os, json, re
# from dotenv import load_dotenv
# from db import get_db, Shop, Product

# router = APIRouter(prefix="/chat", tags=["Chatbot"])

# # Gemini config
# load_dotenv()
# genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
# model = genai.GenerativeModel("gemini-2.5-flash")

# class AskRequest(BaseModel):
#     question: str
#     history: list[dict] = []  # [{ "user": "text", "bot": "text" }]

# def format_shop(shop: Shop, db: Session):
#     products = db.query(Product).filter(Product.shop_id == shop.id).all()
#     return {
#         "id": shop.id,
#         "name": shop.name,
#         "city": shop.city,
#         "type": shop.type,
#         "address": shop.address,
#         "description": shop.description,
#         "average_rating": float(shop.average_rating) if shop.average_rating is not None else None,
#         "products": [
#             {
#                 "id": p.id,
#                 "name": p.name,
#                 "description": p.description,
#                 "current_price": float(p.current_price),
#             }
#             for p in products
#         ],
#     }

# @router.post("/ask")
# def ask_question(data: AskRequest, db: Session = Depends(get_db)):
#     raw_question = data.question.strip()
#     if not raw_question:
#         return {"error": "Question is required"}

#     # --- Gộp normalize + classify ---
#     initial_prompt = f"""
# 1. Chuẩn hóa câu hỏi sau bằng tiếng Việt chuẩn, bỏ viết tắt, sửa lỗi chính tả:
# "{raw_question}"

# 2. Phân loại câu hỏi đã chuẩn hóa đó.
# - Nếu là chào hỏi, cảm ơn, châm chọc \u2192 social = true
# - Nếu liên quan đến quán ăn, đặc sản, món ăn \u2192 valid = true

# Trả về JSON hợp lệ dạng:
# {{
#   "normalized": "câu hỏi chuẩn hóa",
#   "social": true/false,
#   "valid": true/false
# }}
# """
#     initial_response = model.generate_content(
#         initial_prompt,
#         generation_config={"response_mime_type": "application/json"}
#     )

#     question, social, is_valid = raw_question, False, False
#     try:
#         parsed = json.loads(initial_response.text)
#         question = parsed.get("normalized", raw_question)
#         social = parsed.get("social", False)
#         is_valid = parsed.get("valid", False)
#     except Exception:
#         pass

#     history_summary = ""
#     if data.history:
#         history_pairs = "\n".join(
#             [f"- Người dùng: {h.get('user')} | Bot: {h.get('bot')}" for h in data.history[-5:]]
#         )
#         history_summary = f"Lịch sử gần đây:\n{history_pairs}"

#     if social or not is_valid:
#         general_prompt = (
#             (f"{history_summary}\n" if history_summary else "") +
#             f"Người dùng nói: '{raw_question}' (chuẩn hóa: '{question}').\n"
#             f"Kết quả phân loại: social={social}, valid={is_valid}.\n\n"
#             "Hãy trả lời vui vẻ, thân thiện.\n"
#             "- **Nếu trong lịch sử đã từng chào hỏi hoặc trò chuyện xã giao, hãy nối tiếp tự nhiên và KHÔNG chào lại từ đầu**.\n"
#             "- Nếu là xã giao, chỉ cần phản hồi thân thiện, có thể gợi mở mảng đặc sản, đồ lưu niệm (không cần giới thiệu bản thân lần nữa).\n"
#             "- Nếu không thuộc lĩnh vực, hãy trả lời hữu ích nhất có thể rồi khéo léo hướng người dùng sang mảng đặc sản, ẩm thực và đồ lưu niệm.\n"
#             "- Dùng markdown khi cần thiết, nhưng giữ văn phong gần gũi."
#         )
#         general_response = model.generate_content(general_prompt)
#         return {
#             "question": raw_question,
#             "normalized": question,
#             "answer": general_response.text
#         }

#     available_types = [t[0] for t in db.query(Shop.type).distinct().all() if t[0]]
#     available_cities = [c[0] for c in db.query(Shop.city).distinct().all() if c[0]]
#     lower_types = {t.lower(): t for t in available_types}
#     lower_cities = {c.lower(): c for c in available_cities}

#     extract_prompt = f"""
# Từ câu hỏi: "{question}"

# Danh sách loại quán hợp lệ: {available_types}
# Danh sách thành phố hợp lệ: {available_cities}

# Yêu cầu:
# 1. Chọn tất cả loại quán phù hợp trong danh sách loại quán hợp lệ.
# 2. Nếu câu hỏi chỉ nói về đồ ăn chung chung như 'đặc sản', 'món ăn', 'ẩm thực' mà không chỉ rõ loại,
#    mặc định thêm 'nhà hàng' (nếu có trong danh sách).
# 3. Chọn tất cả thành phố phù hợp trong danh sách thành phố hợp lệ.
# 4. Trả về JSON hợp lệ dạng:
# {{
#     "types": ["loại1", "loại2"],
#     "cities": ["thành phố1", "thành phố2"]
# }}
# """
#     extract_response = model.generate_content(extract_prompt)
#     shop_types, cities = [], []
#     try:
#         parsed = json.loads(extract_response.text)
#         shop_types = parsed.get("types", [])
#         cities = parsed.get("cities", [])
#     except json.JSONDecodeError:
#         pass

#     if not shop_types:
#         if "nhà hàng" in lower_types and any(k in question.lower() for k in ["đặc sản", "món ăn", "ẩm thực"]):
#             shop_types.append(lower_types["nhà hàng"])
#         for key in lower_types:
#             if key in question.lower() and lower_types[key] not in shop_types:
#                 shop_types.append(lower_types[key])

#     if not cities:
#         for key in lower_cities:
#             if key in question.lower() and lower_cities[key] not in cities:
#                 cities.append(lower_cities[key])

#     query = db.query(Shop)
#     if shop_types:
#         query = query.filter(Shop.type.in_(shop_types))
#     if cities:
#         query = query.filter(Shop.city.in_(cities))
#     shops = query.all()
#     formatted_shops = [format_shop(s, db) for s in shops]
#     has_history = bool(history_summary)

#     context = f"""
# {history_summary if history_summary else ""}

# Người dùng vừa hỏi:
# "{raw_question}" (chuẩn hóa: "{question}")

# Danh sách quán và món ăn (JSON):
# {json.dumps(formatted_shops, ensure_ascii=False, indent=2)}

# Hãy trả lời:
# - Xưng hô **bạn - tôi** để tạo cảm giác thân thiện, gần gũi.
# - Viết như một **hướng dẫn viên du lịch**: giọng văn hoa mỹ, hấp dẫn, khơi gợi cảm xúc.
# {"- **Nếu có lịch sử trò chuyện ở trên, hãy nối tiếp tự nhiên, KHÔNG cần chào hỏi hay mở đầu giới thiệu lại**.\n" if has_history else "- Mở đầu 1-2 câu giới thiệu chung, văn phong mời gọi.\n"}
# - Danh sách món/quán trình bày dạng bullet rõ ràng:
# - Tên món/quán **in đậm**.
# - Mỗi món/quán cách dòng rõ ràng, thêm địa chỉ & giá (nếu có).
# - Kết thúc 1-2 câu gợi ý hoặc chúc vui vẻ.
# - **Dùng markdown** để xuống dòng và trình bày.
# - **Không có bullet rỗng** và không có dấu chấm thừa.
# """

#     final_response = model.generate_content(context)
#     cleaned_answer = re.sub(r"(?m)^\s*[-*]\s*$", "", final_response.text)

#     return {
#         "question": raw_question,
#         "normalized": question,
#         "filters": {"types": shop_types, "cities": cities},
#         "results": formatted_shops,
#         "answer": cleaned_answer
#     }

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
import google.generativeai as genai
import os, json, re
from dotenv import load_dotenv
from db import get_db, Shop, Product

router = APIRouter(prefix="/chat", tags=["Chatbot"])

# Gemini config
load_dotenv()
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-2.5-flash")


class AskRequest(BaseModel):
    question: str
    history: list[dict] = []  # [{ "user": "text", "bot": "text" }]


def format_shop(shop: Shop, db: Session):
    products = db.query(Product).filter(Product.shop_id == shop.id).all()
    return {
        "id": shop.id,
        "name": shop.name,
        "city": shop.city,
        "type": shop.type,
        "address": shop.address,
        "description": shop.description,
        "average_rating": float(shop.average_rating) if shop.average_rating is not None else None,
        "products": [
            {
                "id": p.id,
                "name": p.name,
                "description": p.description,
                "current_price": float(p.current_price),
            }
            for p in products
        ],
    }


@router.post("/ask")
def ask_question(data: AskRequest, db: Session = Depends(get_db)):
    raw_question = data.question.strip()
    if not raw_question:
        return {"error": "Question is required"}

    # --- 0. Chuẩn hóa câu hỏi ---
    normalize_prompt = (
        f"Chuyển câu sau về dạng tiếng Việt chuẩn, bỏ viết tắt, teen code, sửa lỗi chính tả:\n"
        f"\"{raw_question}\"\n"
        "Trả về chỉ câu chuẩn (không giải thích)."
    )
    normalize_response = model.generate_content(normalize_prompt)
    question = normalize_response.text.strip()

    # --- 1. Phân loại câu hỏi ---
    classify_prompt = (
        f"Phân loại câu hỏi: \"{question}\".\n"
        "Trả về JSON hợp lệ dạng:\n"
        "{ \"social\": true/false, \"valid\": true/false }\n"
        "social = true nếu là chào hỏi, cảm ơn, tạm biệt, trêu ghẹo.\n"
        "valid = true nếu liên quan quán ăn, món ăn, giá cả, đặc sản, đồ lưu niệm."
    )
    classify_response = model.generate_content(
        classify_prompt,
        generation_config={"response_mime_type": "application/json"}
    )
    social, is_valid = False, False
    try:
        classify_data = json.loads(classify_response.text)
        social = classify_data.get("social", False)
        is_valid = classify_data.get("valid", False)
    except Exception:
        pass

    # --- Đọc lịch sử qua loa ---
    history_summary = ""
    if data.history:
        history_pairs = "\n".join(
            [f"- Người dùng: {h.get('user')} | Bot: {h.get('bot')}" for h in data.history[-5:]]
        )
        history_summary = f"Lịch sử gần đây:\n{history_pairs}"

    # --- Nếu là xã giao hoặc không liên quan ---
    if social or not is_valid:
        general_prompt = (
            (f"{history_summary}\n" if history_summary else "") +
            f"Người dùng nói: '{raw_question}' (chuẩn hóa: '{question}').\n"
            f"Kết quả phân loại: social={social}, valid={is_valid}.\n\n"
            "Hãy trả lời vui vẻ, thân thiện.\n"
            "- **Nếu trong lịch sử đã từng chào hỏi hoặc trò chuyện xã giao, hãy nối tiếp tự nhiên và KHÔNG chào lại từ đầu**.\n"
            "- **Dựa vào cách người dùng nói chuyện, tự lựa chọn cách xưng hô phù hợp** (ví dụ: bạn - tôi, em - anh, tao - mày… nếu hợp ngữ cảnh).\n"
            "- **Nếu đã có cách xưng hô từ trước đó, hãy giữ nguyên để tạo cảm giác liền mạch.\n"
            "- Nếu là xã giao, chỉ cần phản hồi thân thiện, có thể gợi mở mảng đặc sản, đồ lưu niệm (không cần giới thiệu bản thân lần nữa).\n"
            "- Nếu không thuộc lĩnh vực, hãy trả lời hữu ích nhất có thể rồi khéo léo hướng người dùng sang mảng đặc sản, ẩm thực và đồ lưu niệm.\n"
            "- Dùng markdown khi cần thiết, nhưng giữ văn phong gần gũi."
        )

        general_response = model.generate_content(general_prompt)
        return {
            "question": raw_question,
            "normalized": question,
            "answer": general_response.text
        }

    # --- 2. Trích nhiều loại quán và nhiều thành phố ---
    available_types = [t[0] for t in db.query(Shop.type).distinct().all() if t[0]]
    available_cities = [c[0] for c in db.query(Shop.city).distinct().all() if c[0]]

    extract_prompt = f"""
    Từ câu hỏi: "{question}"

    Danh sách loại quán hợp lệ: {available_types}
    Danh sách thành phố hợp lệ: {available_cities}

    Yêu cầu:
    1. Chọn tất cả loại quán phù hợp trong danh sách loại quán hợp lệ.
    2. Nếu câu hỏi chỉ nói về đồ ăn chung chung như 'đặc sản', 'món ăn', 'ẩm thực' mà không chỉ rõ loại,
       mặc định thêm 'nhà hàng' (nếu có trong danh sách).
    3. Chọn tất cả thành phố phù hợp trong danh sách thành phố hợp lệ.
    4. Trả về JSON hợp lệ dạng:
    {{
        "types": ["loại1", "loại2"],
        "cities": ["thành phố1", "thành phố2"]
    }}
    """

    extract_response = model.generate_content(extract_prompt)

    shop_types, cities = [], []
    try:
        parsed = json.loads(extract_response.text)
        shop_types = parsed.get("types", [])
        cities = parsed.get("cities", [])
    except json.JSONDecodeError:
        pass

    # --- Fallback nếu AI không nhận ra ---
    if not shop_types:
        if any(k in question.lower() for k in ["đặc sản", "món ăn", "ẩm thực"]):
            if "nhà hàng" in available_types:
                shop_types.append("nhà hàng")
        for t in available_types:
            if t.lower() in question.lower() and t not in shop_types:
                shop_types.append(t)

    if not cities:
        for c in available_cities:
            if c.lower() in question.lower() and c not in cities:
                cities.append(c)

    # --- 3. Query DB nhiều điều kiện ---
    query = db.query(Shop)
    if shop_types:
        query = query.filter(Shop.type.in_(shop_types))
    if cities:
        query = query.filter(Shop.city.in_(cities))
    shops = query.all()
    formatted_shops = [format_shop(s, db) for s in shops]

    has_history = bool(history_summary)

    # --- 4. Trả lời ---
    context = f"""
    {history_summary if history_summary else ""}

    Người dùng vừa hỏi:
    "{raw_question}" (chuẩn hóa: "{question}")

    Danh sách quán và món ăn (JSON):
    {json.dumps(formatted_shops, ensure_ascii=False, indent=2)}

    Hãy trả lời:
    - **Dựa vào cách người dùng nói chuyện, tự lựa chọn cách xưng hô phù hợp** (ví dụ: bạn - tôi, em - anh, tao - mày… nếu hợp ngữ cảnh).
    - Nếu đã có cách xưng hô từ trước đó, hãy giữ nguyên để tạo cảm giác liền mạch.
    - Viết như một **hướng dẫn viên du lịch**: giọng văn hoa mỹ, hấp dẫn, khơi gợi cảm xúc và sự tích cực.
    {"- **Nếu có lịch sử trò chuyện ở trên, hãy nối tiếp tự nhiên, KHÔNG cần chào hỏi hay mở đầu giới thiệu lại**.\n" if has_history else "- Mở đầu 1-2 câu giới thiệu chung, văn phong mời gọi.\n"}
    - Danh sách món/quán trình bày dạng bullet rõ ràng:
    - Tên món/quán **in đậm**.
    - Mỗi món/quán cách dòng rõ ràng, thêm địa chỉ & giá (nếu có).
    - Kết thúc 1-2 câu gợi ý hoặc chúc vui vẻ.
    - **Dùng markdown** để xuống dòng và trình bày.
    - **Không có bullet rỗng** và không có dấu chấm thừa.
    """

    final_response = model.generate_content(context)

    # Xử lý bullet rỗng trước khi trả về
    cleaned_answer = re.sub(r"(?m)^\s*[-*]\s*$", "", final_response.text)

    return {
        "question": raw_question,
        "normalized": question,
        "filters": {"types": shop_types, "cities": cities},
        "results": formatted_shops,
        "answer": cleaned_answer
    }