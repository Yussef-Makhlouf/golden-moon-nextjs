"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import {  BarChart3, Target } from "lucide-react"
import Link from "next/link"



const features = [
  {
    title: "تغطية واسعة",
    description: "شبكة شاشات متكاملة في أهم المستشفيات والمراكز الطبية في جدة",
    icon: Target,
  },
  {
    title: "تحليلات متقدمة",
    description: "تقارير دقيقة عن أداء حملتك الإعلانية ومعدلات المشاهدة",
    icon: BarChart3,
  },
]

export default function DisplayScreens() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* القسم المرئي */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-[2rem] overflow-hidden">
              <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]">
                <Image
                  src="/img14.avif"
                  alt="شاشات العرض في المستشفيات"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* الإحصائيات */}
          
            </div>

            {/* زخرفة خلفية محسنة */}
          </motion.div>

          {/* القسم النصي */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-right space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block  text-primary rounded-full px-4 py-1.5 text-sm font-medium">
                شبكة شاشات القمر الذهبي
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                اجعل إعلانك يترك
                <span className="text-primary block mt-2">بصمة لا تُنسى</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                نضمن وصول رسالتك إلى أكبر شريحة من الجمهور المستهدف من خلال شبكة شاشاتنا المنتشرة في أهم المستشفيات والمراكز الطبية في جدة.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 items-start bg-muted/50 rounded-2xl p-6 hover:bg-muted/80 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* زر الدعوة للعمل */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              
              <Link className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors duration-300" href="tel:+966541234567">
              احجز مساحتك الإعلانية الآن
              </Link>
             
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
