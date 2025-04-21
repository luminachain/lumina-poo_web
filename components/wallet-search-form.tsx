"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export function WalletSearchForm() {
  const [address, setAddress] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!address.trim()) {
      toast({
        title: "Error",
        description: "Please enter a wallet address",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // In a real implementation, you might want to validate the address format
      // For now, we'll just redirect to the dashboard
      router.push(`/dashboard/${encodeURIComponent(address)}`)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to search for wallet. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <Input
          type="text"
          placeholder="Enter your LuminaChain wallet address for solo mining (LM...)"
          className="pr-24 py-6 text-lg"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={isLoading}
        />
        <Button
          className="absolute right-1 top-1 bottom-1 sm:text-base text-sm px-2 sm:px-4"
          size="lg"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Check Status"}
        </Button>
      </div>
    </form>
  )
}
