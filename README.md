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
Cấu trúc thư mục ảnh (nằm cạnh `index.html`):

    index.html
    images/
      hai-san.jpg, trung.jpg, bun-kho-tap-hoa.jpg, banh.jpg, rau-cu-qua.jpg, nong-san-tuoi.jpg   ảnh thật cho các tab/đầu trang
      gallery/            12 ảnh thật cho mục "Hình ảnh thực tế tại vùng nguyên liệu"
      certs/              28 ảnh chụp giấy chứng nhận/hồ sơ công bố, lấy thẳng từ bản scan gốc
      certs/thumbs/        bản thu nhỏ của 28 ảnh trên, dùng làm ảnh đại diện trong lưới
    assets/...

- Tab "Thịt" vẫn dùng ảnh stock Unsplash — chưa có ảnh thật phù hợp cho nhóm này.
- Ảnh đầu trang (photo--a, photo--b), phần "Giới thiệu", dải ảnh rộng giữa trang, phần kiểm soát an toàn vẫn là ảnh stock Unsplash.
- Mục "Hình ảnh thực tế tại vùng nguyên liệu" và toàn bộ ảnh giấy chứng nhận trong mục "Nhà cung cấp" dùng chung một khung xem phóng to (lightbox) — bấm vào ảnh để xem, đóng bằng nút X, phím Esc hoặc bấm ra ngoài. Với ảnh giấy chứng nhận có thêm nút "Mở ảnh gốc ở tab mới" để xem file gốc kích thước đầy đủ.
- Muốn đổi ảnh: ghi đè file cùng tên, hoặc đổi `src`/`data-full` trong `index.html`.
- Nếu ảnh không tải được, trang tự hiện nền màu hoặc hình minh họa, không bị vỡ bố cục.

## Hiệu ứng
Tự tắt khi thiết bị bật "Giảm chuyển động" (prefers-reduced-motion). Không có JavaScript thì mọi nội dung vẫn hiển thị đầy đủ.
