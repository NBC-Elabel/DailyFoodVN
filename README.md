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
Cấu trúc thư mục (ảnh nằm trong thư mục `images/`, cạnh `index.html`):

    index.html
    images/
      hai-san.jpg          tab Thủy hải sản
      trung.jpg            tab Lương thực và trứng
      bun-kho-tap-hoa.jpg  tab Đậu phụ, bún, tạp hóa
      banh.jpg             tab Bánh và trà
    assets/...

- `index.html` gọi ảnh bằng đường dẫn tương đối `images/tên-file.jpg`. Đẩy cả `index.html` và thư mục `images/` lên cùng một chỗ trên GitHub là chạy được.
- Muốn đổi ảnh: ghi đè file cùng tên trong `images/`, hoặc đổi `src` trong `index.html`. Nên để ảnh rộng khoảng 1200 px, dưới 300 KB, tỉ lệ 4:3.
- Các ảnh còn lại (đầu trang, phần giới thiệu, dải ảnh rộng, tab Thịt, tab Rau củ quả, phần kiểm soát an toàn) là ảnh stock của Unsplash, nhúng trực tiếp bằng đường dẫn `images.unsplash.com`. Muốn đưa hết về thư mục `images/`, tải ảnh về, đặt vào đó rồi đổi `src` tương ứng.
- Nếu ảnh không tải được, trang tự hiện nền màu hoặc hình minh họa, không bị vỡ bố cục.

## Hiệu ứng
Tự tắt khi thiết bị bật "Giảm chuyển động" (prefers-reduced-motion). Không có JavaScript thì mọi nội dung vẫn hiển thị đầy đủ.
