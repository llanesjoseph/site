import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DollarSign, Zap, Clock, TrendingUp } from 'lucide-react';
import { EfficiencyGainsChart, BottlenecksResolvedChart } from './_components/charts';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Team Dashboard</h1>
        <p className="text-muted-foreground">
          An overview of your team's performance and workflow optimizations.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Efficiency Gain
            </CardTitle>
            <Zap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23.5%</div>
            <p className="text-xs text-muted-foreground">
              +5.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Cost Reduction
            </CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-$12,234</div>
            <p className="text-xs text-muted-foreground">
              -$1,801 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+180 Hours</div>
            <p className="text-xs text-muted-foreground">
              +32 hours from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Optimizations
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+7</div>
            <p className="text-xs text-muted-foreground">
              2 new scenarios simulated
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Efficiency Gains</CardTitle>
            <CardDescription>
              Percentage increase in workflow efficiency over the past 6 months.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EfficiencyGainsChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bottlenecks Resolved</CardTitle>
            <CardDescription>
              Number of identified bottlenecks resolved over time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BottlenecksResolvedChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
