import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/Happy_customer_with_waste_bags_8e17b094.png";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                ЭкоВывоз
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-serif">
                Чисто. Удобно. Каждый день.
              </p>
            </div>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
              Современный сервис вывоза мусора по подписке в Санкт-Петербурге. 
              Курьеры приезжают каждые два дня и забирают мусор прямо у вашей двери.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/tariffs">
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-select-tariff">
                  Выбрать тариф
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-how-it-works">
                Как это работает
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>10,000+ довольных клиентов</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Работаем с 2020 года</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Довольный клиент сервиса ЭкоВывоз"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
