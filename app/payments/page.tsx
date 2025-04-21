import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Clock, ExternalLink, Search } from "lucide-react"
import { HeaderSearchForm } from "@/components/header-search-form"
import { MobileNav } from "@/components/mobile-nav"

export default function PaymentsPage() {
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
              <Link href="/miners" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Miners
              </Link>
              <Link href="/blocks" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Blocks
              </Link>
              <Link href="/payments" className="font-medium transition-colors hover:text-primary">
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
              <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
              <p className="text-muted-foreground">View all payments made by our mining pool.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by transaction ID or address..." className="w-full pl-8" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
                <CardDescription>All payments made to miners in the last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Time</TableHead>
                        <TableHead>Miner</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Transaction ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Explorer</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Array.from({ length: 20 }).map((_, i) => (
                        <TableRow key={i}>
                          <TableCell>{`${(i * 15) % 60} mins ago`}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-xs text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                                {["CW", "MK", "HM", "LF", "BH"][i % 5]}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs font-medium">
                                  {["CryptoWhale", "MiningKing", "HashMaster", "LuminaFan", "BlockHunter"][i % 5]}
                                </span>
                                <Link
                                  href={`/dashboard/LM${Math.random().toString(16).substring(2, 10)}`}
                                  className="text-xs text-muted-foreground font-mono hover:text-primary"
                                >
                                  {`LM${Math.random().toString(16).substring(2, 10)}...`}
                                </Link>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{(Math.random() * 5 + 0.5).toFixed(2)} LMT</TableCell>
                          <TableCell className="font-mono text-xs">{`0x${Math.random().toString(16).substring(2, 10)}...`}</TableCell>
                          <TableCell>
                            {i < 18 ? (
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
                            <a
                              href="#"
                              className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400"
                            >
                              View <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
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
