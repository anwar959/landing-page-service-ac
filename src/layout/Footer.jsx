import { Facebook, MessageCircle, Instagram, Circle, MapPin, Phone, Mail, Clock } from "lucide-react";

const footerLinks = [
    { 
        title: "Area Layanan", 
        icon: MapPin,
        items: ["Semboro", "Tanggul", "Jember", "Sekitarnya"] 
    },
    { 
        title: "Jam Operasional", 
        icon: Clock,
        items: ["Senin - Jumat: 08.00 - 17.00", "Sabtu: 08.00 - 12.00", "Minggu: Tutup"] 
    }
]

const contactInfo = [
    { icon: Phone, text: "+62 821-xxxx-xxxx", href: "tel:+62821xxxxxxxx" },
    { icon: MessageCircle, text: "WhatsApp Kami", href: "#" },
    { icon: Mail, text: "info@serviceac.com", href: "mailto:info@serviceac.com" }
]

export const Footer = () => { 
    const currentYear = new Date().getFullYear();
    
    return ( 
        <footer className="relative overflow-hidden bg-linear-to-b from-slate-900 to-slate-800">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
            
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        {/* Brand Section */}
                        <div className="text-center md:text-left lg:col-span-1 animate-fade-in space-y-4">
                            <a href="#" className="inline-block group">
                                <h2 className="text-2xl md:text-3xl text-white font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                    SACS<span className="text-primary group-hover:scale-125 inline-block transition-transform duration-300">.</span>
                                </h2>
                            </a>
                            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                Service AC Profesional & Terpercaya di Jember
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
                                <div className="flex -space-x-2">
                                    {[1,2,3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-slate-800 flex items-center justify-center">
                                            <span className="text-xs text-white">👤</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400">200+ Pelanggan Puas</p>
                            </div>
                        </div>

                        {/* Links Sections */}
                        {footerLinks.map((footer, index) => {
                            const IconComponent = footer.icon;
                            return (
                                <div key={index} className="text-center md:text-left animate-fade-in" style={{animationDelay: `${(index + 1) * 100}ms`}}>
                                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <IconComponent className="w-4 h-4 text-primary" />
                                        </div>
                                        <h3 className="text-base md:text-lg font-semibold text-white">{footer.title}</h3>
                                    </div>
                                    <ul className="space-y-2.5">
                                        {footer.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="group">
                                                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">
                                                    <Circle className="w-1.5 h-1.5 text-primary fill-primary group-hover:scale-125 transition-transform" />
                                                    <span className="text-xs md:text-sm">{item}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}

                        {/* Contact Section */}
                        <div className="text-center md:text-left animate-fade-in animation-delay-300">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Phone className="w-4 h-4 text-primary" />
                                </div>
                                <h3 className="text-base md:text-lg font-semibold text-white">Hubungi Kami</h3>
                            </div>
                            <ul className="space-y-3">
                                {contactInfo.map((contact, idx) => {
                                    const IconComponent = contact.icon;
                                    return (
                                        <li key={idx}>
                                            <a 
                                                href={contact.href}
                                                className="group flex items-center justify-center md:justify-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                                    <IconComponent className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                                </div>
                                                <span className="text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors">
                                                    {contact.text}
                                                </span>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider with gradient */}
                <div className="relative h-px">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
                </div>

                {/* Bottom Section */}
                <div className="py-6 md:py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <div className="text-center md:text-left order-2 md:order-1">
                            <p className="text-xs md:text-sm text-gray-400">
                                &copy; {currentYear} <span className="text-white font-semibold">SACS</span>. All rights reserved.
                            </p>
                        </div>

                        {/* Social Media */}
                        <div className="flex items-center gap-3 order-1 md:order-2">
                            <span className="text-xs text-gray-400 hidden sm:block">Follow Us:</span>
                            <div className="flex items-center gap-3">
                                <a 
                                    href="#" 
                                    className="group relative p-2.5 rounded-full bg-white/5 hover:bg-primary border border-white/10 hover:border-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    aria-label="WhatsApp"
                                >
                                    <MessageCircle className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors group-hover:rotate-12" />
                                    <div className="absolute inset-0 rounded-full bg-primary blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                </a>
                                <a 
                                    href="#" 
                                    className="group relative p-2.5 rounded-full bg-white/5 hover:bg-primary border border-white/10 hover:border-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors group-hover:rotate-12" />
                                    <div className="absolute inset-0 rounded-full bg-primary blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                </a>
                                <a 
                                    href="#" 
                                    className="group relative p-2.5 rounded-full bg-white/5 hover:bg-primary border border-white/10 hover:border-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors group-hover:rotate-12" />
                                    <div className="absolute inset-0 rounded-full bg-primary blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Location Badge */}
                    <div className="mt-6 flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10 group cursor-pointer">
                            <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                            <span className="text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors">
                                Semboro, Jember, Jawa Timur
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="h-1 bg-linear-to-r from-transparent via-primary to-transparent"></div>
        </footer>
    )
}