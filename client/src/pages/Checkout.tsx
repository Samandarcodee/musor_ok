import BottomNav from "@/components/BottomNav";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useLocation } from "wouter";
import { Check, ArrowLeft, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TariffOption {
  name: string;
  price: number;
  gradient: string;
}

const tariffOptions: TariffOption[] = [
  { name: "Базовый", price: 990, gradient: "from-blue-400 to-purple-500" },
  { name: "Стандарт", price: 1490, gradient: "from-purple-500 to-pink-500" },
  { name: "Премиум", price: 2490, gradient: "from-teal-400 to-blue-500" },
  { name: "Бизнес", price: 4990, gradient: "from-orange-400 to-pink-500" }
];

export default function Checkout() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedTariff, setSelectedTariff] = useState<TariffOption>(tariffOptions[1]);
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const handleSubmit = () => {
    toast({
      title: "🎉 Подписка оформлена!",
      description: `Тариф ${selectedTariff.name} активирован. Первый вывоз: завтра в 10:00`,
    });
    setTimeout(() => setLocation("/profile"), 2000);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => step > 1 ? setStep(step - 1) : setLocation("/tariffs")}
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-bold">Оформление</h1>
          <ThemeToggle />
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 space-y-6 max-w-2xl">
        {/* Progress */}
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-all ${
                s <= step 
                  ? "bg-gradient-to-br from-purple-500 to-blue-600 text-white" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {s < step ? <Check className="h-4 w-4" /> : s}
              </div>
              {s < 3 && (
                <div className={`flex-1 h-1 mx-2 rounded ${
                  s < step ? "bg-gradient-to-r from-purple-500 to-blue-600" : "bg-muted"
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Choose Tariff */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Выберите тариф</h2>
              <p className="text-muted-foreground">Вы можете изменить его в любое время</p>
            </div>

            <div className="space-y-3">
              {tariffOptions.map((tariff) => (
                <Card
                  key={tariff.name}
                  className={`cursor-pointer transition-all hover-elevate ${
                    selectedTariff.name === tariff.name ? "border-2 border-primary shadow-lg" : ""
                  }`}
                  onClick={() => setSelectedTariff(tariff)}
                  data-testid={`card-tariff-${tariff.name.toLowerCase()}`}
                >
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tariff.gradient}`} />
                      <div>
                        <h3 className="font-bold text-lg">{tariff.name}</h3>
                        <p className="text-sm text-muted-foreground">{tariff.price} ₽/месяц</p>
                      </div>
                    </div>
                    {selectedTariff.name === tariff.name && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              onClick={() => setStep(2)}
              className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold"
              data-testid="button-next-step"
            >
              Продолжить
            </Button>
          </div>
        )}

        {/* Step 2: Address */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Укажите адрес</h2>
              <p className="text-muted-foreground">Куда приезжать курьеру?</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Адрес</Label>
                <Input
                  id="address"
                  placeholder="ул. Ленина, д. 25"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="h-12 rounded-xl"
                  data-testid="input-address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="apartment">Квартира</Label>
                  <Input
                    id="apartment"
                    placeholder="42"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                    className="h-12 rounded-xl"
                    data-testid="input-apartment"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    placeholder="+7 900 123-45-67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 rounded-xl"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <Card className="bg-accent/50">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="text-2xl">📍</div>
                    <div>
                      <p className="text-sm font-medium">Только Санкт-Петербург</p>
                      <p className="text-xs text-muted-foreground">
                        Пока мы работаем только в пределах города
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={() => setStep(3)}
              disabled={!address || !apartment || !phone}
              className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold"
              data-testid="button-next-payment"
            >
              Продолжить
            </Button>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Оплата</h2>
              <p className="text-muted-foreground">Защищенный платеж</p>
            </div>

            {/* Summary */}
            <Card className={`bg-gradient-to-br ${selectedTariff.gradient} text-white border-0`}>
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm opacity-90">Тариф</p>
                    <p className="text-2xl font-bold">{selectedTariff.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">{selectedTariff.price} ₽</p>
                    <p className="text-sm opacity-90">в месяц</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/20">
                  <p className="text-sm opacity-90">📍 {address}, кв. {apartment}</p>
                  <p className="text-sm opacity-90">📞 {phone}</p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Номер карты</Label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="h-12 rounded-xl pl-12"
                    maxLength={19}
                    data-testid="input-card-number"
                  />
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardExpiry">Срок</Label>
                  <Input
                    id="cardExpiry"
                    placeholder="MM/YY"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    className="h-12 rounded-xl"
                    maxLength={5}
                    data-testid="input-card-expiry"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardCvc">CVC</Label>
                  <Input
                    id="cardCvc"
                    placeholder="123"
                    value={cardCvc}
                    onChange={(e) => setCardCvc(e.target.value)}
                    className="h-12 rounded-xl"
                    maxLength={3}
                    data-testid="input-card-cvc"
                  />
                </div>
              </div>

              <Card className="bg-accent/50">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="text-2xl">🔒</div>
                    <div>
                      <p className="text-sm font-medium">Безопасная оплата</p>
                      <p className="text-xs text-muted-foreground">
                        Данные карты защищены по стандарту PCI DSS
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!cardNumber || !cardExpiry || !cardCvc}
              className="w-full h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg shadow-lg"
              data-testid="button-submit-payment"
            >
              Оплатить {selectedTariff.price} ₽
            </Button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
