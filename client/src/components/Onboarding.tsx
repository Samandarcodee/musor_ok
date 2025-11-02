import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check } from "lucide-react";
import welcomeImg from "@assets/generated_images/Happy_person_clean_home_onboarding_f87ed50b.png";
import scheduleImg from "@assets/generated_images/Calendar_schedule_illustration_27833a17.png";
import cityImg from "@assets/generated_images/Eco-friendly_city_illustration_5c2fbeb8.png";

interface OnboardingProps {
  onComplete: () => void;
}

const screens = [
  {
    emoji: "🎉",
    title: "Добро пожаловать!",
    description: "ЭкоВывоз — современный сервис вывоза мусора по подписке. Забудьте о походах к мусорным бакам!",
    image: welcomeImg,
    gradient: "from-purple-500 via-blue-500 to-teal-400"
  },
  {
    emoji: "📅",
    title: "Выбери график",
    description: "Курьеры приезжают каждые 2 дня и забирают мусор прямо у вашей двери. Вы всегда знаете, когда ждать!",
    image: scheduleImg,
    gradient: "from-blue-500 via-purple-500 to-pink-500"
  },
  {
    emoji: "♻️",
    title: "Забудь о проблемах",
    description: "Мы заботимся об экологии и правильной утилизации. Раздельный сбор и переработка — наша забота!",
    image: cityImg,
    gradient: "from-teal-400 via-blue-500 to-purple-600"
  }
];

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const screen = screens[currentScreen];

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br ${screen.gradient} flex flex-col`}>
      {/* Skip Button */}
      {currentScreen < screens.length - 1 && (
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            onClick={handleSkip}
            className="text-white hover:bg-white/20"
            data-testid="button-skip-onboarding"
          >
            Пропустить
          </Button>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-32">
        <div className="w-full max-w-md space-y-8 text-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
              <img
                src={screen.image}
                alt={screen.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 text-white">
            <div className="text-6xl mb-4">{screen.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {screen.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-sm mx-auto">
              {screen.description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-6 pb-8 space-y-6">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentScreen(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentScreen
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40"
              }`}
              data-testid={`dot-${index}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleNext}
          size="lg"
          className="w-full h-14 rounded-full text-lg font-semibold bg-white text-purple-600 hover:bg-white/90 shadow-xl"
          data-testid="button-next-onboarding"
        >
          {currentScreen === screens.length - 1 ? (
            <span className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              Начать
            </span>
          ) : (
            "Далее"
          )}
        </Button>
      </div>
    </div>
  );
}
