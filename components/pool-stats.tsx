"use client"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export function PoolStats() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="space-y-4">
      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-4`}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Network Difficulty</span>
            <span className="text-sm font-medium">12.45 G</span>
          </div>
          <Progress value={65} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Block Reward</span>
            <span className="text-sm font-medium">10 LMT</span>
          </div>
          <Progress value={100} className="h-2" />
        </div>
      </div>
      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-4`}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Pool Luck</span>
            <span className="text-sm font-medium">98%</span>
          </div>
          <Progress value={98} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Network Hashrate</span>
            <span className="text-sm font-medium">125.7 MH/s</span>
          </div>
          <Progress value={80} className="h-2" />
        </div>
      </div>
      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-4 pt-4`}>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-muted-foreground">Miners Online</span>
          <span className="text-2xl font-bold">1,245</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-muted-foreground">Workers Online</span>
          <span className="text-2xl font-bold">3,782</span>
        </div>
      </div>
      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-4`}>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-muted-foreground">Pool Fee</span>
          <span className="text-2xl font-bold">1.0%</span>
          <span className="text-xs text-muted-foreground">Solo Mining Only</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-muted-foreground">Min. Payout</span>
          <span className="text-2xl font-bold">0.1 LMT</span>
        </div>
      </div>
    </div>
  )
}
