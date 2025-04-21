"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function UserStats() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Hashrate Distribution</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Gaming PC</span>
                  <span className="text-sm font-medium">36%</span>
                </div>
                <Progress value={36} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Office Rig</span>
                  <span className="text-sm font-medium">31%</span>
                </div>
                <Progress value={31} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Home Server</span>
                  <span className="text-sm font-medium">33%</span>
                </div>
                <Progress value={33} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Mining Efficiency</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Accepted Shares</span>
                  <span className="text-sm font-medium">98.5%</span>
                </div>
                <Progress value={98.5} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Stale Shares</span>
                  <span className="text-sm font-medium">1.2%</span>
                </div>
                <Progress value={1.2} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Invalid Shares</span>
                  <span className="text-sm font-medium">0.3%</span>
                </div>
                <Progress value={0.3} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4">Mining Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">Total Hashrate</span>
              <span className="text-2xl font-bold">1.24 MH/s</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">Active Workers</span>
              <span className="text-2xl font-bold">3/4</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">Total Shares</span>
              <span className="text-2xl font-bold">4,078</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">Blocks Found</span>
              <span className="text-2xl font-bold">2</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
