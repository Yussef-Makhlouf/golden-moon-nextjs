"use client"

import { Card } from "@/components/ui/card"
import { Megaphone, Globe, Palette, Printer, MonitorSmartphone, Camera } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "التسويق الرقمي",
    description: "استراتيجيات تسويقية مبتكرة لتعزيز تواجدك الرقمي وزيادة المبيعات",
    icon: Globe,
    image: "/services/digital-marketing.jpg",
    color: "from-blue-500/20 via-blue-500/10 to-transparent"
  },
  {
    title: "تطوير المواقع",
    description: "تصميم وبرمجة مواقع احترافية تناسب جميع الأجهزة وتحسين تجربة المستخدم",
    icon: MonitorSmartphone,
    image: "/services/web-development.jpg",
    color: "from-purple-500/20 via-purple-500/10 to-transparent"
  },
  {
    title: "الهوية البصرية",
    description: "تصميم هوية بصرية فريدة تعكس قيم وأهداف علامتك التجارية بشكل مميز",
    icon: Palette,
    image: "/services/branding.jpg",
    color: "from-orange-500/20 via-orange-500/10 to-transparent"
  },
  {
    title: "خدمات الطباعة",
    description: "طباعة عالية الجودة لجميع أنواع المواد الدعائية باستخدام أحدث التقنيات",
    icon: Printer,
    image: "/services/printing.jpg",
    color: "from-green-500/20 via-green-500/10 to-transparent"
  },
  {
    title: "إنتاج الفيديو",
    description: "إنتاج محتوى فيديو احترافي لتعزيز رسالتك وجذب الجمهور المستهدف",
    icon: Camera,
    image: "/services/video-production.jpg",
    color: "from-red-500/20 via-red-500/10 to-transparent"
  },
  {
    title: "إدارة وسائل التواصل",
    description: "إدارة محترفة لحسابات التواصل الاجتماعي لزيادة التفاعل وبناء مجتمع قوي",
    icon: Megaphone,
    image: "/services/social-media.jpg",
    color: "from-indigo-500/20 via-indigo-500/10 to-transparent"
  },
]

export default function Services() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4 mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            خدماتنا المتكاملة
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الاحترافية لتحقيق رؤيتك وأهدافك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square cursor-pointer">
                {/* الصورة الرئيسية */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* محتوى الخدمة */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* الأيقونة والعنوان */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-2xl bg-background/10 backdrop-blur-sm flex items-center justify-center"
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-right"
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed max-w-[280px]">
                        {service.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* زر التفاعل */}
                  <motion.div
                    whileHover={{ x: -8 }}
                    className="self-end"
                  >
                    <button className="text-white font-medium group-hover:text-white/90 transition-colors duration-300 flex items-center gap-2">
                      اكتشف المزيد
                      <svg
                        className="w-5 h-5 transform rotate-180 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </motion.div>
                </div>

                {/* تأثير التحويم */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

