"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { time: "00:00", hashrate: 18 },
  { time: "02:00", hashrate: 20 },
  { time: "04:00", hashrate: 19 },
  { time: "06:00", hashrate: 22 },
  { time: "08:00", hashrate: 25 },
  { time: "10:00", hashrate: 24 },
  { time: "12:00", hashrate: 26 },
  { time: "14:00", hashrate: 28 },
  { time: "16:00", hashrate: 27 },
  { time: "18:00", hashrate: 25 },
  { time: "20:00", hashrate: 24 },
  { time: "22:00", hashrate: 22 },
  { time: "24:00", hashrate: 24.5 },
]

export function MiningChart() {
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] flex items-center justify-center">Loading chart...</div>
  }

  // 在移动设备上显示较少的数据点
  const mobileData = isMobile ? data.filter((_, index) => index % 2 === 0 || index === data.length - 1) : data

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mobileData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
          <XAxis
            dataKey="time"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            style={{ fontSize: "12px" }}
            tick={!isMobile}
            interval={isMobile ? 1 : 0}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            style={{ fontSize: "12px" }}
            tickFormatter={(value) => `${value} MH/s`}
            tick={!isMobile}
            width={isMobile ? 40 : 60}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Time</span>
                        <span className="font-bold text-sm">{payload[0].payload.time}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Hashrate</span>
                        <span className="font-bold text-sm">{payload[0].value} MH/s</span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="hashrate"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--theme-primary)", opacity: 0.8 },
            }}
            style={{
              stroke: "var(--theme-primary)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
