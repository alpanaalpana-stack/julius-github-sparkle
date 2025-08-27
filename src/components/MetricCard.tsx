import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description?: string;
  gradient?: "primary" | "secondary" | "accent" | "warning";
}

export function MetricCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  description,
  gradient = "primary"
}: MetricCardProps) {
  const gradientClass = {
    primary: "bg-gradient-primary",
    secondary: "bg-gradient-secondary", 
    accent: "bg-dashboard-accent",
    warning: "bg-dashboard-warning"
  }[gradient];

  const changeColorClass = {
    positive: "text-dashboard-success",
    negative: "text-destructive",
    neutral: "text-muted-foreground"
  }[changeType];

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/40 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${gradientClass} shadow-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          {change && (
            <div className={`text-sm font-medium ${changeColorClass}`}>
              {change}
            </div>
          )}
        </div>
        
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {value}
          </h3>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          {description && (
            <p className="text-xs text-muted-foreground/80">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}