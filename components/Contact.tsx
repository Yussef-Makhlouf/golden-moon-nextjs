"use client"

import { motion } from "framer-motion"
import {Phone, Mail, Clock, Send, Building2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Building2,
    title: "المقر الرئيسي",
    details: "جدة - حي الصفا - تقاطع شارع الأربعين مع شارع التحلية",
    color: "text-blue-500"
  },
  {
    icon: Phone,
    title: "اتصل بنا",
    details: "0562924514 - 0569773045 - 0571952988",
    color: "text-green-500"
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    details: "info@goldenmoon.com",
    color: "text-amber-500"
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    details: "السبت - الخميس: 9 صباحاً - 10 مساءً",
    color: "text-purple-500"
  }
]

export default function Contact() {
  return (
    <section id="اتصل بنا" className="py-24 relative overflow-hidden" >
 
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg">
              <h2 className="text-3xl font-bold mb-2">تواصل معنا</h2>
              <p className="text-muted-foreground mb-8">نحن هنا لمساعدتك ودعم نجاح مشروعك</p>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">الاسم</label>
                    <Input 
                      type="text" 
                      placeholder="الاسم الكامل"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">رقم الجوال</label>
                    <Input 
                      type="tel" 
                      placeholder="05xxxxxxxx" 
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">البريد الإلكتروني</label>
                  <Input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">الرسالة</label>
                  <Textarea 
                    placeholder="كيف يمكننا مساعدتك؟" 
                    className="bg-background/50 min-h-[120px]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground rounded-xl py-3 px-6 flex items-center justify-center gap-2"
                  type="submit"
                  aria-label="إرسال الرسالة"
                >
                  <Send className="w-5 h-5" />
                  <span>إرسال الرسالة</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">نسعد بخدمتكم</h2>
              <p className="text-muted-foreground text-lg">
                فريقنا جاهز للرد على استفساراتكم وتقديم الحلول المناسبة لمشاريعكم
              </p>
            </motion.div>

            <div className="grid gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 cursor-pointer hover:bg-card/50 p-4 rounded-2xl transition-colors"
                  onClick={() => {
                    if (info.icon === Phone) window.location.href = 'tel:0562924514'
                    if (info.icon === Mail) window.location.href = 'mailto:info@goldenmoon.com'
                  }}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-card flex items-center justify-center ${info.color}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
