"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react"

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
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
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
