export default function Services() {
  const services = [
    {
      icon: "🎨",
      title: "Thiết kế",
      description: "Tạo ra những thiết kế đẹp mắt và hiệu quả cho brand của bạn",
    },
    {
      icon: "💻",
      title: "Phát triển",
      description: "Xây dựng các ứng dụng web và mobile chất lượng cao",
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Phát triển ứng dụng di động cho iOS và Android",
    },
    {
      icon: "🚀",
      title: "Tối ưu hóa",
      description: "Cải thiện hiệu suất và trải nghiệm người dùng",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Dịch vụ của tôi</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
