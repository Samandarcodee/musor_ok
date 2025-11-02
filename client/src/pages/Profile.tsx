import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubscriptionCard from "@/components/SubscriptionCard";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, CreditCard, History, Settings } from "lucide-react";

const mockPayments = [
  { id: 1, date: "01.11.2024", amount: 1490, status: "Оплачено", method: "Карта •••• 4242" },
  { id: 2, date: "01.10.2024", amount: 1490, status: "Оплачено", method: "Карта •••• 4242" },
  { id: 3, date: "01.09.2024", amount: 1490, status: "Оплачено", method: "Карта •••• 4242" },
  { id: 4, date: "01.08.2024", amount: 990, status: "Оплачено", method: "Карта •••• 4242" }
];

const upcomingPickups = [
  { date: "15.11.2024", time: "10:00-12:00", status: "Запланирован" },
  { date: "17.11.2024", time: "10:00-12:00", status: "Запланирован" },
  { date: "19.11.2024", time: "10:00-12:00", status: "Запланирован" }
];

export default function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Мой профиль</h1>
            <p className="text-muted-foreground">
              Управляйте подпиской и просматривайте историю
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold" data-testid="text-user-name">Иван Петров</h3>
                      <p className="text-sm text-muted-foreground">ivan@example.com</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Settings className="h-4 w-4" />
                    Настройки профиля
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <CreditCard className="h-4 w-4" />
                    Способы оплаты
                  </Button>
                </CardContent>
              </Card>

              <SubscriptionCard
                planName="Стандарт"
                status="active"
                nextPickupDate="15 ноября 2024, 10:00-12:00"
                address="ул. Ленина, д. 25, кв. 42, Санкт-Петербург"
                onManage={() => console.log('Управление подпиской')}
              />
            </div>

            <div className="lg:col-span-2">
              <Tabs defaultValue="schedule" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="schedule" data-testid="tab-schedule">
                    Расписание
                  </TabsTrigger>
                  <TabsTrigger value="history" data-testid="tab-history">
                    История платежей
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="schedule" className="mt-6">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">Предстоящие вывозы</h3>
                      <p className="text-sm text-muted-foreground">
                        Курьер приедет в указанное время
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingPickups.map((pickup, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 rounded-lg border hover-elevate"
                          >
                            <div>
                              <p className="font-medium" data-testid={`text-pickup-date-${index}`}>
                                {pickup.date}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {pickup.time}
                              </p>
                            </div>
                            <Badge variant="outline" data-testid={`badge-pickup-status-${index}`}>
                              {pickup.status}
                            </Badge>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t">
                        <p className="text-sm text-muted-foreground mb-4">
                          Нужно изменить расписание или пропустить вывоз?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button variant="outline" className="flex-1" data-testid="button-change-schedule">
                            Изменить расписание
                          </Button>
                          <Button variant="outline" className="flex-1" data-testid="button-skip-pickup">
                            Пропустить вывоз
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="history" className="mt-6">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold">История платежей</h3>
                      <p className="text-sm text-muted-foreground">
                        Все ваши транзакции
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockPayments.map((payment) => (
                          <div
                            key={payment.id}
                            className="flex items-center justify-between p-4 rounded-lg border hover-elevate"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <CreditCard className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium" data-testid={`text-payment-date-${payment.id}`}>
                                  {payment.date}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {payment.method}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold" data-testid={`text-payment-amount-${payment.id}`}>
                                {payment.amount} ₽
                              </p>
                              <Badge variant="outline" className="mt-1">
                                {payment.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t text-center">
                        <Button variant="outline" data-testid="button-download-invoice">
                          <History className="h-4 w-4 mr-2" />
                          Скачать все квитанции
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
