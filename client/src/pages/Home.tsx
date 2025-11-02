import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import TariffCard from "@/components/TariffCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Leaf, Clock, Shield, Smile } from "lucide-react";
import courierImage from "@assets/generated_images/Professional_courier_with_bag_4b91efb5.png";

const benefits = [
  {
    icon: Leaf,
    title: "Экологичность",
    description: "Мы заботимся о раздельном сборе и правильной утилизации отходов"
  },
  {
    icon: Clock,
    title: "Пунктуальность",
    description: "Курьеры приезжают строго по расписанию, вы всегда знаете когда"
  },
  {
    icon: Shield,
    title: "Надежность",
    description: "Работаем с 2020 года, более 10,000 довольных клиентов"
  },
  {
    icon: Smile,
    title: "Удобство",
    description: "Забудьте о походах к мусорным бакам — мы заберем все у двери"
  }
];

const previewTariffs = [
  {
    name: "Базовый",
    price: 990,
    period: "в месяц",
    features: [
      "Вывоз каждые 2 дня",
      "До 20 кг мусора",
      "Поддержка в чате"
    ]
  },
  {
    name: "Стандарт",
    price: 1490,
    period: "в месяц",
    features: [
      "Вывоз каждые 2 дня",
      "До 35 кг мусора",
      "Приоритетная поддержка",
      "Раздельный сбор"
    ],
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
      "Утилизация крупногабарита"
    ]
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <HowItWorks />

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={courierImage}
                  alt="Профессиональный курьер ЭкоВывоз"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Почему выбирают нас
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Современный подход к решению повседневных задач
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="space-y-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-accent/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Наши тарифы</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите подходящий план и начните пользоваться сервисом уже сегодня
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              {previewTariffs.map((tariff, index) => (
                <TariffCard
                  key={index}
                  {...tariff}
                  onSelect={() => console.log(`Тариф ${tariff.name} выбран`)}
                />
              ))}
            </div>

            <div className="text-center">
              <Link href="/tariffs">
                <Button size="lg" data-testid="button-view-all-tariffs">
                  Посмотреть все тарифы
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
