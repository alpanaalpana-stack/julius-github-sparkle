import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const salesData = [
  { month: "Jan", revenue: 45000, deals: 12, target: 50000 },
  { month: "Feb", revenue: 52000, deals: 15, target: 50000 },
  { month: "Mar", revenue: 48000, deals: 14, target: 55000 },
  { month: "Apr", revenue: 67000, deals: 18, target: 60000 },
  { month: "May", revenue: 71000, deals: 22, target: 65000 },
  { month: "Jun", revenue: 58000, deals: 16, target: 65000 },
];

const pipelineData = [
  { name: "Qualified Leads", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Proposal Sent", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Negotiation", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Closed Won", value: 15, color: "hsl(var(--chart-4))" },
  { name: "Closed Lost", value: 5, color: "hsl(var(--chart-5))" },
];

export function SalesChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-gradient-card border-border/40 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Monthly Revenue vs Target</CardTitle>
          <p className="text-sm text-muted-foreground">Performance tracking over time</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px"
                }}
                formatter={(value: any) => [`$${value.toLocaleString()}`, ""]}
              />
              <Bar dataKey="revenue" fill="url(#revenueGradient)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="target" fill="url(#targetGradient)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card border-border/40 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Sales Pipeline</CardTitle>
          <p className="text-sm text-muted-foreground">Current deals distribution</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pipelineData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {pipelineData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px"
                }}
                formatter={(value: any) => [`${value}%`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {pipelineData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-muted-foreground">{item.name}</span>
                <span className="font-medium ml-auto">{item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}