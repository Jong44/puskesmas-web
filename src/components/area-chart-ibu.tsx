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
  { month: "January", sangat_berisiko: 100, berisiko: 240, normal: 240 },
  { month: "February", sangat_berisiko: 70, berisiko: 139, normal: 221 },
  { month: "March", sangat_berisiko: 50, berisiko: 80, normal: 229 },
  { month: "April", sangat_berisiko: 178, berisiko: 390, normal: 200 },
  { month: "May", sangat_berisiko: 189, berisiko: 480, normal: 218 },
  { month: "June", sangat_berisiko: 239, berisiko: 380, normal: 250 },
  { month: "July", sangat_berisiko: 149, berisiko: 430, normal: 210 },
]

const chartConfig = {
  sangat_berisiko: {
    label: "Sangat Berisiko Stunting",
    color: "var(color-level-1)",
  },
  berisiko: {
    label: "Berisiko",
    color: "var(color-level-2)",
  },
  normal: {
    label: "Normal",
    color: "var(color-level-3)",
  },
  
} satisfies ChartConfig

export function AreaChartIbu() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Trending Kondisi Ibu</CardTitle>
        <CardDescription>
          Menampilkan trending kondisi ibu dari bulan Januari - Juni 2024
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
              dataKey="sangat_berisiko"
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
