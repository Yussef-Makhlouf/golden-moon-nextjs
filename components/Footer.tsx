"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook,  Instagram,  Phone, Mail, MapPin, Clock, ArrowUpRight, X } from "lucide-react"

const quickLinks = [
  { title: "خدماتنا", href: "#services" },
  { title: "من نحن", href: "#about" },
  { title: "شركاؤنا", href: "#partners" },
  { title: "المشاريع", href: "#projects" },
  { title: "اتصل بنا", href: "#contact" },
]

const services = [
  "شاشات LED",
  "الهوية البصرية",
  "التسويق الرقمي",
  "لوحات الطرق",
  "طباعة رقمية",
  "قص ليزر"
]

const contactInfo = [
  { icon: MapPin, text: "جدة - حي الصفا - تقاطع شارع الأربعين مع شارع التحلية" },
  { icon: Phone, text: "0562924514 - 0569773045" },
  { icon: Mail, text: "info@goldenmoon.com" },
  { icon: Clock, text: "السبت - الخميس: 9 صباحاً - 10 مساءً" }
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Upper Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="القمر الذهبي"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">القمر الذهبي</h3>
                <p className="text-primary-foreground/80 text-sm">للخدمات المتكاملة</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              شركة رائدة في مجال الدعاية والإعلان والتسويق الرقمي، نقدم حلولاً إبداعية متكاملة لنجاح عملائنا
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/golden.moon.compa?mibextid=qi2Omg&rdid=9UEujZCHUXTpmI39&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19EWAR5kSM%2F%3Fmibextid%3Dqi2Omg#"
                whileHover={{ scale: 1.1 }}
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/golden_moon_company"
                whileHover={{ scale: 1.1 }}
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://x.com/Golden_Moon2024"
                whileHover={{ scale: 1.1 }}
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@golden.moon.company"
                whileHover={{ scale: 1.1 }}
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </motion.a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link href={link.href} className="flex items-center group">
                    <span className="group-hover:text-secondary transition-colors">
                      {link.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity mr-2" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">خدماتنا</h3>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 rounded-lg px-3 py-2 text-sm hover:bg-primary-foreground/20 transition-colors cursor-pointer"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <info.icon className="w-5 h-5 mt-1 text-secondary shrink-0" />
                  <span className="text-primary-foreground/80">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} القمر الذهبي. جميع الحقوق محفوظة
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/80">
              <Link href="#" className="hover:text-secondary transition-colors">سياسة الخصوصية</Link>
              <Link href="#" className="hover:text-secondary transition-colors">الشروط والأحكام</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
