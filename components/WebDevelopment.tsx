"use client"

import { motion } from "framer-motion"
import { Globe, Search, ShoppingBag, Smartphone, Gauge, Lock } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "تصميم مواقع احترافية",
    description: "تصاميم عصرية تعكس هوية علامتك التجارية وتجذب العملاء",
    icon: Globe,
    stats: "+200 موقع",
  },
  {
    title: "متاجر إلكترونية متكاملة",
    description: "حلول تجارة إلكترونية متطورة مع أنظمة دفع وشحن متكاملة",
    icon: ShoppingBag,
    stats: "+50 متجر",
  },
  {
    title: "تحسين محركات البحث",
    description: "تحسين ظهور موقعك في نتائج البحث وزيادة الزيارات العضوية",
    icon: Search,
    stats: "تصدر النتائج",
  },
  {
    title: "تجربة مستخدم مثالية",
    description: "واجهات سهلة الاستخدام تعمل بكفاءة على جميع الأجهزة",
    icon: Smartphone,
    stats: "100% تجاوب",
  },
]

const technologies = [
  { name: "React", color: "bg-blue-500" },
  { name: "Next.js", color: "bg-black" },
  { name: "WordPress", color: "bg-blue-600" },
  { name: "Shopify", color: "bg-green-500" },
  { name: "WooCommerce", color: "bg-purple-500" },
]

export default function WebDevelopment() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* خلفية الكود */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      </div>

      <div className="container mx-auto relative">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            تطوير المواقع والمتاجر الإلكترونية
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            نبني تواجدك الرقمي
            <span className="text-primary block mt-2">بأحدث التقنيات العالمية</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            نقدم حلولاً متكاملة لتطوير المواقع والمتاجر الإلكترونية مع التركيز على تحسين محركات البحث وتجربة المستخدم
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* القسم المرئي */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* الميزات */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card hover:bg-card/80 rounded-2xl p-6 transition-all duration-300 h-full border border-border/50 hover:border-primary/50">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                    <div className="text-primary font-bold">{feature.stats}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* التقنيات */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-lg font-semibold mb-4">التقنيات المستخدمة</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`${tech.color} bg-opacity-10 px-4 py-2 rounded-full text-sm font-medium`}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* القسم التفاعلي */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/img20.avif"
                width={1000}
                height={1000}
                alt="تطوير المواقع"
                className="w-full aspect-[4/3] object-cover"
              />
              
              {/* بطاقات معلومات متحركة */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 bg-black/80 backdrop-blur-xl rounded-2xl p-4 text-white"
              >
                <div className="flex items-center gap-3">
                  <Gauge className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-sm opacity-80">سرعة الموقع</div>
                    <div className="text-lg font-bold">98/100</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl rounded-2xl p-4 text-white"
              >
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm opacity-80">حماية SSL</div>
                    <div className="text-lg font-bold">مؤمن 100%</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* زر الدعوة للعمل */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute -bottom-6 right-8 left-8"
            >
              <button className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg">
                احصل على عرض سعر مجاني
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 