import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Package, TrendingUp, Search } from "lucide-react";
import { useState } from "react";

const mockCustomers = [
  { id: 1, name: "Иван Петров", address: "ул. Ленина, 25, кв. 42", plan: "Стандарт", status: "active", nextPickup: "15.11.2024" },
  { id: 2, name: "Мария Сидорова", address: "пр. Невский, 100, кв. 15", plan: "Премиум", status: "active", nextPickup: "15.11.2024" },
  { id: 3, name: "Петр Иванов", address: "ул. Пушкина, 12, кв. 8", plan: "Базовый", status: "active", nextPickup: "16.11.2024" },
  { id: 4, name: "Анна Козлова", address: "пр. Большой, 45, кв. 23", plan: "Стандарт", status: "pending", nextPickup: "16.11.2024" },
  { id: 5, name: "ООО Компания", address: "ул. Рабочая, 78", plan: "Бизнес", status: "active", nextPickup: "15.11.2024" }
];

const statusLabels: Record<string, string> = {
  active: "Активна",
  pending: "Ожидает",
  cancelled: "Отменена"
};

const statusColors: Record<string, string> = {
  active: "bg-green-500/10 text-green-700 dark:text-green-400",
  pending: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  cancelled: "bg-red-500/10 text-red-700 dark:text-red-400"
};

export default function Admin() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Панель администратора</h1>
            <p className="text-muted-foreground">
              Управление клиентами и маршрутами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Активные клиенты"
              value="1,234"
              icon={Users}
              trend="+12% за месяц"
            />
            <StatsCard
              title="Вывозов сегодня"
              value="89"
              icon={Package}
              trend="Из 120 запланированных"
            />
            <StatsCard
              title="Доход за месяц"
              value="1.8M ₽"
              icon={TrendingUp}
              trend="+8% к прошлому месяцу"
            />
          </div>

          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Список клиентов</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Всего клиентов: {mockCustomers.length}
                  </p>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Поиск по имени или адресу..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                    data-testid="input-search-customers"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Клиент</th>
                      <th className="text-left p-3 font-semibold hidden md:table-cell">Адрес</th>
                      <th className="text-left p-3 font-semibold">Тариф</th>
                      <th className="text-left p-3 font-semibold hidden sm:table-cell">След. вывоз</th>
                      <th className="text-left p-3 font-semibold">Статус</th>
                      <th className="text-right p-3 font-semibold">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCustomers.map((customer) => (
                      <tr key={customer.id} className="border-b hover-elevate">
                        <td className="p-3">
                          <p className="font-medium" data-testid={`text-customer-${customer.id}`}>
                            {customer.name}
                          </p>
                          <p className="text-sm text-muted-foreground md:hidden">
                            {customer.address}
                          </p>
                        </td>
                        <td className="p-3 hidden md:table-cell">
                          <p className="text-sm text-muted-foreground">
                            {customer.address}
                          </p>
                        </td>
                        <td className="p-3">
                          <Badge variant="outline" data-testid={`badge-plan-${customer.id}`}>
                            {customer.plan}
                          </Badge>
                        </td>
                        <td className="p-3 hidden sm:table-cell">
                          <p className="text-sm">{customer.nextPickup}</p>
                        </td>
                        <td className="p-3">
                          <Badge 
                            className={statusColors[customer.status]}
                            data-testid={`badge-status-${customer.id}`}
                          >
                            {statusLabels[customer.status]}
                          </Badge>
                        </td>
                        <td className="p-3 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            data-testid={`button-view-${customer.id}`}
                            onClick={() => console.log(`Просмотр клиента ${customer.id}`)}
                          >
                            Просмотр
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredCustomers.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Клиенты не найдены
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
