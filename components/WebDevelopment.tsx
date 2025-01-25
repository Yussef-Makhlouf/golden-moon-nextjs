"use client"

import { motion } from "framer-motion"
import { Search, ShoppingBag, Smartphone} from "lucide-react"
import Link from "next/link"


const features = [
  {
    title: "تصميم مواقع متجاوبة",
    description: "تصاميم عصرية تعمل على جميع الأجهزة بكفاءة عالية",
    icon: Smartphone,
    stats: "100% توافق",
    details: ["تجربة مستخدم سلسة", "سرعة تحميل عالية", "تصميم عصري", "حماية SSL مجانية"]
  },
  {
    title: "متاجر إلكترونية",
    description: "منصات بيع احترافية مع أنظمة دفع آمنة",
    icon: ShoppingBag,
    stats: "حلول متكاملة",
    details: ["إدارة المخزون", "بوابات دفع متعددة", "تقارير مبيعات", "دعم فني 24/7"]
  },
  {
    title: "تحسين محركات البحث",
    description: "تصدر نتائج البحث وزيادة الزيارات العضوية",
    icon: Search,
    stats: "تصدر النتائج",
    details: ["تحليل الكلمات", "تحسين المحتوى", "تقارير شهرية", "روابط خلفية قوية"]
  }
]
const technologies = [
  { name: "React", color: "bg-blue-500" },
  { name: "Next.js", color: "bg-black" },
  { name: "Node.js", color: "bg-blue-600" },
  { name: "Shopify", color: "bg-green-500" },
  { name: "Angular", color: "bg-purple-500" },
  { name: "HTML", color: "bg-green-400" },
  {name: "CSS", color: "bg-blue-400" },
  { name: "JavaScript", color: "bg-yellow-500" },



]

export default function WebDevelopment() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto">
        {/* العنوان الرئيسي */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span 
            className="text-xs md:text-sm text-primary/80 dark:text-primary/60 uppercase tracking-wider mb-4 block"
          >
            تطوير المواقع والمتاجر الإلكترونية
          </motion.span>
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight"
          >
            نبني حضورك الرقمي
            <span className="text-primary block mt-2">بأحدث التقنيات العالمية</span>
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            نقدم حلولاً تقنية متكاملة تجمع بين التصميم الإبداعي والأداء العالي
          </motion.p>
        </div>

        {/* العناصر الرئيسية */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 h-full border border-gray-100 dark:border-gray-800 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      <span className="text-xs md:text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm font-medium text-primary">{feature.stats}</span>
                    <motion.button
                      whileHover={{ x: 5 }}

                      className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                      aria-label="تواصل معنا"
                    >
                      <Link href="tel:0563009155">تواصل معنا
                      
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* قسم التقنيات */}
        <div className="text-center">
          <h3 className="text-sm md:text-base font-medium mb-6">التقنيات المستخدمة</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full text-xs md:text-sm ${tech.color} bg-opacity-10`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
