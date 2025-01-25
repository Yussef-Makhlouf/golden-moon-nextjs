"use client"

import { motion } from "framer-motion"
import { Phone, ArrowUpRight, MessageCircle } from "lucide-react"
import Image from "next/image"

const contactNumbers = [
  { number: "0562924514", label: "المبيعات" },
  { number: "0569773045", label: "خدمة العملاء" },
  { number: "0571952988", label: "الدعم الفني" }
]

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt="خلفية"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/95" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              ابدأ رحلة نجاحك
              <span className="text-secondary block mt-2">مع القمر الذهبي</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              نقدم حلولاً إبداعية متكاملة في مجال الدعاية والإعلان. دعنا نساعدك في تحقيق رؤيتك وأهدافك
            </p>

            {/* Contact Numbers Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {contactNumbers.map((contact, index) => (
                <motion.a
                  key={index}
                  href={`tel:${contact.number}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Phone className="w-5 h-5 text-secondary" />
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-lg font-bold">{contact.number}</div>
                  <div className="text-sm text-white/70">{contact.label}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white"
          >
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold">تواصل معنا الآن</h3>
              <p className="text-white/80">اختر الطريقة المناسبة للتواصل معنا</p>
              
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/966562924514"
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-xl py-4 px-6 w-full transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>تواصل عبر الواتساب</span>
                </motion.a>

                <motion.a
                  href="tel:0562924514"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-primary rounded-xl py-4 px-6 w-full transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>اتصل بنا مباشرة</span>
                </motion.a>
              </div>

              <p className="text-sm text-white/60">
                متواجدون لخدمتكم على مدار الساعة
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
