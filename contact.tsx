export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Liên hệ với tôi</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Tên của bạn</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="Nhập tên của bạn"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="Nhập email của bạn"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Tin nhắn</label>
            <textarea
              rows={5}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="Nhập tin nhắn của bạn"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition"
          >
            Gửi tin nhắn
          </button>
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Email</p>
            <p className="text-foreground font-semibold">contact@example.com</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Điện thoại</p>
            <p className="text-foreground font-semibold">+84 123 456 789</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Địa chỉ</p>
            <p className="text-foreground font-semibold">Hà Nội, Việt Nam</p>
          </div>
        </div>
      </div>
    </section>
  )
}
