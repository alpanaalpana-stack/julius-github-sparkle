import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border/40 bg-card/30 backdrop-blur-sm flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search repositories, users..."
            className="pl-10 w-80 bg-background/50 border-border/60"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 bg-dashboard-warning text-xs flex items-center justify-center">
            3
          </Badge>
        </Button>
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium">Julius Developer</p>
            <p className="text-xs text-muted-foreground">Premium Plan</p>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full bg-gradient-primary">
            <User className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
}