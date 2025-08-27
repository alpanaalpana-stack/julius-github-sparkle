import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GitCommit, GitPullRequest, AlertCircle, GitMerge } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "commit",
    user: "John Doe",
    action: "pushed 3 commits",
    repository: "julius-analytics",
    time: "2 minutes ago",
    icon: GitCommit,
    color: "text-dashboard-primary"
  },
  {
    id: 2,
    type: "pr",
    user: "Sarah Chen",
    action: "opened pull request",
    repository: "data-connector",
    time: "15 minutes ago",
    icon: GitPullRequest,
    color: "text-dashboard-secondary"
  },
  {
    id: 3,
    type: "issue",
    user: "Mike Johnson",
    action: "reported issue",
    repository: "dashboard-ui",
    time: "1 hour ago",
    icon: AlertCircle,
    color: "text-dashboard-warning"
  },
  {
    id: 4,
    type: "merge",
    user: "Alice Wilson",
    action: "merged pull request",
    repository: "backend-api",
    time: "2 hours ago",
    icon: GitMerge,
    color: "text-dashboard-success"
  },
  {
    id: 5,
    type: "commit",
    user: "David Lee",
    action: "pushed 1 commit",
    repository: "frontend-app",
    time: "3 hours ago",
    icon: GitCommit,
    color: "text-dashboard-primary"
  }
];

export function RecentActivity() {
  return (
    <Card className="bg-gradient-card border-border/40 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Recent Activity</CardTitle>
        <p className="text-sm text-muted-foreground">Latest updates across all repositories</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/20 transition-colors">
                <div className={`p-2 rounded-full bg-background/50 ${activity.color}`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm text-foreground">{activity.user}</span>
                    <span className="text-sm text-muted-foreground">{activity.action}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {activity.repository}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
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