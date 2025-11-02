import BottomNav from "@/components/BottomNav";
import ThemeToggle from "@/components/ThemeToggle";
import GradientCard from "@/components/GradientCard";
import ModernTariffCard from "@/components/ModernTariffCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Zap, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: "🗑️",
    title: "Без походов к бакам",
    description: "Курьеры забирают у двери"
  },
  {
    icon: "⚡",
    title: "Каждые 2 дня",
    description: "Или ежедневно в премиум"
  },
  {
    icon: "♻️",
    title: "Раздельный сбор",
    description: "Забота об экологии"
  },
  {
    icon: "💚",
    title: "10К+ клиентов",
    description: "Доверяют нам с 2020"
  }
];

const tariffs = [
  {
    name: "Базовый",
    price: 990,
    period: "в месяц",
    features: [
      "Вывоз каждые 2 дня",
      "До 20 кг мусора",
      "Поддержка в чате",
      "Уведомления"
    ],
    gradient: "from-blue-400 to-purple-500"
  },
  {
    name: "Стандарт",
    price: 1490,
    period: "в месяц",
    features: [
      "Вывоз каждые 2 дня",
      "До 35 кг",
      "Приоритетная поддержка",
      "Раздельный сбор",
      "Гибкое расписание"
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
      "Крупногабарит"
    ],
    gradient: "from-teal-400 to-blue-500"
  }
];

export default function NewHome() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            ЭкоВывоз
          </h1>
          <ThemeToggle />
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 via-blue-500 to-teal-400 p-8 md:p-12 text-white shadow-2xl">
          <div className="relative z-10 space-y-4">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              ✨ Современный сервис вывоза мусора
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Чисто. Удобно.<br />Каждый день.
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Забудьте о походах к мусорным бакам. Курьеры приезжают каждые два дня и забирают мусор у вашей двери.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/tariffs">
                <Button size="lg" className="w-full sm:w-auto h-12 rounded-full bg-white text-purple-600 hover:bg-white/90 font-semibold shadow-lg" data-testid="button-choose-plan">
                  Выбрать тариф
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 rounded-full border-2 border-white text-white hover:bg-white/10" data-testid="button-learn-more">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-2xl p-4 border hover-elevate transition-all">
              <div className="text-4xl mb-2">{feature.icon}</div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <GradientCard gradient="from-purple-600 to-blue-500">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm opacity-90">Клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm opacity-90">Лет работы</div>
            </div>
            <div>
              <div className="text-3xl font-bold">99%</div>
              <div className="text-sm opacity-90">Довольны</div>
            </div>
          </div>
        </GradientCard>

        {/* Tariffs Scroll */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Тарифы</h3>
            <Link href="/tariffs">
              <Button variant="ghost" className="text-primary" data-testid="link-all-tariffs">
                Все тарифы →
              </Button>
            </Link>
          </div>
          
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
            {tariffs.map((tariff, index) => (
              <ModernTariffCard
                key={index}
                {...tariff}
                onSelect={() => console.log(`Тариф ${tariff.name} выбран`)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-pink-500 to-orange-400 rounded-3xl p-8 text-white text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">Готовы начать?</h3>
          <p className="text-white/90">Выберите тариф и начните пользоваться уже сегодня</p>
          <Link href="/tariffs">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 rounded-full h-12 font-semibold shadow-lg" data-testid="button-start-now">
              Начать сейчас
            </Button>
          </Link>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
