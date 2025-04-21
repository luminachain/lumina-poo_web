import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, MessageSquare, Download } from "lucide-react"
import { HeaderSearchForm } from "@/components/header-search-form"
import { MobileNav } from "@/components/mobile-nav"

export default function HelpPage() {
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
              <Link href="/payments" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Payments
              </Link>
              <Link href="/help" className="font-medium transition-colors hover:text-primary">
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
              <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
              <p className="text-muted-foreground">Find answers to common questions and learn how to mine LMT.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Support
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/docs">
                  <FileText className="mr-2 h-4 w-4" />
                  Documentation
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-6">
            <Tabs defaultValue="getting-started">
              <TabsList className="grid w-full grid-cols-3 text-xs sm:text-sm md:w-auto">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="mining-software">Mining Software</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              <TabsContent value="getting-started" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Getting Started with LuminaPool</CardTitle>
                    <CardDescription>Follow these steps to begin mining LMT tokens</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                      <Card>
                        <CardHeader>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-800/20">
                            1
                          </div>
                          <CardTitle className="mt-4">Get a Wallet Address</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            Create a LuminaChain wallet to receive your mining rewards.
                          </p>
                          <Button className="mt-4 w-full" asChild>
                            <Link href="https://luminachain.com/wallet" target="_blank">
                              Get Wallet
                            </Link>
                          </Button>
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
                          <Button className="mt-4 w-full" variant="outline" asChild>
                            <Link href="#mining-software">
                              <Download className="mr-2 h-4 w-4" />
                              Download Software
                            </Link>
                          </Button>
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
                          <div className="mt-4 rounded-md bg-muted p-4 font-mono text-sm">
                            <p>Pool: pool.luminachain.com:3333</p>
                            <p>Username: YOUR_WALLET_ADDRESS</p>
                            <p>Password: x</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Mining Configuration</CardTitle>
                        <CardDescription>Detailed setup instructions for your mining software</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Pool Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <h4 className="font-medium">Primary Server</h4>
                              <div className="rounded-md bg-muted p-3 font-mono text-sm">
                                <p>URL: pool.luminachain.com</p>
                                <p>Port: 3333 (Low Diff)</p>
                                <p>Port: 5555 (Medium Diff)</p>
                                <p>Port: 7777 (High Diff)</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-medium">Backup Server</h4>
                              <div className="rounded-md bg-muted p-3 font-mono text-sm">
                                <p>URL: backup.luminachain.com</p>
                                <p>Port: 3333 (Low Diff)</p>
                                <p>Port: 5555 (Medium Diff)</p>
                                <p>Port: 7777 (High Diff)</p>
                              </div>
                            </div>
                          </div>
                          <h3 className="text-lg font-medium mt-6">Example Configuration</h3>
                          <div className="rounded-md bg-muted p-4 font-mono text-sm overflow-auto">
                            <pre>{`./xmrig -o pool.luminachain.com:3333 -u LM3a7f2c8a... -p x -a rx/0 --randomx-mode=fast`}</pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="mining-software" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mining Software</CardTitle>
                    <CardDescription>Download and configure mining software for different platforms</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-3">
                      <Card>
                        <CardHeader>
                          <CardTitle>Windows</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="font-medium">XMRig (Recommended)</h3>
                            <p className="text-sm text-muted-foreground">
                              High-performance RandomX miner optimized for LuminaChain.
                            </p>
                            <Button className="w-full" variant="outline" size="sm">
                              <Download className="mr-2 h-4 w-4" />
                              Download XMRig v6.18.1
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-medium">LuminaMiner</h3>
                            <p className="text-sm text-muted-foreground">
                              Our custom miner with GUI and auto-configuration.
                            </p>
                            <Button className="w-full" variant="outline" size="sm">
                              <Download className="mr-2 h-4 w-4" />
                              Download LuminaMiner v1.2.0
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Linux</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="font-medium">XMRig for Linux</h3>
                            <p className="text-sm text-muted-foreground">
                              Command-line miner optimized for Ubuntu, Debian, and other distributions.
                            </p>
                            <Button className="w-full" variant="outline" size="sm">
                              <Download className="mr-2 h-4 w-4" />
                              Download XMRig v6.18.1 (Linux)
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-medium">Build from Source</h3>
                            <p className="text-sm text-muted-foreground">
                              Instructions for compiling from source code for maximum performance.
                            </p>
                            <Button className="w-full" variant="outline" size="sm" asChild>
                              <Link href="/docs/linux-build">View Instructions</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>macOS</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="font-medium">XMRig for macOS</h3>
                            <p className="text-sm text-muted-foreground">
                              Optimized for Apple Silicon and Intel processors.
                            </p>
                            <Button className="w-full" variant="outline" size="sm">
                              <Download className="mr-2 h-4 w-4" />
                              Download XMRig v6.18.1 (macOS)
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-medium">Homebrew Installation</h3>
                            <p className="text-sm text-muted-foreground">Install via Homebrew package manager.</p>
                            <div className="rounded-md bg-muted p-2 font-mono text-xs">
                              <code>brew install xmrig</code>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Configuration Guides</CardTitle>
                        <CardDescription>Step-by-step guides for setting up your mining software</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                              <AccordionTrigger>XMRig Configuration</AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-4">
                                  <p>
                                    XMRig can be configured using a config.json file or command line parameters. Here's
                                    a basic configuration for LuminaChain mining:
                                  </p>
                                  <div className="rounded-md bg-muted p-4 font-mono text-sm overflow-auto">
                                    <pre>{`{
  "autosave": true,
  "cpu": true,
  "opencl": false,
  "cuda": false,
  "pools": [
    {
      "url": "pool.luminachain.com:3333",
      "user": "YOUR_WALLET_ADDRESS",
      "pass": "x",
      "keepalive": true,
      "tls": false
    },
    {
      "url": "backup.luminachain.com:3333",
      "user": "YOUR_WALLET_ADDRESS",
      "pass": "x",
      "keepalive": true,
      "tls": false
    }
  ],
  "randomx": {
    "init": -1,
    "mode": "fast",
    "1gb-pages": true,
    "rdmsr": true,
    "wrmsr": true,
    "numa": true
  }
}`}</pre>
                                  </div>
                                  <p>
                                    Save this as config.json in the same directory as your XMRig executable and run the
                                    miner without any parameters.
                                  </p>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                              <AccordionTrigger>Worker Names and Monitoring</AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-4">
                                  <p>
                                    To identify different mining rigs in your dashboard, add a worker name to your
                                    wallet address:
                                  </p>
                                  <div className="rounded-md bg-muted p-3 font-mono text-sm">
                                    <code>YOUR_WALLET_ADDRESS.worker1</code>
                                  </div>
                                  <p>
                                    For example, if you have multiple computers mining to the same wallet, you might
                                    use:
                                  </p>
                                  <div className="rounded-md bg-muted p-3 font-mono text-sm">
                                    <code>LM3a7f2c8a....gaming-pc</code>
                                    <br />
                                    <code>LM3a7f2c8a....office-rig</code>
                                  </div>
                                  <p>
                                    This helps you track the performance of each machine separately in your dashboard.
                                  </p>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                              <AccordionTrigger>Optimizing Mining Performance</AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-4">
                                  <p>To get the best performance when mining LuminaChain:</p>
                                  <ul className="list-disc pl-5 space-y-2">
                                    <li>Enable large pages support (1GB pages) for significant performance boost</li>
                                    <li>Use "fast" mode for RandomX algorithm</li>
                                    <li>
                                      Allocate 1 thread per physical CPU core, leaving 1-2 cores free for system tasks
                                    </li>
                                    <li>Run as administrator (Windows) or root (Linux) to enable MSR modifications</li>
                                    <li>Ensure your CPU supports AES-NI instructions for optimal performance</li>
                                  </ul>
                                  <p>
                                    For detailed optimization guides specific to your hardware, please visit our
                                    documentation.
                                  </p>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="faq" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>Common questions about mining LMT with our pool</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>What is LuminaChain?</AccordionTrigger>
                        <AccordionContent>
                          <p>
                            LuminaChain is a public, transparent blockchain ecosystem that uses a modified RandomX
                            mining algorithm from Monero, but removes anonymity features to ensure transaction
                            transparency. It features 1-minute block times, an unlimited token supply with halving every
                            6 months, and custom smart contract capabilities.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>What are the minimum requirements for mining?</AccordionTrigger>
                        <AccordionContent>
                          <p>To mine LuminaChain effectively, you need:</p>
                          <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>A CPU with AES-NI support (most CPUs from 2011 onwards)</li>
                            <li>At least 4GB of RAM (8GB recommended)</li>
                            <li>A stable internet connection</li>
                            <li>A LuminaChain wallet address</li>
                          </ul>
                          <p className="mt-2">
                            Unlike many other cryptocurrencies, LuminaChain's RandomX algorithm is designed to be
                            CPU-friendly and resistant to ASIC mining, making it accessible to regular computer users.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>How does the pool calculate payments?</AccordionTrigger>
                        <AccordionContent>
                          <p>
                            We use the PPLNS (Pay Per Last N Shares) payment system, which rewards miners based on their
                            contributions over time. This system:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Rewards loyal miners who mine consistently</li>
                            <li>Reduces the impact of pool hopping</li>
                            <li>Distributes block rewards proportionally to your hashrate contribution</li>
                          </ul>
                          <p className="mt-2">
                            Payments are processed automatically once your balance reaches the minimum threshold of 0.1
                            LMT. Payments are sent every 6 hours.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>What is the pool fee?</AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Our pool charges a 1% fee on all mining rewards. This fee helps cover server costs,
                            development, and maintenance of the pool infrastructure. There are no hidden fees or charges
                            - what you see is what you get.
                          </p>
                          <p className="mt-2">
                            <strong>Note:</strong> This is a solo mining pool only. When you find a block, you receive
                            the entire block reward (minus the 1% fee), but you also bear all the variance in mining
                            rewards.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>How do I create a LuminaChain wallet?</AccordionTrigger>
                        <AccordionContent>
                          <p>You can create a LuminaChain wallet in several ways:</p>
                          <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Download the official LuminaChain wallet from the project website</li>
                            <li>Use the web wallet at wallet.luminachain.com</li>
                            <li>Create a paper wallet for cold storage</li>
                          </ul>
                          <p className="mt-2">
                            Make sure to back up your wallet seed phrase or private keys in a secure location. If you
                            lose access to your wallet, you will lose access to your funds permanently.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-6">
                        <AccordionTrigger>Why is my hashrate different on the dashboard?</AccordionTrigger>
                        <AccordionContent>
                          <p>There are three different hashrate measurements you might see:</p>
                          <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>
                              <strong>Local Hashrate:</strong> What your miner reports locally
                            </li>
                            <li>
                              <strong>Reported Hashrate:</strong> What your miner reports to the pool
                            </li>
                            <li>
                              <strong>Effective Hashrate:</strong> Calculated by the pool based on your submitted shares
                            </li>
                          </ul>
                          <p className="mt-2">
                            The effective hashrate may fluctuate due to the random nature of mining. Over time, your
                            effective hashrate should average out to be close to your reported hashrate. If there's a
                            significant difference over a long period, check your miner configuration and network
                            connection.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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
