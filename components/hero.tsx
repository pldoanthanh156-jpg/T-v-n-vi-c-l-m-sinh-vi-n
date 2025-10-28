export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
          Chào mừng bạn đến với trang của tôi
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto text-balance">
          Tôi cung cấp các giải pháp chuyên nghiệp và sáng tạo cho doanh nghiệp của bạn
        </p>
        <button className="bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105">
          Bắt đầu ngay
        </button>
      </div>
    </section>
  )
}
