import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/context/theme-provider"
import { ApplicationProvider } from "@/context/application-provider"
import "./globals.css"
import { Header } from "@/components/header"

const jetBrains = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "wonton game",
  description: "A tic-tac-toy game",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={jetBrains.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <ApplicationProvider>
            <Header />
            {children}
          </ApplicationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
