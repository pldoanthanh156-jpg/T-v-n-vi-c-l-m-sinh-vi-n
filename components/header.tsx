"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Portfolio
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="#about" className="text-foreground hover:text-primary transition">
            Giới thiệu
          </Link>
          <Link href="#services" className="text-foreground hover:text-primary transition">
            Dịch vụ
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition">
            Liên hệ
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-4">
            <Link href="#about" className="block text-foreground hover:text-primary">
              Giới thiệu
            </Link>
            <Link href="#services" className="block text-foreground hover:text-primary">
              Dịch vụ
            </Link>
            <Link href="#contact" className="block text-foreground hover:text-primary">
              Liên hệ
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
