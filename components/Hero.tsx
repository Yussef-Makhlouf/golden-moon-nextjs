"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
export default function Hero() {
  return (
    <section className="min-h-[100dvh] bg-gradient-to-br from-primary/95 to-primary relative overflow-hidden">
      {/* خلفية متحركة محسنة */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] -top-1/4 -right-1/4 rounded-full bg-secondary blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] top-1/2 -left-1/4 rounded-full bg-secondary/80 blur-2xl"
        />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="container mx-auto relative z-10">
        <div className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 py-12 md:py-16 lg:py-20">
          {/* محتوى النص */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-right space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <div className="inline-block bg-secondary/10 backdrop-blur-sm px-4 md:px-6 py-2 rounded-full">
              <span className="text-secondary-foreground/80 text-xs md:text-sm">نحن نبتكر المستقبل</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                أطلق العنان
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block text-secondary"
              >
                لإبداعك
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block"
              >
                مع القمر الذهبي
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mr-auto leading-relaxed">
              نقدم حلولًا إبداعية وشاملة للدعاية والإعلان والتسويق الرقمي لنجعل علامتك التجارية تتألق
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 justify-end pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                اكتشف خدماتنا
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                تواصل معنا
              </Button>
            </div>
          </motion.div>

          {/* العنصر المرئي */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative w-full max-w-[80%] md:max-w-[70%] lg:max-w-full mx-auto"
          >
            <div className="relative aspect-square">
              {/* الحلقات المتحركة */}
              <div className="absolute inset-0">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="absolute inset-0 border-2 border-secondary/20 rounded-full"
                    style={{
                      animation: `spin ${12 + i * 4}s linear infinite ${i * 2}s`,
                      transform: `scale(${1 - i * 0.15})`,
                    }}
                  />
                ))}
              </div>
              
              {/* الشعار المركزي */}
              <div className="absolute inset-[15%] flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative w-full h-full"
                >
                  <div className="absolute inset-0 bg-secondary/10 rounded-full" />
                  <Image
                    width={200}
                    height={200}
                    src="/logo.png"
                    alt="القمر الذهبي"
                    className="w-full h-full object-contain p-8 rounded-full"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* العناصر العائمة في الأسفل */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-24 md:h-32 bg-gradient-to-t from-background/50 to-transparent"
        />
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

