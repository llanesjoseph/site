"use client"

import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const efficiencyData = [
  { month: "January", gain: 12.1 },
  { month: "February", gain: 15.3 },
  { month: "March", gain: 14.8 },
  { month: "April", gain: 18.2 },
  { month: "May", gain: 20.7 },
  { month: "June", gain: 23.5 },
]

const efficiencyChartConfig = {
  gain: {
    label: "Efficiency Gain",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function EfficiencyGainsChart() {
  return (
    <ChartContainer config={efficiencyChartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={efficiencyData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickFormatter={(value) => `${value}%`}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Bar dataKey="gain" fill="var(--color-gain)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}


const bottlenecksData = [
    { date: "2024-01", resolved: 5, identified: 8 },
    { date: "2024-02", resolved: 7, identified: 10 },
    { date: "2024-03", resolved: 12, identified: 15 },
    { date: "2024-04", resolved: 18, identified: 20 },
    { date: "2024-05", resolved: 25, identified: 28 },
    { date: "2024-06", resolved: 32, identified: 35 },
  ]
  
  const bottlenecksChartConfig = {
    resolved: {
      label: "Resolved",
      color: "hsl(var(--chart-1))",
    },
    identified: {
      label: "Identified",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

export function BottlenecksResolvedChart() {
    return (
        <ChartContainer config={bottlenecksChartConfig} className="min-h-[200px] w-full">
        <LineChart
          accessibilityLayer
          data={bottlenecksData}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                    month: "short",
                });
            }}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            dataKey="resolved"
            type="monotone"
            stroke="var(--color-resolved)"
            strokeWidth={2}
            dot={true}
          />
          <Line
            dataKey="identified"
            type="monotone"
            stroke="var(--color-identified)"
            strokeWidth={2}
            dot={true}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ChartContainer>
    )
}
