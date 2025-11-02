import BottomNav from "@/components/BottomNav";
import ThemeToggle from "@/components/ThemeToggle";
import GradientCard from "@/components/GradientCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, CreditCard, Settings, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const upcomingPickups = [
  { date: "15 ноя", time: "10:00-12:00" },
  { date: "17 ноя", time: "10:00-12:00" },
  { date: "19 ноя", time: "10:00-12:00" }
];

const payments = [
  { date: "01.11.2024", amount: 1490 },
  { date: "01.10.2024", amount: 1490 },
  { date: "01.09.2024", amount: 1490 }
];

export default function NewProfile() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Профиль
          </h1>
          <ThemeToggle />
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* User Info */}
        <GradientCard gradient="from-purple-500 to-blue-600">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl">
              👤
            </div>
            <div>
              <h2 className="text-2xl font-bold" data-testid="text-user-name">Иван Петров</h2>
              <p className="text-white/80">ivan@example.com</p>
            </div>
          </div>
        </GradientCard>

        {/* Active Subscription */}
        <Card className="border-2 border-primary/20">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold" data-testid="text-plan-name">Стандарт</h3>
                <p className="text-sm text-muted-foreground">1,490 ₽/месяц</p>
              </div>
              <Badge className="bg-green-500/10 text-green-700 dark:text-green-400">
                🟢 Активна
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Следующий вывоз</p>
                  <p className="text-sm text-muted-foreground" data-testid="text-next-pickup">
                    15 ноября 2024, 10:00-12:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Адрес</p>
                  <p className="text-sm text-muted-foreground" data-testid="text-address">
                    ул. Ленина, д. 25, кв. 42, СПб
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full rounded-full" variant="outline" data-testid="button-manage">
              Управление подпиской
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Pickups */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Предстоящие вывозы</h3>
          <div className="space-y-2">
            {upcomingPickups.map((pickup, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{pickup.date}</p>
                    <p className="text-sm text-muted-foreground">{pickup.time}</p>
                  </div>
                  <Badge variant="outline">Запланирован</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment History */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Последние платежи</h3>
          <div className="space-y-2">
            {payments.map((payment, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{payment.date}</p>
                      <p className="text-sm text-muted-foreground">Карта •••• 4242</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{payment.amount} ₽</p>
                    <Badge variant="outline" className="mt-1">Оплачено</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="space-y-2">
          <Card className="hover-elevate active-elevate-2">
            <CardContent className="p-4 flex items-center gap-3">
              <Settings className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Настройки</span>
            </CardContent>
          </Card>

          <Card className="hover-elevate active-elevate-2 border-destructive/20">
            <CardContent className="p-4 flex items-center gap-3 text-destructive">
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Выйти</span>
            </CardContent>
          </Card>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
