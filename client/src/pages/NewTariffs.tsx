import BottomNav from "@/components/BottomNav";
import ThemeToggle from "@/components/ThemeToggle";
import ModernTariffCard from "@/components/ModernTariffCard";
import BottomSheet from "@/components/BottomSheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check } from "lucide-react";
import { useLocation } from "wouter";

const allTariffs = [
  {
    name: "Базовый",
    price: 990,
    period: "в месяц",
    features: [
      "Вывоз каждые 2 дня",
      "До 20 кг мусора",
      "Поддержка 9:00-18:00",
      "Уведомления в Telegram",
      "Личный кабинет"
    ],
    gradient: "from-blue-400 to-purple-500"
  },
  {
    name: "Стандарт",
    price: 1490,
    period: "в месяц",
    features: [
      "Вывоз каждые 2 дня",
      "До 35 кг мусора",
      "Поддержка 8:00-22:00",
      "Раздельный сбор",
      "Гибкое расписание",
      "Личный кабинет"
    ],
    gradient: "from-purple-500 to-pink-500",
    isPopular: true
  },
  {
    name: "Премиум",
    price: 2490,
    period: "в месяц",
    features: [
      "Вывоз ежедневно",
      "Без ограничений",
      "VIP поддержка 24/7",
      "Раздельный сбор",
      "Крупногабарит",
      "Персональный менеджер"
    ],
    gradient: "from-teal-400 to-blue-500"
  },
  {
    name: "Бизнес",
    price: 4990,
    period: "в месяц",
    features: [
      "Индивидуальное расписание",
      "Без ограничений",
      "Менеджер 24/7",
      "Все виды отходов",
      "Документы",
      "Договор с юр. лицом"
    ],
    gradient: "from-orange-400 to-pink-500"
  }
];

const guarantees = [
  { icon: "💸", title: "Возврат средств", description: "100% возврат в первый месяц" },
  { icon: "🚫", title: "Без комиссий", description: "Никаких скрытых платежей" },
  { icon: "⏸️", title: "Отмена в любой момент", description: "Без объяснения причин" },
  { icon: "⏱️", title: "Гарантия пунктуальности", description: "Опоздание > 30 мин = бесплатный вывоз" }
];

export default function NewTariffs() {
  const [, setLocation] = useLocation();
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Тарифы
          </h1>
          <ThemeToggle />
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Hero */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Выберите свой тариф</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Все тарифы включают вывоз у двери и уведомления о вывозе
          </p>
        </div>

        {/* Tariffs Scroll */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {allTariffs.map((tariff, index) => (
            <ModernTariffCard
              key={index}
              {...tariff}
              onSelect={() => setLocation("/checkout")}
            />
          ))}
        </div>

        {/* Comparison Button */}
        <div className="text-center">
          <Button
            onClick={() => setShowComparison(true)}
            variant="outline"
            className="rounded-full"
            data-testid="button-compare-tariffs"
          >
            📊 Сравнить тарифы
          </Button>
        </div>

        {/* Guarantees */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center">Гарантии качества</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border">
                <div className="text-4xl mb-3">{guarantee.icon}</div>
                <h4 className="font-semibold mb-2">{guarantee.title}</h4>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />

      {/* Comparison Bottom Sheet */}
      <BottomSheet
        isOpen={showComparison}
        onClose={() => setShowComparison(false)}
        title="Сравнение тарифов"
      >
        <div className="space-y-6">
          {allTariffs.map((tariff, index) => (
            <div key={index} className="space-y-2">
              <h4 className="font-semibold text-lg">{tariff.name} — {tariff.price} ₽/мес</h4>
              <div className="space-y-1">
                {tariff.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <Button onClick={() => setShowComparison(false)} className="w-full rounded-full">
            Закрыть
          </Button>
        </div>
      </BottomSheet>
    </div>
  );
}
