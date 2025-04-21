import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MiningChart } from "@/components/mining-chart"
import { UserStats } from "@/components/user-stats"
import { UserPayments } from "@/components/user-payments"
import { UserWorkers } from "@/components/user-workers"
import { ArrowUpRight, Clock, CreditCard, Download, Settings } from "lucide-react"

export default function DashboardPage() {
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
              <Link href="/dashboard" className="font-medium transition-colors hover:text-primary">
                Dashboard
              </Link>
              <Link href="/miners" className="font-medium text-muted-foreground transition-colors hover:text-primary">
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
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/settings">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </Button>
            <div className="relative">
              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                  JD
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">LM3a7f2c8a...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Monitor your mining performance and earnings.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download Mining Software
              </Button>
              <Button size="sm">
                <CreditCard className="mr-2 h-4 w-4" />
                Withdraw Funds
              </Button>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Your Hashrate</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.24 MH/s</div>
                <p className="text-xs text-muted-foreground">+5.2% from last 24h</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Pending Balance</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.85 LMT</div>
                <p className="text-xs text-muted-foreground">Next payout in ~4 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">124.5 LMT</div>
                <p className="text-xs text-muted-foreground">Since April 15, 2025</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Mining Performance</CardTitle>
                <CardDescription>Your hashrate over the last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <MiningChart />
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Tabs defaultValue="workers">
              <TabsList className="grid w-full grid-cols-3 md:w-auto">
                <TabsTrigger value="workers">Workers</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="stats">Statistics</TabsTrigger>
              </TabsList>
              <TabsContent value="workers" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Workers</CardTitle>
                    <CardDescription>Manage and monitor your mining workers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserWorkers />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="payments" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>Your recent payments and transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserPayments />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="stats" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mining Statistics</CardTitle>
                    <CardDescription>Detailed statistics about your mining performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserStats />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
