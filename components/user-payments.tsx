"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Clock, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const payments = [
  {
    id: "tx-1",
    amount: "2.5 LMT",
    timestamp: "Apr 15, 2025 10:24 AM",
    txid: "0x7f2c8a...",
    status: "confirmed",
  },
  {
    id: "tx-2",
    amount: "2.3 LMT",
    timestamp: "Apr 14, 2025 09:15 AM",
    txid: "0x3e5d9b...",
    status: "confirmed",
  },
  {
    id: "tx-3",
    amount: "2.7 LMT",
    timestamp: "Apr 13, 2025 10:30 AM",
    txid: "0x9a1f7c...",
    status: "confirmed",
  },
  {
    id: "tx-4",
    amount: "1.9 LMT",
    timestamp: "Apr 12, 2025 09:45 AM",
    txid: "0x6b8d2e...",
    status: "confirmed",
  },
  {
    id: "tx-5",
    amount: "0.85 LMT",
    timestamp: "Apr 15, 2025 12:30 PM",
    txid: "0x2c4f8a...",
    status: "pending",
  },
]

export function UserPayments() {
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
        {payments.map((payment) => (
          <Card key={payment.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{payment.amount}</span>
                {payment.status === "confirmed" ? (
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                  >
                    <CheckCircle className="mr-1 h-3 w-3" /> Confirmed
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
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Date & Time</p>
                  <p>{payment.timestamp}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Transaction ID</p>
                  <p className="font-mono text-xs">{payment.txid}</p>
                </div>
                <div className="flex justify-end">
                  <a href="#" className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400">
                    View <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
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
            <TableHead>Amount</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Explorer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="font-medium">{payment.amount}</TableCell>
              <TableCell>{payment.timestamp}</TableCell>
              <TableCell className="font-mono text-xs">{payment.txid}</TableCell>
              <TableCell>
                {payment.status === "confirmed" ? (
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                  >
                    <CheckCircle className="mr-1 h-3 w-3" /> Confirmed
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
              <TableCell className="text-right">
                <a href="#" className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400">
                  View <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
