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
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">hello world</h1>
          <p className="text-xl opacity-90 mb-6">
            Track your sales metrics, pipeline, and team performance in one place
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              New Deal
            </button>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-400 transition-colors">
              View Pipeline
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 text-white">
          <TrendingUp size={240} />
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value="$1.2M"
          change={12.5}
          icon={<DollarSign className="h-5 w-5" />}
        />
        <MetricCard
          title="Quarter Growth"
          value="24.8%"
          change={8.2}
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <MetricCard
          title="Active Leads"
          value="845"
          change={-3.1}
          icon={<Users className="h-5 w-5" />}
        />
        <MetricCard
          title="Win Rate"
          value="32.4%"
          change={4.7}
          icon={<Target className="h-5 w-5" />}
        />
      </div>

      {/* Sales Trend and Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Pipeline Overview</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">New Leads</span>
              <span className="text-indigo-600">128</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Qualified</span>
              <span className="text-indigo-600">76</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Negotiation</span>
              <span className="text-indigo-600">24</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Closed Won</span>
              <span className="text-indigo-600">18</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Performance */}
      <SalesTeamPerformance />

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <DealsActivity />
      </div>
    </div>
  );
}
