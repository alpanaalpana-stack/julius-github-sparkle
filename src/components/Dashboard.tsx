import { 
  GitBranch, 
  Users, 
  GitCommit, 
  AlertCircle, 
  Star, 
  GitPullRequest,
  TrendingUp,
  Activity
} from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { ActivityChart } from "@/components/ActivityChart";
import { RecentActivity } from "@/components/RecentActivity";

export function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Welcome to Julius Analytics</h1>
          <p className="text-xl opacity-90 mb-6">
            Your comprehensive GitHub data connector dashboard
          </p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live data syncing</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              <span>Real-time analytics</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Repositories"
          value="24"
          change="+3 this month"
          changeType="positive"
          icon={GitBranch}
          gradient="primary"
          description="Active repositories"
        />
        <MetricCard
          title="Contributors"
          value="156"
          change="+12 this week"
          changeType="positive"
          icon={Users}
          gradient="secondary"
          description="Team members"
        />
        <MetricCard
          title="Commits This Month"
          value="2,847"
          change="+18% vs last month"
          changeType="positive"
          icon={GitCommit}
          gradient="accent"
          description="Code contributions"
        />
        <MetricCard
          title="Open Issues"
          value="47"
          change="-8 this week"
          changeType="positive"
          icon={AlertCircle}
          gradient="warning"
          description="Needs attention"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Stars Earned"
          value="1,234"
          change="+45 this month"
          changeType="positive"
          icon={Star}
          gradient="primary"
        />
        <MetricCard
          title="Pull Requests"
          value="89"
          change="23 merged today"
          changeType="neutral"
          icon={GitPullRequest}
          gradient="secondary"
        />
        <MetricCard
          title="Code Quality"
          value="98.5%"
          change="+1.2% improvement"
          changeType="positive"
          icon={TrendingUp}
          gradient="accent"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart />
        <RecentActivity />
      </div>

      {/* Additional Info Section */}
      <div className="bg-gradient-card backdrop-blur-sm border border-border/40 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Julius Data Connector Integration
        </h3>
        <p className="text-muted-foreground mb-4">
          This dashboard demonstrates how Julius can seamlessly integrate with GitHub data to provide 
          real-time analytics and insights. Perfect for improving code quality, tracking team productivity, 
          and making data-driven development decisions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-dashboard-primary rounded-full"></div>
            <span>Real-time data syncing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-dashboard-secondary rounded-full"></div>
            <span>Advanced analytics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-dashboard-accent rounded-full"></div>
            <span>Custom visualizations</span>
          </div>
        </div>
      </div>
    </div>
  );
}