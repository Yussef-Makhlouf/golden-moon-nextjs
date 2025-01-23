import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Tajawal } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingButtons from "@/components/FloatingButtons"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
// import { ThemeProvider } from "./components/theme-provider"

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700", "800"] })

export const metadata = {
  title: "القمر الذهبي | وكالة الدعاية والإعلان الرائدة في جدة",
  description:
    "القمر الذهبي - شركة رائدة في مجال الدعاية والإعلان والتسويق الرقمي. نقدم حلولًا إبداعية شاملة لتعزيز علامتك التجارية وزيادة وصولك إلى الجمهور المستهدف.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={tajawal.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <FloatingButtons />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

