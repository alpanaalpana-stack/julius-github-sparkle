import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { name: "Jan", commits: 45, prs: 12, issues: 8 },
  { name: "Feb", commits: 52, prs: 15, issues: 6 },
  { name: "Mar", commits: 38, prs: 18, issues: 12 },
  { name: "Apr", commits: 65, prs: 22, issues: 9 },
  { name: "May", commits: 71, prs: 19, issues: 15 },
  { name: "Jun", commits: 58, prs: 25, issues: 11 },
  { name: "Jul", commits: 82, prs: 28, issues: 7 },
];

export function ActivityChart() {
  return (
    <Card className="bg-gradient-card border-border/40 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Repository Activity</CardTitle>
        <p className="text-sm text-muted-foreground">Commits, PRs, and Issues over time</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="commitsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="prsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="issuesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "12px"
              }}
            />
            <Area
              type="monotone"
              dataKey="commits"
              stroke="hsl(var(--chart-1))"
              fillOpacity={1}
              fill="url(#commitsGradient)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="prs"
              stroke="hsl(var(--chart-2))"
              fillOpacity={1}
              fill="url(#prsGradient)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="issues"
              stroke="hsl(var(--chart-3))"
              fillOpacity={1}
              fill="url(#issuesGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}