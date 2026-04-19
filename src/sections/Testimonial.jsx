import { Check, UserRound, Quote } from 'lucide-react'

const testimonialData = [
    {
        title: "Teknisi Berpengalaman",
        description: "Teknisinya sangat profesional dan berpengalaman, masalah AC saya langsung teratasi dengan baik",
        user: "Muhamad Arifin - Lampung",
        rating: 5
    },
    {
        title: "Respons Cepat",
        description: "Pelayanannya cepat dan responsif, tidak perlu menunggu lama untuk mendapat bantuan",
        user: "Siti Nurhaliza - Jember",
        rating: 5
    },
    {
        title: "Harga Transparan",
        description: "Harganya jelas dari awal, tidak ada biaya tambahan yang mengejutkan di akhir pekerjaan",
        user: "Budi Santoso - Semboro",
        rating: 5
    },
    {
        title: "Garansi Pekerjaan",
        description: "Saya merasa tenang karena ada garansi untuk setiap pekerjaan yang dikerjakan",
        user: "Dewi Lestari - Tanggul",
        rating: 5
    }
]


export const Testimonial = () => {
    return(
      <section id="testimonial" className="py-20 md:py-32 relative overflow-hidden bg-linear-to-t from-primary/20 to-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-52 relative z-10">
            {/* Title Section */}
            <div className="text-center mb-12 md:mb-16 space-y-4">
                <div className="inline-block">
                    <span className="inline-block px-4 py-2 rounded-full bg-amber-400/10 text-amber-400 text-xs md:text-sm font-semibold mb-4 animate-fade-in border border-amber-400/20">
                        ⭐ Testimoni Pelanggan
                    </span>
                </div>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide animate-fade-in animation-delay-100'>
                    Kenapa Memilih Kami?
                </h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
                    Kepercayaan pelanggan adalah prioritas kami. Dengarkan langsung dari mereka yang telah merasakan layanan kami
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
            {testimonialData.map((testimonial, index) => {
                return (
                <div 
                    key={index} 
                    className="group glass-light rounded-2xl p-5 md:p-6 animate-fade-in w-full hover:glass hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 border border-transparent hover:border-primary/30 relative overflow-hidden" 
                    style={{animationDelay: `${(index + 1) * 100}ms`}}
                >
                    {/* Quote Icon Background */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <Quote className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                    </div>

                    <div className='space-y-4 relative z-10'>
                        {/* Header with Avatar and Rating */}
                        <div className='flex items-start gap-3'>
                            <div className='shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-primary/20'>
                                <UserRound className='w-6 h-6 md:w-7 md:h-7 text-primary'/>
                            </div>
                            <div className='flex-1'>
                                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                                    {testimonial.title}
                                </h3>
                                {/* Star Rating */}
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-amber-400 text-sm">⭐</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Text */}
                        <div className="relative">
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                                &ldquo;{testimonial.description}&rdquo;
                            </p>
                        </div>

                        {/* User Badge */}
                        <div className='flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-2.5 border border-primary/10 group-hover:border-primary/20 transition-colors duration-300'>
                            <div className='shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center'>
                                <Check className='w-3 h-3 text-primary'/>
                            </div>
                            <p className="text-xs md:text-sm font-medium text-foreground">
                                {testimonial.user}
                            </p>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 md:mt-12 text-center animate-fade-in animation-delay-500">
                <div className="glass rounded-2xl p-5 md:p-6 max-w-2xl mx-auto border border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <p className="text-sm md:text-base font-semibold text-foreground mb-2">
                        💬 Bergabunglah dengan 200+ Pelanggan yang Puas!
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                        Dapatkan layanan AC terbaik dengan harga terjangkau dan hasil yang memuaskan
                    </p>
                </div>
            </div>
        </div>
      </section>  
    )
}