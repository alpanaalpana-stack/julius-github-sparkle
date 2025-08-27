import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DollarSign, Phone, Mail, Calendar, CheckCircle, Clock } from "lucide-react";

const recentDeals = [
  {
    id: 1,
    company: "TechCorp Solutions",
    contact: "John Smith",
    value: 45000,
    stage: "Negotiation",
    probability: 75,
    nextAction: "Follow-up call",
    date: "Today, 2:00 PM",
    type: "meeting",
    status: "hot"
  },
  {
    id: 2,
    company: "Digital Dynamics",
    contact: "Maria Garcia",
    value: 28000,
    stage: "Proposal Sent",
    probability: 60,
    nextAction: "Contract review",
    date: "Tomorrow, 10:00 AM",
    type: "email",
    status: "warm"
  },
  {
    id: 3,
    company: "Innovation Labs",
    contact: "Alex Wong",
    value: 78000,
    stage: "Closed Won",
    probability: 100,
    nextAction: "Implementation kickoff",
    date: "Completed",
    type: "completed",
    status: "won"
  },
  {
    id: 4,
    company: "StartupXYZ",
    contact: "Emma Davis",
    value: 15000,
    stage: "Qualified Lead",
    probability: 25,
    nextAction: "Discovery call",
    date: "Friday, 3:00 PM",
    type: "phone",
    status: "cold"
  },
  {
    id: 5,
    company: "Enterprise Co",
    contact: "Robert Johnson",
    value: 120000,
    stage: "Decision Making",
    probability: 85,
    nextAction: "Final presentation",
    date: "Next Monday",
    type: "meeting",
    status: "hot"
  }
];

export function DealsActivity() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'warm': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'cold': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'won': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getActionIcon = (type: string) => {
    switch (type) {
      case 'phone': return <Phone className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      case 'meeting': return <Calendar className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <Card className="bg-gradient-card border-border/40 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Deals & Activities</CardTitle>
        <p className="text-sm text-muted-foreground">Recent opportunities and upcoming actions</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentDeals.map((deal) => (
            <div key={deal.id} className="p-4 rounded-lg border border-border/60 hover:bg-accent/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-secondary text-white text-sm">
                      {deal.company.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-foreground">{deal.company}</h4>
                    <p className="text-sm text-muted-foreground">{deal.contact}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="h-4 w-4 text-dashboard-success" />
                    <span className="font-semibold text-lg">${deal.value.toLocaleString()}</span>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(deal.status)}`}>
                    {deal.probability}% probability
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {deal.stage}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {getActionIcon(deal.type)}
                  <span>{deal.nextAction}</span>
                  <span className="text-xs">• {deal.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}