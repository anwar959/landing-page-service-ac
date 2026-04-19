import { MessageCircle } from "lucide-react"

export const WhatsAppButton = () => {
  const whatsappNumber = "6281234567890" // Ganti dengan nomor WhatsApp Anda
  const message = "Halo, saya ingin bertanya tentang service AC" // Pesan default
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-success hover:bg-success/90 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat via WhatsApp
      </span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-20"></span>
    </button>
  )
}
