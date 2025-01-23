"use client"

import { motion } from "framer-motion"
import { Star, Quote, ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    name: "م. أحمد محمد",
    role: "المدير التنفيذي",
    company: "شركة الأفق للتطوير العقاري",
    content: "تجربتنا مع القمر الذهبي كانت استثنائية. الفريق المحترف والخدمات المتميزة ساهمت في نجاح مشاريعنا بشكل كبير.",
    image: "/img17.avif",
    rating: 5,
    project: "تصميم وتنفيذ واجهات LED"
  },
  {
    name: "م. سارة العبدالله",
    role: "مدير التسويق",
    company: "مجموعة النخبة الطبية",
    content: "نفخر بشراكتنا مع القمر الذهبي. حلولهم الإبداعية وجودة تنفيذهم تجاوزت توقعاتنا في كل مرة.",
    image: "/img17.avif",
    rating: 5,
    project: "حملة إعلانية متكاملة"
  },
  {
    name: "أ. خالد العمري",
    role: "مالك",
    company: "سلسلة مطاعم الذواقة",
    content: "القمر الذهبي شريك نجاح حقيقي. خبرتهم في مجال الدعاية ساعدتنا في التوسع وزيادة انتشارنا.",
    image: "/img17.avif",
    rating: 5,
    project: "هوية بصرية وحملات تسويقية"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-[url('/patterns/testimonials.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            قصص نجاح
            <span className="text-primary block mt-2">عملائنا</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            نفخر بثقة عملائنا ونجاحاتهم المستمرة معنا
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-card rounded-3xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Client Image & Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-primary">{testimonials[currentIndex].role}</p>
                  <p className="text-muted-foreground">{testimonials[currentIndex].company}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div className="relative">
                  <Quote className="w-12 h-12 text-primary/20 absolute -top-6 -right-6" />
                  <p className="text-xl leading-relaxed">
                    {testimonials[currentIndex].content}
                  </p>
                </div>
                
                <div className="mt-8">
                  <div className="text-sm text-muted-foreground mb-4">المشروع المنفذ</div>
                  <div className="bg-primary/10 text-primary rounded-full px-4 py-2 inline-block">
                    {testimonials[currentIndex].project}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <ArrowRight className="w-6 h-6 text-primary" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-primary" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
