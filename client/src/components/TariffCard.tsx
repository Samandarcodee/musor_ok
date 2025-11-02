import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export interface TariffCardProps {
  name: string;
  price: number;
  period: string;
  features: string[];
  isPopular?: boolean;
  onSelect?: () => void;
}

export default function TariffCard({ name, price, period, features, isPopular, onSelect }: TariffCardProps) {
  return (
    <Card className={`relative ${isPopular ? "border-primary shadow-lg scale-105" : ""}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground" data-testid="badge-popular">
            Популярный
          </Badge>
        </div>
      )}
      
      <CardHeader className="space-y-4 pb-6">
        <h3 className="text-2xl font-bold text-center" data-testid={`text-tariff-${name.toLowerCase()}`}>
          {name}
        </h3>
        <div className="text-center">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold" data-testid={`text-price-${price}`}>
              {price}
            </span>
            <span className="text-muted-foreground">₽</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{period}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm leading-relaxed">{feature}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={isPopular ? "default" : "outline"}
          onClick={onSelect}
          data-testid={`button-select-${name.toLowerCase()}`}
        >
          Выбрать тариф
        </Button>
      </CardFooter>
    </Card>
  );
}
