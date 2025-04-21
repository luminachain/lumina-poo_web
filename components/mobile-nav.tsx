"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [address, setAddress] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!address.trim()) return

    router.push(`/dashboard/${encodeURIComponent(address)}`)
    setSearchOpen(false)
    setOpen(false)
  }

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/miners",
      label: "Miners",
    },
    {
      href: "/blocks",
      label: "Blocks",
    },
    {
      href: "/payments",
      label: "Payments",
    },
    {
      href: "/help",
      label: "Help",
    },
  ]

  return (
    <div className="md:hidden flex items-center gap-2">
      {searchOpen ? (
        <form onSubmit={handleSearch} className="flex items-center w-full">
          <Input
            type="text"
            placeholder="Enter wallet address..."
            className="w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button type="submit" size="icon" variant="ghost" className="ml-1 flex-shrink-0">
            <Search className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={() => setSearchOpen(false)}
            className="ml-1 flex-shrink-0"
          >
            <X className="h-5 w-5" />
          </Button>
        </form>
      ) : (
        <>
          <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
            <Search className="h-5 w-5" />
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-lg font-medium transition-colors ${
                      pathname === route.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">Search by wallet address</p>
                  <form onSubmit={handleSearch} className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Enter wallet address..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button type="submit">Search</Button>
                  </form>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </>
      )}
    </div>
  )
}
