# Soulista: Đi du lịch, ăn kịch nóc, quà kịch trần!

Soulista là ứng dụng đồng hành đáng tin cậy dành cho mọi du khách, giúp bạn khám phá những địa điểm ẩm thực đặc sắc và cửa hàng lưu niệm uy tín nhất Việt Nam một cách nhanh chóng và dễ dàng. Tạm biệt những băn khoăn về chất lượng, Soulista sẽ trở thành "stylist" cho hành trình trải nghiệm và mua sắm của bạn, đảm bảo mọi chuyến đi đều **ăn kịch nóc** và **quà kịch trần**.

## Soulista là gì?

Tên gọi **Soulista** được kết hợp từ hai từ tiếng Anh: **Souvenir** (quà lưu niệm) và **Lista** (danh sách). Cái tên này không chỉ gợi ý về một nền tảng cung cấp danh sách mà còn mang ý nghĩa của một người bạn đồng hành am hiểu, giúp bạn chọn lựa những điều tốt nhất.

Soulista được xây dựng trên triết lý:
* **Hướng dẫn:** Cung cấp thông tin chi tiết và đáng tin cậy về các địa điểm.
* **Chọn lọc:** Đề xuất những lựa chọn thông minh, đã được kiểm duyệt.
* **Trải nghiệm:** Giúp du khách tận hưởng chuyến đi trọn vẹn mà không cần lo lắng.

---

## Tại sao bạn cần Soulista?

Bạn đã từng loay hoay tìm kiếm quán ăn ngon nhưng lại lạc vào "mê hồn trận" thông tin trên mạng?
Bạn đã từng băn khoăn không biết nên mua quà lưu niệm ở đâu để vừa chất lượng, vừa độc đáo?

Với Soulista, những vấn đề đó sẽ được giải quyết. Ứng dụng của chúng tôi giúp bạn:
* **Khám phá đặc sản địa phương:** Dễ dàng tìm thấy các nhà hàng, quán ăn được người bản xứ tin dùng, đảm bảo bạn thưởng thức ẩm thực chuẩn vị.
* **Tìm mua quà lưu niệm chính hãng:** Truy cập danh sách các cửa hàng uy tín, nơi cung cấp những món quà ý nghĩa, chất lượng cao, đúng với giá trị của sản phẩm.
* **Đề xuất cá nhân hóa:** Dựa trên sở thích và vị trí của bạn, Soulista sẽ đưa ra những gợi ý phù hợp nhất.

Hãy để Soulista trở thành cầu nối tin cậy giữa bạn và những trải nghiệm tuyệt vời nhất tại Việt Nam.

---

## Hướng dẫn cài đặt và chạy ứng dụng

Để chạy Soulista, bạn cần cài đặt và cấu hình cả phần **Backend (Python - FastAPI)** và **Frontend (Vite - React)**.

### Yêu cầu

* [Node.js](https://nodejs.org/) (phiên bản 18 trở lên)
* [Python](https://www.python.org/) (phiên bản 3.9 trở lên)

### Cài đặt và chạy Backend (FastAPI)

1.  **Clone repository:**
    ```bash
    git clone <URL_repository_của_bạn>
    cd <tên_thư_mục_ứng_dụng>
    ```

2.  **Tạo và kích hoạt môi trường ảo (venv):**
    ```bash
    python -m venv venv
    # Trên Windows
    .\venv\Scripts\activate
    # Trên macOS/Linux
    source venv/bin/activate
    ```

3.  **Cài đặt các thư viện cần thiết:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Chạy server:**
    ```bash
    uvicorn main:app --reload
    ```
    Server sẽ chạy tại `http://127.0.0.1:8000`.

### Cài đặt và chạy Frontend (Vite)

1.  **Di chuyển vào thư mục frontend:**
    ```bash
    cd frontend
    ```

2.  **Cài đặt các dependencies:**
    ```bash
    npm install
    ```

3.  **Chạy ứng dụng:**
    ```bash
    npm run dev
    ```
    Ứng dụng sẽ chạy tại `http://localhost:5173`.

---

Hãy cùng Soulista bắt đầu hành trình "ăn kịch nóc, quà kịch trần" ngay hôm nay!
