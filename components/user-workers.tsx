"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const workers = [
  {
    id: "worker-1",
    name: "Gaming PC",
    hashrate: "0.45 MH/s",
    shares: "1,245",
    lastSeen: "2 mins ago",
    status: "online",
  },
  {
    id: "worker-2",
    name: "Office Rig",
    hashrate: "0.38 MH/s",
    shares: "1,102",
    lastSeen: "5 mins ago",
    status: "online",
  },
  {
    id: "worker-3",
    name: "Home Server",
    hashrate: "0.41 MH/s",
    shares: "1,189",
    lastSeen: "3 mins ago",
    status: "online",
  },
  {
    id: "worker-4",
    name: "Laptop",
    hashrate: "0.00 MH/s",
    shares: "542",
    lastSeen: "2 days ago",
    status: "offline",
  },
]

export function UserWorkers() {
  const [userWorkers] = useState(workers)
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

  return (
    <div>
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          Workers are automatically detected when you mine with different computer names. Use{" "}
          <span className="font-mono bg-muted px-1 rounded">YOUR_WALLET_ADDRESS.worker_name</span> in your mining
          software.
        </p>
      </div>

      {isMobile ? (
        <div className="space-y-4">
          {userWorkers.map((worker) => (
            <Card key={worker.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{worker.name}</span>
                  {worker.status === "online" ? (
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                    >
                      <CheckCircle className="mr-1 h-3 w-3" /> Online
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
                    >
                      <AlertCircle className="mr-1 h-3 w-3" /> Offline
                    </Badge>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Hashrate</p>
                    <p>{worker.hashrate}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Shares</p>
                    <p>{worker.shares}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Last Seen</p>
                    <p>{worker.lastSeen}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Hashrate</TableHead>
                <TableHead>Shares</TableHead>
                <TableHead>Last Seen</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userWorkers.map((worker) => (
                <TableRow key={worker.id}>
                  <TableCell className="font-medium">{worker.name}</TableCell>
                  <TableCell>{worker.hashrate}</TableCell>
                  <TableCell>{worker.shares}</TableCell>
                  <TableCell>{worker.lastSeen}</TableCell>
                  <TableCell>
                    {worker.status === "online" ? (
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                      >
                        <CheckCircle className="mr-1 h-3 w-3" /> Online
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
                      >
                        <AlertCircle className="mr-1 h-3 w-3" /> Offline
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
