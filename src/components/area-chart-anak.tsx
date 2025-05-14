"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", stunting: 400, berisiko: 240, normal: 240 },
  { month: "February", stunting: 300, berisiko: 139, normal: 221 },
  { month: "March", stunting: 200, berisiko: 980, normal: 229 },
  { month: "April", stunting: 278, berisiko: 390, normal: 200 },
  { month: "May", stunting: 189, berisiko: 480, normal: 218 },
  { month: "June", stunting: 239, berisiko: 380, normal: 250 },
  { month: "July", stunting: 349, berisiko: 430, normal: 210 },
]

const chartConfig = {
  stunting: {
    label: "Stunting",
    color: "var(color-level-1)",
  },
  berisiko: {
    label: "Berisiko Stunting",
    color: "var(color-level-2)",
  },
  normal: {
    label: "Normal",
    color: "var(color-level-3)",
  },
  
} satisfies ChartConfig

export function AreaChartAnak() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Trending Kondisi Anak</CardTitle>
        <CardDescription>
          Menampilkan trending kondisi anak dari bulan Januari - Juni 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="stunting"
              type="natural"
              fill="#393E46"
              fillOpacity={0.4}
              stroke="#393E46"
              stackId="a"
            />
            <Area
              dataKey="berisiko"
              type="natural"
              fill="#929AAB"
              fillOpacity={0.4}
              stroke="#393E46"
              stackId="a"
            />
            <Area
              dataKey="normal"
              type="natural"
              fill="#CACACA"
              fillOpacity={0.4}
              stroke="#393E46"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
