# DAILY FOOD VN - Hồ sơ năng lực (GitHub Pages)

Trang tĩnh, không cần build.

    index.html
    assets/css/tokens.css   màu, font, khoảng cách (sửa ở đây trước)
    assets/css/style.css
    assets/js/main.js       hiệu ứng cuộn, tab nhóm hàng, nút gọi nổi, nút chép mã

## Đưa lên GitHub Pages
1. Tạo repo mới, tải toàn bộ thư mục này lên (index.html nằm ở gốc repo).
2. Settings > Pages > Source: "Deploy from a branch", chọn nhánh `main`, thư mục `/ (root)`.
3. Chờ 1 đến 2 phút, trang có tại https://<tên-tài-khoản>.github.io/<tên-repo>/

## Ảnh
- Ảnh kiểu siêu thị, sạch sẽ (rau củ, trái cây, thịt trong tủ trưng bày, bánh), lấy từ Unsplash và nhúng trực tiếp bằng đường dẫn `images.unsplash.com`. Đây là ảnh stock, chưa phải ảnh của công ty. Unsplash cho dùng miễn phí, kể cả thương mại.
- Để thay bằng ảnh thật: chép ảnh vào `assets/img/`, rồi trong `index.html` đổi `src` của thẻ `<img>` tương ứng (tìm `images.unsplash.com`), nhớ sửa luôn `alt`.
- 3 nhóm hàng chưa có ảnh (Thủy hải sản, Lương thực và trứng, Đậu phụ/bún/tạp hóa) đang hiển thị hình minh họa. Trong mỗi khối `.stage__media` có sẵn một dòng chú thích, chỉ cần bỏ dấu chú thích và đặt tên file ảnh đúng như trong dòng đó.
- Nếu ảnh không tải được, trang tự hiện nền màu, không bị vỡ bố cục.

## Hiệu ứng
Tự tắt khi thiết bị bật "Giảm chuyển động" (prefers-reduced-motion). Không có JavaScript thì mọi nội dung vẫn hiển thị đầy đủ.
