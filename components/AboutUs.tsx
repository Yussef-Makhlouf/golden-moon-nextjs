"use client"

import { motion } from "framer-motion"
import { Award, Users, Target, Rocket, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    value: "+15",
    label: "سنوات خبرة",
    icon: Award,
    color: "text-blue-500"
  },
  {
    value: "+1000",
    label: "عميل سعيد",
    icon: Users,
    color: "text-green-500"
  },
  {
    value: "+2500",
    label: "مشروع ناجح",
    icon: Target,
    color: "text-purple-500"
  }
]

const services = [
  "خدمات الدعاية والإعلان المتكاملة",
  "تصميم وتنفيذ الهويات البصرية",
  "إدارة الحملات الإعلانية",
  "حلول العرض الرقمية المتطورة"
]

export default function AboutUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-20 rounded-3xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/img23.avif"
                    alt="فريق القمر الذهبي"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority
                  />
                </div>
              </div>

              {/* Secondary Image */}


              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 z-30 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">+500%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">نمو سنوي</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-16">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-3 sm:p-4 bg-card/50 rounded-xl"
                >
                  <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${item.color}`} />
                  <div className="text-lg sm:text-2xl font-bold">{item.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6 sm:space-y-8"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                نحن القمر الذهبي
                <span className="text-primary block mt-2">شريكك في النجاح</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                منذ عام 2008، نقدم حلولاً إبداعية في مجال الدعاية والإعلان، نجمع بين الخبرة والابتكار لنصنع قصص نجاح لعملائنا.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-3 sm:space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm sm:text-base">{service}</span>
                </motion.div>
              ))}
            </div>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-primary/5 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">رؤيتنا</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  أن نكون الخيار الأول في حلول الدعاية والإعلان المبتكرة في المملكة
                </p>
              </div>
              <div className="bg-secondary/5 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">رسالتنا</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  تقديم خدمات إعلانية متميزة تساهم في نمو ونجاح عملائنا
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
