export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Portfolio</h3>
            <p className="text-gray-200 text-sm">Tạo ra những giải pháp sáng tạo cho doanh nghiệp của bạn</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#about" className="hover:text-accent transition">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Mạng xã hội</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-200">
          <p>&copy; 2025 Portfolio. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
