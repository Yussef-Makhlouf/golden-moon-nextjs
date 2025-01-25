"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram,  Target,  Sparkles,  Youtube, Palette, Video, Globe, Share2, Crown, PenTool, Phone, MapPin } from "lucide-react"

import Link from "next/link"


// إضافة أيقونات SVG مخصصة
const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
  </svg>
)

const platforms = [
  { 
    icon: Facebook, 
    name: "فيسبوك", 
    color: "bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-500",
    stats: "+200K متابع"
  },
  { 
    icon: Instagram, 
    name: "انستجرام", 
    color: "bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-500",
    stats: "+150K متابع"
  },
  { 
    icon: TiktokIcon, 
    name: "تيكتوك", 
    color: "bg-gradient-to-br from-black/20 to-gray-800/20 text-black dark:text-white",
    stats: "+100K متابع"
  },
  { 
    icon: SnapchatIcon, 
    name: "سناب شات", 
    color: "bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 text-yellow-500",
    stats: "+50K مشاهدة"
  },
  { 
    icon: Youtube, 
    name: "يوتيوب", 
    color: "bg-gradient-to-br from-red-500/20 to-red-600/20 text-red-500",
    stats: "+1M مشاهدة"
  },
]

const services = [
  {
    title: "تصميم الهوية البصرية",
    description: "تصاميم مبتكرة تعكس هويتك التجارية بأفضل صورة",
    icon: Palette,
    stats: "+500 هوية تجارية",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "مونتاج وموشن جرافيك",
    description: "فيديوهات احترافية مع فويس اوفر لعرض خدماتك",
    icon: Video,
    stats: "+1000 فيديو",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "تصميم المواقع والمتاجر",
    description: "مواقع ومتاجر إلكترونية متجاوبة مع جميع الأجهزة",
    icon: Globe,
    stats: "+200 موقع",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "إدارة الحملات الإعلانية",
    description: "حملات إعلانية مدروسة تصل لجمهورك المستهدف",
    icon: Target,
    stats: "95% معدل النجاح",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "إدارة السوشيال ميديا",
    description: "محتوى إبداعي وإدارة احترافية لمنصاتك الاجتماعية",
    icon: Share2,
    stats: "+50 عميل شهرياً",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "كتابة المحتوى",
    description: "محتوى إبداعي يجذب جمهورك ويحقق أهدافك",
    icon: PenTool,
    stats: "+1000 مقال",
    gradient: "from-teal-500/20 to-cyan-500/20"
  },
]

// تنظيم الألوان الرئيسية
const themeColors = {
  primary: {
    light: "from-primary/10",
    medium: "from-primary/20",
    default: "from-primary",
    text: "text-primary"
  },
  secondary: {
    light: "to-secondary/10",
    medium: "to-secondary/20",
    default: "to-secondary",
    text: "text-secondary"
  }
}

// تنظيم المكونات الفرعية
const HeroTitle = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center max-w-4xl mx-auto mb-24 space-y-8"
  >
    <motion.div 
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      className={`inline-flex items-center bg-gradient-to-r ${themeColors.primary.medium} ${themeColors.secondary.medium} rounded-full px-8 py-3 mb-8 backdrop-blur-sm`}
    >
      <Crown className="w-6 h-6 ml-3" />
      <span className={`text-lg font-semibold ${themeColors.primary.text}`}>
        القمر الذهبي - شريكك الاستراتيجي في عالم الدعاية والإعلان
      </span>
    </motion.div>
    
    <h3 className={`text-3xl lg:text-2xl font-bold  pb-2 text-[#590d3d] bg-clip-text`}>
      نصنع لك حضوراً رقمياً يليق بطموحك
    </h3>
    

  </motion.div>
)

// إضافة زر Behance
const BehanceButton = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="text-center mt-12"
  >
    <Link 
      href="https://www.behance.net/golden_moon?tracking_source=userSearchProfilePanel"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-gradient-to-r ${themeColors.primary.medium} ${themeColors.secondary.medium} 
        px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:shadow-lg transition-all`}
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M22 7h-7V2H9v5H2v15h20V7zM9 13.47V16H7v-2.53h2zm4 0V16h-2v-2.53h2zm4 0V16h-2v-2.53h2z"/>
      </svg>
      استكشف معرض أعمالنا
    </Link>
  </motion.div>
)

const ServicesSection = ({ services }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
  >
    {services.map((service, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.02 }}
        className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 backdrop-blur-sm border border-white/10`}
      >
        <service.icon className="w-12 h-12 mb-6 text-primary" />
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        <div className="text-sm font-semibold text-primary">{service.stats}</div>
      </motion.div>
    ))}
  </motion.div>
)

const LocationSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mt-24"
  >
    <div className="inline-flex items-center gap-3 bg-muted/50 rounded-full px-6 py-3">
      <MapPin className="w-5 h-5 text-primary" />
      <span className="text-lg">جدة حي الفيصلية - تقاطع التحلية مع المكرونة</span>
    </div>
    <div className="mt-4 flex items-center justify-center gap-4">
      <Link href="tel:0563009155" className="text-primary hover:underline">0563009155</Link>
      <span className="text-muted-foreground">|</span>
      <Link href="tel:0565265233 " className="text-primary hover:underline">0565265233 </Link>
    </div>
  </motion.div>
)

export default function SocialMediaPower() {
  return (
    <section className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background effects */}
    
      <div className="container mx-auto px-4 relative">
        <HeroTitle />
        
        {/* Platforms Grid */}
        <PlatformsGrid platforms={platforms} />
        
        {/* Services Section */}
        <ServicesSection services={services} />
        
        {/* Behance Button */}
        <BehanceButton />
        
        {/* Location Section */}
        <LocationSection />
      </div>
    </section>
  )
}

// تنظيم مكونات المنصات
const PlatformsGrid = ({ platforms }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24"
  >
    {platforms.map((platform, index) => (
      <PlatformCard key={index} platform={platform} />
    ))}
  </motion.div>
)

const PlatformCard = ({ platform }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className={`${platform.color} rounded-2xl p-8 text-center shadow-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all`}
  >
    <div className="w-16 h-16 mx-auto mb-4">
      <platform.icon className="w-full h-full" />
    </div>
    <div className="font-bold text-lg mb-2">{platform.name}</div>
    <div className="text-sm opacity-80">{platform.stats}</div>
  </motion.div>
)

// ... rest of the components (ServicesSection, LocationSection) with similar organization
