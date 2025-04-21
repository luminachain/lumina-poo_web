"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

const topMiners = [
  {
    address: "LM3a7f2c8a...",
    hashrate: "2.45 MH/s",
    share: "10.2%",
    workers: 12,
    name: "CryptoWhale",
  },
  {
    address: "LM9e3d5b7a...",
    hashrate: "1.87 MH/s",
    share: "7.8%",
    workers: 8,
    name: "MiningKing",
  },
  {
    address: "LM5f1e9d8c...",
    hashrate: "1.52 MH/s",
    share: "6.3%",
    workers: 6,
    name: "HashMaster",
  },
  {
    address: "LM2b4d6f8a...",
    hashrate: "1.23 MH/s",
    share: "5.1%",
    workers: 5,
    name: "LuminaFan",
  },
  {
    address: "LM7c9a5e3d...",
    hashrate: "0.98 MH/s",
    share: "4.1%",
    workers: 4,
    name: "BlockHunter",
  },
]

export function TopMiners() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (isMobile) {
    return (
      <div className="space-y-4">
        {topMiners.map((miner) => (
          <Card key={miner.address} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                    {miner.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">{miner.name}</span>
                  <span className="text-xs text-muted-foreground font-mono">{miner.address}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Hashrate</p>
                  <p className="font-medium">{miner.hashrate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Share</p>
                  <p className="font-medium">{miner.share}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Workers</p>
                  <p className="font-medium">{miner.workers}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Miner</TableHead>
            <TableHead>Hashrate</TableHead>
            <TableHead>Share</TableHead>
            <TableHead>Workers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topMiners.map((miner) => (
            <TableRow key={miner.address}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                      {miner.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium">{miner.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">{miner.address}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{miner.hashrate}</TableCell>
              <TableCell>{miner.share}</TableCell>
              <TableCell>{miner.workers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
