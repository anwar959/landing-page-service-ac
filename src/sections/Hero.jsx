import { Button } from "@/components/Button";
import { MessageCircle } from "lucide-react";
import bgHero from "/hero_section.png";
    
export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img 
                    src={bgHero} 
                    alt="Hero Background" 
                    className="w-full h-full object-cover object-center opacity-90" 
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-background/95 via-background/80 to-transparent md:from-background/90 md:via-background/70"></div>
                
                {/* Animated Gradient Circles */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-20 relative z-10">
                <div className="max-w-4xl mx-auto lg:mx-0">
                    {/* Main Content */}
                    <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                        {/* Title */}
                        <div className="space-y-3 md:space-y-4">
                            <div className="inline-block">
                                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4 animate-fade-in border border-primary/20">
                                    ⚡ Layanan Profesional & Terpercaya
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                                <span className="block text-primary glow-text mb-2">Service AC</span>
                                <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                                    Profesional & Bergaransi
                                </span>
                                <span className="block text-base sm:text-lg md:text-xl font-serif text-foreground/80 italic font-normal mt-2">
                                    Cepat, Rapi dan Terpercaya
                                </span> 
                            </h1>
                        </div>

                        {/* Description Card */}
                        <div className="glass rounded-2xl p-4 md:p-6 glow-border max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-200 hover:scale-[1.02] transition-transform duration-300">
                            <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                                <span className="font-semibold text-primary">Layanan Lengkap:</span> Instalasi, bongkar pasang, cuci bersih, dan perbaikan AC dengan teknisi berpengalaman. Respons cepat, harga transparan, tanpa biaya tersembunyi.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-300">
                            {[
                                { icon: "⚡", text: "Respons Cepat" },
                                { icon: "✓", text: "Bergaransi" },
                                { icon: "💰", text: "Harga Terjangkau" },
                            ].map((feature, index) => (
                                <div 
                                    key={index} 
                                    className="glass-light rounded-xl p-3 md:p-4 text-center hover:glass hover:scale-105 transition-all duration-300 cursor-pointer"
                                    style={{animationDelay: `${(index + 4) * 100}ms`}}
                                >
                                    <span className="text-2xl md:text-3xl mb-1 md:mb-2 block">{feature.icon}</span>
                                    <p className="text-xs md:text-sm font-medium text-foreground">{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center lg:justify-start animate-fade-in animation-delay-400">
                            <Button size="default" className="w-full sm:w-auto shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                                <MessageCircle className="w-4 h-4 md:w-5 md:h-5"/>
                                Pesan Sekarang
                            </Button>
                            <Button variant="outline" size="default" className="w-full sm:w-auto">
                                Lihat Layanan
                            </Button>
                        </div>

                        {/* Trust Badge */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-4 md:pt-6 animate-fade-in animation-delay-500">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-lg md:text-xl">⭐</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs md:text-sm font-semibold text-foreground">4.9/5.0</p>
                                    <p className="text-xs text-muted-foreground">Rating</p>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-border"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-lg md:text-xl">✓</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs md:text-sm font-semibold text-foreground">200+</p>
                                    <p className="text-xs text-muted-foreground">AC Ditangani</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )    
}