"use client"

import { motion } from "framer-motion"
import { Monitor, PenTool, Megaphone, ArrowRight, Layout } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "شاشات LED فائقة الجودة",
    description: "شاشات رقمية متطورة بتقنية 4K في مستشفيات جدة",
    image: "/img10.avif",
    features: ["دقة عرض 4K", "سطوع عالي", "مقاومة للغبار", "تشغيل 24/7"],
    icon: Monitor,
    stats: "+300 شاشة",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "انتشار استراتيجي",
    description: "تغطية شاملة في أهم المراكز الطبية بجدة",
    image: "/img11.avif",
    features: ["غرف الانتظار", "المداخل الرئيسية", "العيادات", "الممرات الحيوية"],
    icon: PenTool,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "محتوى طبي متخصص",
    description: "برامج توعوية وإرشادية مخصصة للقطاع الصحي",
    image: "/img13.avif",
    features: ["نصائح طبية", "معلومات صحية", "إرشادات وقائية", "أخبار طبية"],
    icon: Megaphone,
    gradient: "from-amber-500 to-orange-500"
  },
  {
    title: "خدمات إعلانية متكاملة",
    description: "حلول إعلانية مبتكرة للقطاع الطبي",
    image: "/img14.avif",
    features: ["تصميم محتوى", "جدولة العرض", "تقارير أداء", "دعم فني"],
    icon: Layout,
    gradient: "from-green-500 to-emerald-500"
  }
]


export default function FeaturedServices() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden" id="خدماتنا">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl    lg:text-5xl font-bold mb-4 sm:mb-6">
            خدمات احترافية
            <span className="text-primary block mt-2">تحقق طموحاتك</span>
          </h2>
          <p className="text-base  text-black-foreground">
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
                  <div className="aspect-[16/9] relative">
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
        
           
                </div>
              </div>
              {/* Content */}
              <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                <div className={`bg-gradient-to-r ${service.gradient} text-white w-fit text-sm font-medium px-4 py-1.5 rounded-full`}>
                  {service.title}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold leading-relaxed mb-4">{service.description}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mt-4 sm:mt-6"
                  aria-label="Learn More"
                >
                  <span className="text-sm sm:text-base"> احجز شاشاتك الاعلانية الان</span>
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
