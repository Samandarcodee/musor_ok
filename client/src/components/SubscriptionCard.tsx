import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Package } from "lucide-react";

export interface SubscriptionCardProps {
  planName: string;
  status: "active" | "cancelled" | "pending";
  nextPickupDate: string;
  address: string;
  onManage?: () => void;
}

export default function SubscriptionCard({ 
  planName, 
  status, 
  nextPickupDate, 
  address,
  onManage 
}: SubscriptionCardProps) {
  const statusColors = {
    active: "bg-green-500/10 text-green-700 dark:text-green-400",
    cancelled: "bg-red-500/10 text-red-700 dark:text-red-400",
    pending: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
  };

  const statusLabels = {
    active: "Активна",
    cancelled: "Отменена",
    pending: "Ожидает"
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold" data-testid="text-plan-name">
            {planName}
          </h3>
          <Badge className={statusColors[status]} data-testid={`badge-status-${status}`}>
            {statusLabels[status]}
          </Badge>
        </div>
        <Package className="h-8 w-8 text-primary" />
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Следующий вывоз</p>
              <p className="text-sm text-muted-foreground" data-testid="text-next-pickup">
                {nextPickupDate}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Адрес</p>
              <p className="text-sm text-muted-foreground" data-testid="text-address">
                {address}
              </p>
            </div>
          </div>
        </div>

        <Button 
          variant="outline" 
          className="w-full" 
          onClick={onManage}
          data-testid="button-manage-subscription"
        >
          Управление подпиской
        </Button>
      </CardContent>
    </Card>
  );
}
