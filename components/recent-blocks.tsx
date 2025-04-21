"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle2, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const recentBlocks = [
  {
    height: 1245789,
    time: "5 mins ago",
    reward: 10,
    hash: "0x7f2c8a...",
    status: "confirmed",
  },
  {
    height: 1245788,
    time: "12 mins ago",
    reward: 10,
    hash: "0x3e5d9b...",
    status: "confirmed",
  },
  {
    height: 1245787,
    time: "18 mins ago",
    reward: 10,
    hash: "0x9a1f7c...",
    status: "confirmed",
  },
  {
    height: 1245786,
    time: "25 mins ago",
    reward: 10,
    hash: "0x6b8d2e...",
    status: "confirmed",
  },
  {
    height: 1245785,
    time: "32 mins ago",
    reward: 10,
    hash: "0x2c4f8a...",
    status: "confirmed",
  },
]

export function RecentBlocks() {
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
        {recentBlocks.map((block) => (
          <Card key={block.height} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Block #{block.height}</span>
                {block.status === "confirmed" ? (
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                  >
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Confirmed
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800"
                  >
                    <Clock className="mr-1 h-3 w-3" /> Pending
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Time</p>
                  <p>{block.time}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Reward</p>
                  <p>{block.reward} LMT</p>
                </div>
                <div className="col-span-2">
                  <p className="text-muted-foreground">Hash</p>
                  <p className="font-mono text-xs">{block.hash}</p>
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
            <TableHead>Height</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Reward</TableHead>
            <TableHead>Hash</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentBlocks.map((block) => (
            <TableRow key={block.height}>
              <TableCell className="font-medium">{block.height}</TableCell>
              <TableCell>{block.time}</TableCell>
              <TableCell>{block.reward} LMT</TableCell>
              <TableCell className="font-mono text-xs">{block.hash}</TableCell>
              <TableCell>
                {block.status === "confirmed" ? (
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                  >
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Confirmed
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800"
                  >
                    <Clock className="mr-1 h-3 w-3" /> Pending
                  </Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
