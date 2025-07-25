import React, { useState, useEffect } from "react"
import { Search, MessageCircle, Building2 } from "lucide-react"
import { Button } from "./ui/button"

interface NavItem {
  label: string
  href: string
  type?: 'link' | 'search' | 'button'
  placeholder?: string
  icon?: React.ReactNode
}

interface HeaderProps {
  className?: string
  navItems?: NavItem[]
}

export default function Header({ className = "", navItems }: HeaderProps) {
  // Add CSS animation for city cycling
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes citySlide {
        0% {
          transform: translateY(100%);
          opacity: 0;
        }
        20%, 80% {
          transform: translateY(0%);
          opacity: 1;
        }
        100% {
          transform: translateY(-100%);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  // Indonesian cities for rotating placeholder
  const indonesianCities = [
    "Bali", "Jakarta", "Yogyakarta", "Bandung", "Surabaya", 
    "Medan", "Semarang", "Makassar", "Palembang", "Batam"
  ]
  
  const [currentCityIndex, setCurrentCityIndex] = useState(0)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prev) => (prev + 1) % indonesianCities.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [indonesianCities.length])

  // Default navigation items
  const defaultNavItems: NavItem[] = [
    { label: "Home", href: "/", type: "button" },
    { label: "Open Trip", href: "/cultural-heritage", type: "button" },
    { label: "Organizations", href: "#", type: "button"},
    { label: "Chatbot", href: "#", type: "button"},
    { label: "Tentang Kami", href: "/about", type: "button" },
  ]

  const items = navItems || defaultNavItems

  const renderNavItem = (item: NavItem) => {
    switch (item.type) {
      case 'search':
        return (
          <div key={item.label} className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={item.placeholder || "Search..."}
              className="block w-48 pl-10 pr-3 py-1.5 border border-gray-200 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-gray-50"
            />
          </div>
        )
      
      case 'button':
        return (
          <Button
            key={item.label}
            variant="ghost"
            size="sm"
            className="text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-full text-sm px-3 py-1.5 h-9"
            onClick={() => {
              if (item.href !== '#') {
                window.location.href = item.href
              }
            }}
          >
            {item.icon}
            {item.label}
          </Button>
        )
      
      default: // 'link'
        return (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors duration-200 cursor-pointer"
          >
            {item.label}
          </a>
        )
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <header className={`bg-white/70 backdrop-blur-xl shadow-lg border border-gray-200/50 rounded-xl ${className}`}>
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Left side: Logo and Search */}
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <img
                  src="/inago-png.png"
                  alt="Inago"
                  className="h-16 w-auto cursor-pointer"
                  onClick={() => window.location.href = '/'}
                />
              </div>
              
              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <div className="relative overflow-hidden rounded-full">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="block w-48 pl-5 pr-1 py-1.5 border border-gray-200 rounded-full text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                  {inputValue === "" && (
                    <div 
                      key={currentCityIndex}
                      className="absolute inset-0 pl-5 pr-1 py-1.5 text-sm text-gray-400 pointer-events-none flex items-center"
                      style={{
                        animation: 'citySlide 3s infinite'
                      }}
                    >
                      {indonesianCities[currentCityIndex]}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right side: Navigation */}
            <nav className="flex items-center space-x-8 pr-2">
              {items.map((item) => renderNavItem(item))}
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
