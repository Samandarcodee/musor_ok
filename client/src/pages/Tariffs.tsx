import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TariffCard from "@/components/TariffCard";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const allTariffs = [
  {
    name: "Базовый",
    price: 990,
    period: "в месяц",
    features: [
      "Вывоз каждые 2 дня",
      "До 20 кг мусора за вывоз",
      "Поддержка в чате 9:00-18:00",
      "Уведомления о вывозе в Telegram",
      "Личный кабинет"
    ]
  },
  {
    name: "Стандарт",
    price: 1490,
    period: "в месяц",
    features: [
      "Вывоз каждые 2 дня",
      "До 35 кг мусора за вывоз",
      "Приоритетная поддержка 8:00-22:00",
      "Уведомления о вывозе",
      "Раздельный сбор мусора",
      "Личный кабинет",
      "Гибкое изменение расписания"
    ],
    isPopular: true
  },
  {
    name: "Премиум",
    price: 2490,
    period: "в месяц",
    features: [
      "Вывоз ежедневно",
      "Без ограничений по весу",
      "VIP поддержка 24/7",
      "Уведомления о вывозе",
      "Раздельный сбор мусора",
      "Личный кабинет",
      "Приоритетное обслуживание",
      "Утилизация крупногабаритных отходов",
      "Персональный менеджер"
    ]
  },
  {
    name: "Для бизнеса",
    price: 4990,
    period: "в месяц",
    features: [
      "Индивидуальное расписание",
      "Без ограничений",
      "Выделенный менеджер 24/7",
      "Все виды отходов",
      "Документы для отчетности",
      "Договор с юридическим лицом",
      "Скидки при долгосрочном контракте"
    ]
  }
];

const comparisonFeatures = [
  { feature: "Частота вывоза", basic: "Каждые 2 дня", standard: "Каждые 2 дня", premium: "Ежедневно", business: "По запросу" },
  { feature: "Лимит веса", basic: "20 кг", standard: "35 кг", premium: "Без лимита", business: "Без лимита" },
  { feature: "Поддержка", basic: "9:00-18:00", standard: "8:00-22:00", premium: "24/7", business: "24/7" },
  { feature: "Раздельный сбор", basic: "—", standard: "✓", premium: "✓", business: "✓" },
  { feature: "Крупногабарит", basic: "—", standard: "—", premium: "✓", business: "✓" }
];

export default function Tariffs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 bg-gradient-to-b from-background to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">Тарифы</h1>
              <p className="text-lg text-muted-foreground">
                Выберите тарифный план, который подходит именно вам. Все тарифы включают 
                доставку прямо к вашей двери и уведомления о предстоящем вывозе.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {allTariffs.map((tariff, index) => (
                <TariffCard
                  key={index}
                  {...tariff}
                  onSelect={() => console.log(`Выбран тариф ${tariff.name}`)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Сравнение тарифов</h2>
              <p className="text-lg text-muted-foreground">
                Подробное сравнение возможностей каждого тарифного плана
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Функция</th>
                    <th className="text-center p-4 font-semibold">Базовый</th>
                    <th className="text-center p-4 font-semibold bg-primary/5">Стандарт</th>
                    <th className="text-center p-4 font-semibold">Премиум</th>
                    <th className="text-center p-4 font-semibold">Бизнес</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="border-b hover-elevate">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-sm">{row.basic}</td>
                      <td className="p-4 text-center text-sm bg-primary/5">{row.standard}</td>
                      <td className="p-4 text-center text-sm">{row.premium}</td>
                      <td className="p-4 text-center text-sm">{row.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-accent/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Гарантии качества</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Возврат средств</h3>
                    <p className="text-sm text-muted-foreground">
                      Если вы не удовлетворены сервисом в первый месяц, мы вернем 100% стоимости
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Без комиссий</h3>
                    <p className="text-sm text-muted-foreground">
                      Никаких скрытых платежей — цена на сайте = итоговая стоимость
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Отмена в любой момент</h3>
                    <p className="text-sm text-muted-foreground">
                      Остановите подписку в один клик без объяснения причин
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Гарантия пунктуальности</h3>
                    <p className="text-sm text-muted-foreground">
                      Если курьер опоздал более чем на 30 минут — следующий вывоз бесплатно
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
