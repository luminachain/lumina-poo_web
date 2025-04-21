import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search } from "lucide-react"
import { HeaderSearchForm } from "@/components/header-search-form"
import { MobileNav } from "@/components/mobile-nav"

export default function MinersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600"></div>
              <span className="text-xl font-bold">LuminaPool</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm ml-6">
              <Link href="/" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/miners" className="font-medium transition-colors hover:text-primary">
                Miners
              </Link>
              <Link href="/blocks" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Blocks
              </Link>
              <Link href="/payments" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Payments
              </Link>
              <Link href="/help" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Help
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <HeaderSearchForm />
          </div>
          <MobileNav />
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Miners</h1>
              <p className="text-muted-foreground">View all miners currently mining on our pool.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by miner address or name..." className="w-full pl-8" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Miners</CardTitle>
                <CardDescription>Ranked by hashrate contribution to the pool</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Rank</TableHead>
                        <TableHead>Miner</TableHead>
                        <TableHead>Hashrate</TableHead>
                        <TableHead>Share</TableHead>
                        <TableHead>Workers</TableHead>
                        <TableHead>Blocks Found</TableHead>
                        <TableHead>Last Seen</TableHead>
                        <TableHead className="text-right">Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          address: "LM3a7f2c8a...",
                          hashrate: "2.45 MH/s",
                          share: "10.2%",
                          workers: 12,
                          name: "CryptoWhale",
                          blocks: 24,
                          lastSeen: "1 min ago",
                        },
                        {
                          address: "LM9e3d5b7a...",
                          hashrate: "1.87 MH/s",
                          share: "7.8%",
                          workers: 8,
                          name: "MiningKing",
                          blocks: 18,
                          lastSeen: "2 mins ago",
                        },
                        {
                          address: "LM5f1e9d8c...",
                          hashrate: "1.52 MH/s",
                          share: "6.3%",
                          workers: 6,
                          name: "HashMaster",
                          blocks: 15,
                          lastSeen: "3 mins ago",
                        },
                        {
                          address: "LM2b4d6f8a...",
                          hashrate: "1.23 MH/s",
                          share: "5.1%",
                          workers: 5,
                          name: "LuminaFan",
                          blocks: 12,
                          lastSeen: "2 mins ago",
                        },
                        {
                          address: "LM7c9a5e3d...",
                          hashrate: "0.98 MH/s",
                          share: "4.1%",
                          workers: 4,
                          name: "BlockHunter",
                          blocks: 9,
                          lastSeen: "5 mins ago",
                        },
                        {
                          address: "LM1d3f5a7c...",
                          hashrate: "0.87 MH/s",
                          share: "3.6%",
                          workers: 3,
                          name: "MinerPro",
                          blocks: 8,
                          lastSeen: "7 mins ago",
                        },
                        {
                          address: "LM8b2d4f6a...",
                          hashrate: "0.76 MH/s",
                          share: "3.2%",
                          workers: 3,
                          name: "CoinCollector",
                          blocks: 7,
                          lastSeen: "4 mins ago",
                        },
                        {
                          address: "LM4e6c8a2d...",
                          hashrate: "0.68 MH/s",
                          share: "2.8%",
                          workers: 2,
                          name: "HashHunter",
                          blocks: 6,
                          lastSeen: "10 mins ago",
                        },
                        {
                          address: "LM6a8c2e4d...",
                          hashrate: "0.62 MH/s",
                          share: "2.6%",
                          workers: 2,
                          name: "LuminaLover",
                          blocks: 5,
                          lastSeen: "8 mins ago",
                        },
                        {
                          address: "LM9c1e3a5d...",
                          hashrate: "0.54 MH/s",
                          share: "2.3%",
                          workers: 2,
                          name: "BlockChaser",
                          blocks: 5,
                          lastSeen: "12 mins ago",
                        },
                      ].map((miner, i) => (
                        <TableRow key={miner.address}>
                          <TableCell className="font-medium">{i + 1}</TableCell>
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
                          <TableCell>{miner.blocks}</TableCell>
                          <TableCell>{miner.lastSeen}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/dashboard/${encodeURIComponent(miner.address)}`}>View</Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      4
                    </Button>
                    <Button variant="outline" size="sm">
                      5
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 LuminaPool. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
