import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  Phone,
  Handshake,
  Calendar
} from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { SalesChart } from "@/components/SalesChart";
import { SalesTeamPerformance } from "@/components/SalesTeamPerformance";
import { DealsActivity } from "@/components/DealsActivity";

export function SalesDashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Sales Performance Dashboard</h1>
          <p className="text-xl opacity-90 mb-6">
            Track your sales metrics, pipeline, and team performance in real-time
          </p>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live sales data</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>Real-time analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <span>Goal tracking</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Monthly Revenue"
          value="$287K"
          change="+23% vs last month"
          changeType="positive"
          icon={DollarSign}
          gradient="primary"
          description="Total sales revenue"
        />
        <MetricCard
          title="Deals Closed"
          value="47"
          change="+8 this week"
          changeType="positive"
          icon={Handshake}
          gradient="secondary"
          description="Successfully closed"
        />
        <MetricCard
          title="Active Prospects"
          value="156"
          change="+12 new leads"
          changeType="positive"
          icon={Users}
          gradient="accent"
          description="In sales pipeline"
        />
        <MetricCard
          title="Conversion Rate"
          value="24.8%"
          change="+2.3% improvement"
          changeType="positive"
          icon={Target}
          gradient="warning"
          description="Lead to customer"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Average Deal Size"
          value="$6,125"
          change="+$450 vs last quarter"
          changeType="positive"
          icon={Award}
          gradient="primary"
        />
        <MetricCard
          title="Sales Calls"
          value="234"
          change="89% connection rate"
          changeType="neutral"
          icon={Phone}
          gradient="secondary"
        />
        <MetricCard
          title="Pipeline Value"
          value="$1.2M"
          change="+18% growth"
          changeType="positive"
          icon={TrendingUp}
          gradient="accent"
        />
      </div>

      {/* Charts Section */}
      <SalesChart />

      {/* Team Performance and Deals */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <SalesTeamPerformance />
        <DealsActivity />
      </div>

      {/* Insights Section */}
      <div className="bg-gradient-card backdrop-blur-sm border border-border/40 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
          <Calendar className="h-5 w-5 text-dashboard-primary" />
          Sales Insights & Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2 text-foreground">Top Performers</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Emily Rodriguez leads with 90% target achievement. Consider sharing her best practices with the team.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-dashboard-success rounded-full"></div>
              <span>Revenue: $180K of $200K target</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 text-foreground">Pipeline Health</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Strong pipeline with $1.2M potential revenue. Focus on converting qualified leads in Q4.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-dashboard-primary rounded-full"></div>
              <span>35 qualified leads ready for conversion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}