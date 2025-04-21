"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { type FormEvent, useState } from "react"

export function HeaderSearchForm() {
  const [address, setAddress] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!address.trim()) return

    setIsLoading(true)
    router.push(`/dashboard/${encodeURIComponent(address)}`)
  }

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by wallet address..."
          className="w-[300px] pl-8 pr-16"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={isLoading}
        />
        <Button type="submit" size="sm" className="absolute right-1 top-1" disabled={isLoading}>
          Search
        </Button>
      </div>
    </form>
  )
}
