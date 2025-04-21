import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PoolStats } from "@/components/pool-stats"
import { MiningChart } from "@/components/mining-chart"
import { RecentBlocks } from "@/components/recent-blocks"
import { TopMiners } from "@/components/top-miners"
import { ArrowRight, ChevronRight, Cpu, Database, Server, Users } from "lucide-react"
import { WalletSearchForm } from "@/components/wallet-search-form"
import { HeaderSearchForm } from "@/components/header-search-form"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
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
              <Link href="/" className="font-medium transition-colors hover:text-primary">
                Home
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
          <div className="hidden md:flex items-center">
            <HeaderSearchForm />
          </div>
          <MobileNav />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    LuminaChain Mining Pool
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Mine LMT tokens efficiently with our optimized pool. Stable payouts, low fees, and 24/7 support.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/help">
                      Start Mining <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/help">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Pool Statistics</CardTitle>
                    <CardDescription>Current mining performance and rewards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Pool Hashrate</span>
                        <span className="text-2xl font-bold">24.5 MH/s</span>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Active Miners</span>
                        <span className="text-2xl font-bold">1,245</span>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Blocks Found (24h)</span>
                        <span className="text-2xl font-bold">142</span>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-medium text-muted-foreground">Pool Fee</span>
                        <span className="text-2xl font-bold">1.0% (Solo Mining)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm dark:bg-orange-800/30">
                  Check Your Mining Status
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Enter Your Wallet Address</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Track your mining performance, workers, and earnings with your LuminaChain wallet address
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg mt-6">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <WalletSearchForm />
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  No registration required. Simply enter your wallet address to view your mining statistics.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm dark:bg-orange-800/30">
                  Why Choose LuminaPool?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  The Most Reliable Mining Pool for LuminaChain
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our pool offers the best combination of reliability, performance, and rewards for LMT miners.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-full items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <Server className="h-8 w-8 text-orange-500" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">High-Performance Servers</h3>
                    <p className="text-muted-foreground">
                      Our mining servers are strategically located for optimal latency and uptime.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Database className="h-8 w-8 text-orange-500" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">PPLNS Payment System</h3>
                    <p className="text-muted-foreground">
                      Fair and transparent payment system that rewards loyal miners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <Cpu className="h-8 w-8 text-orange-500" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">RandomX Optimized</h3>
                    <p className="text-muted-foreground">
                      Our pool is specifically optimized for LuminaChain's modified RandomX algorithm.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-orange-500" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Our team is always available to help with any mining issues or questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Real-time Pool Statistics</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Monitor the performance of our mining pool with live data and analytics.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-full gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Pool Hashrate (24h)</CardTitle>
                </CardHeader>
                <CardContent>
                  <MiningChart />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pool Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <PoolStats />
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto grid max-w-full gap-6 py-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Blocks</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/blocks">
                      View All <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <RecentBlocks />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Top Miners</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/miners">
                      View All <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <TopMiners />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Start Mining in Minutes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow these simple steps to begin mining LMT with our pool.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-full gap-6 py-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-800/20">
                    1
                  </div>
                  <CardTitle className="mt-4">Get a Wallet Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Create a LuminaChain wallet to receive your mining rewards.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-800/20">
                    2
                  </div>
                  <CardTitle className="mt-4">Download Mining Software</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get the optimized mining software for your hardware from our downloads section.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-800/20">
                    3
                  </div>
                  <CardTitle className="mt-4">Start Mining</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Configure your mining software with your wallet address and our pool information.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href="/help">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
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
