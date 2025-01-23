"use client"

import { motion } from "framer-motion"
import { Monitor, PenTool, Megaphone, ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "شاشات LED المتطورة",
    description: "شاشات رقمية عالية الدقة تجذب الأنظار في المواقع الاستراتيجية",
    image: "/img17.avif",
    features: ["جودة عرض فائقة", "تحكم ذكي", "محتوى ديناميكي", "تقارير أداء"],
    icon: Monitor,
    stats: "+300 موقع",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "الهوية البصرية",
    description: "تصميم هوية بصرية متكاملة تعكس قيم علامتك التجارية",
    image: "/img16.avif",
    features: ["شعار احترافي", "نظام ألوان", "خطوط مميزة", "تطبيقات الهوية"],
    icon: PenTool,
    stats: "+1000 عميل",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "التسويق الرقمي",
    description: "حملات تسويقية مدروسة تصل لجمهورك المستهدف",
    image: "/img15.avif",
    features: ["استراتيجية متكاملة", "محتوى إبداعي", "إدارة منصات", "تحليل النتائج"],
    icon: Megaphone,
    stats: "95% نجاح",
    gradient: "from-amber-500 to-orange-500"
  }
]

export default function FeaturedServices() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            خدمات احترافية
            <span className="text-primary block mt-2">تحقق طموحاتك</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            نقدم باقة متكاملة من الخدمات الإعلانية المبتكرة لنساعدك في الوصول إلى أهدافك
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col gap-8 sm:gap-12 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Visual Section */}
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Stats */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4">
                      <div className="flex justify-between items-center text-white">
                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                        <span className="text-lg sm:text-xl font-bold">{service.stats}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                <div className={`bg-gradient-to-r ${service.gradient} text-white w-fit text-sm font-medium px-4 py-1.5 rounded-full`}>
                  {service.title}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold">{service.description}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mt-4 sm:mt-6"
                >
                  <span className="text-sm sm:text-base">اكتشف المزيد</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
