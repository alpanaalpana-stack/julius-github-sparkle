import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";

const salesTeam = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Sales Rep",
    revenue: 125000,
    target: 150000,
    deals: 18,
    trend: "up",
    performance: 83
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Account Executive",
    revenue: 98000,
    target: 120000,
    deals: 15,
    trend: "up",
    performance: 82
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Sales Manager",
    revenue: 180000,
    target: 200000,
    deals: 25,
    trend: "down",
    performance: 90
  },
  {
    id: 4,
    name: "David Kim",
    role: "Inside Sales Rep",
    revenue: 75000,
    target: 100000,
    deals: 12,
    trend: "up",
    performance: 75
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Enterprise Sales",
    revenue: 220000,
    target: 250000,
    deals: 8,
    trend: "up",
    performance: 88
  }
];

export function SalesTeamPerformance() {
  return (
    <Card className="bg-gradient-card border-border/40 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Sales Team Performance</CardTitle>
        <p className="text-sm text-muted-foreground">Individual achievements and targets</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {salesTeam.map((member) => {
            const progressPercentage = (member.revenue / member.target) * 100;
            return (
              <div key={member.id} className="p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-primary text-white text-sm font-medium">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      {member.deals} deals
                    </Badge>
                    <div className={`flex items-center gap-1 ${
                      member.trend === 'up' ? 'text-dashboard-success' : 'text-destructive'
                    }`}>
                      {member.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span className="text-sm font-medium">{member.performance}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Revenue Progress</span>
                    <span className="font-medium">
                      ${member.revenue.toLocaleString()} / ${member.target.toLocaleString()}
                    </span>
                  </div>
                  <Progress 
                    value={progressPercentage} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{progressPercentage.toFixed(1)}% of target</span>
                    <span>${(member.target - member.revenue).toLocaleString()} remaining</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}