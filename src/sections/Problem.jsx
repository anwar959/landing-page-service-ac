import { ThermometerSnowflake, Volume2, Droplet, Unplug } from 'lucide-react';

const problemData = [
    {
        icon: ThermometerSnowflake,
        iconColor: "text-primary",
        bgColor: "bg-primary/10",
        hoverBgColor: "hover:bg-primary/20",
        title: "AC tidak dingin atau kurang maksimal",
        description: "AC Anda tidak dingin? Kami pastikan AC kembali dingin maksimal. Teknisi profesional siap atasi masalah refrigerant, filter kotor, hingga kompresor rusak."
    },
    {
        icon: Droplet,
        iconColor: "text-primary",
        bgColor: "bg-primary/10",
        hoverBgColor: "hover:bg-primary/20",
        title: "Bocor air dari unit indoor atau outdoor",
        description: "Bocor air merusak dinding dan lantai? Kami bersihkan saluran, perbaiki pipa, dan pastikan AC Anda bebas kebocoran 100%."
    },
    {
        icon: Volume2,
        iconColor: "text-amber-400",
        bgColor: "bg-amber-400/10",
        hoverBgColor: "hover:bg-amber-400/20",
        title: "Suara bising saat dinyalakan",
        description: "Suara berisik mengganggu kenyamanan? Kami cek dan perbaiki kipas, motor, dan kompresor AC Anda hingga senyap kembali seperti baru."
    },
    {
        icon: Unplug,
        iconColor: "text-amber-400",
        bgColor: "bg-amber-400/10",
        hoverBgColor: "hover:bg-amber-400/20",
        title: "Tagihan listrik membengkak",
        description: "Tagihan listrik membengkak? AC yang efisien hemat biaya! Kami servis dan optimalkan AC Anda agar hemat listrik hingga 30%."
    }
]

export const Problem = () => {
    return(
      <section id="problem" className="py-20 md:py-32 relative overflow-hidden bg-linear-to-t from-white to-primary/20">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-52 relative z-10">
            {/* Title Section */}
            <div className="text-center mb-12 md:mb-16 space-y-4">
                <div className="inline-block">
                    <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-xs md:text-sm font-semibold mb-4 animate-fade-in border border-red-500/20">
                        ⚠️ Masalah Umum AC
                    </span>
                </div>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide animate-fade-in animation-delay-100'>
                    AC Anda Mengalami Masalah Ini?
                </h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
                    Kami memahami betapa pentingnya AC yang berfungsi dengan baik. Berikut masalah yang sering kami tangani:
                </p>
            </div>

            {/* Problems Grid */}
            <div className='grid sm:grid-cols-2 gap-4 md:gap-6'>
            {problemData.map((problem, index) => {
            const IconComponent = problem.icon;
                return (
                    <div 
                        key={index} 
                        className="group glass-light rounded-2xl p-5 md:p-6 animate-fade-in w-full hover:glass hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20" 
                        style={{animationDelay: `${(index + 1) * 100}ms`}}
                    >
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                            {/* Icon Container */}
                            <div className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl ${problem.bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${problem.hoverBgColor}`}>
                                <IconComponent className={`w-7 h-7 md:w-9 md:h-9 ${problem.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                            </div>
                            
                            {/* Content */}
                            <div className='text-center sm:text-left flex-1'>
                                <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                                    {problem.title}
                                </h3>
                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>

            {/* Call to Action */}
            <div className="mt-10 md:mt-12 text-center animate-fade-in animation-delay-500">
                <div className="glass rounded-2xl p-5 md:p-6 max-w-2xl mx-auto border border-primary/20">
                    <p className="text-sm md:text-base font-medium text-foreground mb-2">
                        💡 Jangan tunggu sampai kerusakan semakin parah!
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                        Hubungi kami sekarang untuk konsultasi gratis dan jadwalkan servis hari ini juga.
                    </p>
                </div>
            </div>
        </div>
      </section>  
    )
}