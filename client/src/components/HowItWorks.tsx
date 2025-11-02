import { UserPlus, MapPin, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Регистрация",
    description: "Создайте аккаунт за 2 минуты"
  },
  {
    icon: MapPin,
    title: "Укажите адрес",
    description: "Введите адрес в Санкт-Петербурге"
  },
  {
    icon: CreditCard,
    title: "Выберите тариф",
    description: "Оплатите удобным способом"
  },
  {
    icon: Truck,
    title: "Забудьте о проблеме",
    description: "Курьеры приедут в назначенное время"
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Как это работает</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Всего 4 простых шага отделяют вас от чистоты и удобства
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="absolute top-8 left-1/2 w-full hidden lg:block">
                  {index < steps.length - 1 && (
                    <div className="h-0.5 bg-border w-full" />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
