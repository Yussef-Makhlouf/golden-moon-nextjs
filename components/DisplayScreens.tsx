"use client"

import { motion } from "framer-motion"
import { Monitor, Users, Building2, Clock, Phone, BarChart3, Target } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    value: "+300",
    label: "شاشة عرض",
    icon: Monitor,
  },
  {
    value: "+50",
    label: "مستشفى ومركز طبي",
    icon: Building2,
  },
  {
    value: "+100K",
    label: "مشاهدة يومياً",
    icon: Users,
  },
  {
    value: "24/7",
    label: "بث متواصل",
    icon: Clock,
  },
]

const contacts = [
  { number: "0562924514", label: "المبيعات" },
  { number: "0569773045", label: "خدمة العملاء" },
  { number: "0571952988", label: "الدعم الفني" },
]

const features = [
  {
    title: "تغطية شاملة",
    description: "شبكة شاشات متكاملة في أهم المستشفيات والمراكز الطبية في جدة",
    icon: Target,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "تحليلات متقدمة",
    description: "تقارير دقيقة عن أداء حملتك الإعلانية ومعدلات المشاهدة",
    icon: BarChart3,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
]

export default function DisplayScreens() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">


      <div className="container mx-auto px-4">
        {/* العنوان والإحصائيات */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            شبكة شاشات القمر الذهبي
            <span className="text-primary block mt-2">الأولى في المملكة</span>
          </motion.h2>

          {/* الإحصائيات */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* أرقام التواصل */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <Link
                  href={`tel:${contact.number}`}
                  className="block bg-primary/5 hover:bg-primary/10 rounded-xl p-4 text-center transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-primary">{contact.number}</div>
                  <div className="text-sm text-muted-foreground">{contact.label}</div>
                  <div className="absolute inset-0 border border-primary/20 rounded-xl group-hover:border-primary/40 transition-colors duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* المميزات */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`bg-gradient-to-r ${feature.gradient} p-6 rounded-2xl h-full`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر الدعوة للعمل */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="tel:0562924514"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            احجز مساحتك الإعلانية الآن
          </Link>
        </motion.div>
      </div>
    </section>
  )
}