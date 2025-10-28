export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Về tôi</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/professional-portrait.jpg" alt="Ảnh đại diện" className="rounded-lg shadow-lg w-full" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tôi là một chuyên gia với hơn 5 năm kinh nghiệm trong lĩnh vực của mình. Tôi đam mê tạo ra những giải pháp
              sáng tạo và hiệu quả cho các thách thức kinh doanh.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Với sự kết hợp giữa kỹ năng kỹ thuật và tư duy chiến lược, tôi giúp các doanh nghiệp phát triển và đạt
              được mục tiêu của họ.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Dự án hoàn thành</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Khách hàng hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
