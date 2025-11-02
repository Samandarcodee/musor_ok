import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ModernTariffCardProps {
  name: string;
  price: number;
  period: string;
  features: string[];
  gradient: string;
  isPopular?: boolean;
  onSelect?: () => void;
}

export default function ModernTariffCard({ 
  name, 
  price, 
  period, 
  features, 
  gradient,
  isPopular,
  onSelect 
}: ModernTariffCardProps) {
  return (
    <div className="relative w-72 flex-shrink-0 snap-center">
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-pink-500 to-orange-400 text-white border-0 shadow-lg">
            ⭐ Популярный
          </Badge>
        </div>
      )}
      
      <div className={`relative h-96 rounded-3xl p-6 bg-gradient-to-br ${gradient} text-white shadow-2xl overflow-hidden`}>
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2" data-testid={`text-tariff-${name.toLowerCase()}`}>
              {name}
            </h3>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold" data-testid={`text-price-${price}`}>
                {price}
              </span>
              <span className="text-xl opacity-90">₽</span>
            </div>
            <p className="text-sm opacity-80 mt-1">{period}</p>
          </div>

          {/* Features */}
          <div className="flex-1 space-y-3 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-tight opacity-95">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            onClick={onSelect}
            className="w-full h-12 rounded-full bg-white text-purple-600 hover:bg-white/90 font-semibold shadow-lg"
            data-testid={`button-select-${name.toLowerCase()}`}
          >
            Выбрать тариф
          </Button>
        </div>
      </div>
    </div>
  );
}
