import CuciImg from '/service_three.png'
import BongkarImg from '/service_two.png'
import InstallImg from '/service_one.png'
import ServiceImg from '/service_four.png'
import { Check } from 'lucide-react'

const serviceData = [
    {
        img: InstallImg,
        title: "Installasi AC Baru",
        description: "Instalasi AC dari awal - Rapi & Sesuai Standar",
        items: ["Survey Lokasi", "Instalasi bracket & Pipa", "Vakum Freon", "Testing Menyeluruh", "Garansi Pemasangan"]
    },
    {
        img: CuciImg,
        title: "Cuci Bersih AC",
        description: "AC lebih Dingin, Udara Lebih Sehat",
        items: ["Cuci Evaporator", "Cuci Filter", "Cuci Outdoor", "Anti Jamur & bakteri", "Garansi Kebersihan"]
    },
    {
        img: ServiceImg,
        title: "Perbaikan AC Rusak",
        description: "Perbaikan Cepat & Tepat Sasaran",
        items: ["Diagnosa Masalah", "Perbaikan Komponen", "Penggantian Sparepart", "Testing Menyeluruh", "Garansi Perbaikan"]
    },
    {
        img: BongkarImg,
        title: "Bongkar Pasang AC",
        description: "Pindah Rumah? Kami Siap Lepas & Pasang Kembali",
        items:["Bongkar Aman", "Packing Unit", "Pasang Ulang Presisi", "Cek Tekanan Freon", "Garansi Bongkar Pasang"]
    }
]


export const Service = () => {
    return(
      <section id="service" className="py-20 md:py-32 relative overflow-hidden bg-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-52 relative z-10">
            {/* Title Section */}
            <div className="text-center mb-12 md:mb-16 space-y-4">
                <div className="inline-block">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4 animate-fade-in border border-primary/20">
                        ⚙️ Layanan Profesional
                    </span>
                </div>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide animate-fade-in animation-delay-100'>
                    Layanan Kami
                </h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
                    Solusi lengkap untuk semua kebutuhan AC Anda dengan teknisi berpengalaman dan harga transparan
                </p>
            </div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
            {serviceData.map((service, index) => {
                return (
                <div 
                    key={index} 
                    className="group glass-light rounded-2xl p-5 md:p-6 animate-fade-in w-full hover:glass hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 border border-transparent hover:border-primary/30" 
                    style={{animationDelay: `${(index + 1) * 100}ms`}}
                >
                    <div className='text-center space-y-4'>
                        {/* Image with overlay effect */}
                        <div className="relative overflow-hidden rounded-xl">
                            <img 
                                src={service.img} 
                                alt={service.title} 
                                className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
                            {/* Floating badge on image */}
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Populer ✨
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        {/* Items List */}
                        <ul className="text-left text-xs md:text-sm text-muted-foreground space-y-2">
                            {service.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 group/item hover:text-primary transition-colors duration-200">
                                    <div className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                )
            })}
            </div>

            {/* Trust Badge - Enhanced */}
            <div className="mt-10 md:mt-12 animate-fade-in animation-delay-500">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 glass rounded-2xl p-5 md:p-6 max-w-3xl mx-auto border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                    {/* Badge 1 */}
                    <div className="flex items-center gap-3">
                        <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center group hover:scale-110 transition-transform duration-300'>
                            <Check className='w-5 h-5 md:w-6 md:h-6 text-primary'/>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg md:text-xl font-bold text-amber-400">
                                200+
                            </p>
                            <p className="text-xs md:text-sm text-muted-foreground">
                                AC Ditangani
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:block w-px h-12 bg-border"></div>

                    {/* Badge 2 */}
                    <div className="flex items-center gap-3">
                        <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/10 flex items-center justify-center group hover:scale-110 transition-transform duration-300'>
                            <span className='text-lg md:text-xl'>⭐</span>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg md:text-xl font-bold text-green-500">
                                4.9/5.0
                            </p>
                            <p className="text-xs md:text-sm text-muted-foreground">
                                Rating Pelanggan
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:block w-px h-12 bg-border"></div>

                    {/* Badge 3 */}
                    <div className="flex items-center gap-3">
                        <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 flex items-center justify-center group hover:scale-110 transition-transform duration-300'>
                            <span className='text-lg md:text-xl'>🛡️</span>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg md:text-xl font-bold text-blue-500">
                                100%
                            </p>
                            <p className="text-xs md:text-sm text-muted-foreground">
                                Bergaransi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>  
    )
}