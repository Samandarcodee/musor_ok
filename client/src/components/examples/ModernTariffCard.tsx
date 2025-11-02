import ModernTariffCard from '../ModernTariffCard';

export default function ModernTariffCardExample() {
  return (
    <div className="flex gap-4 p-6 overflow-x-auto snap-x">
      <ModernTariffCard
        name="Базовый"
        price={990}
        period="в месяц"
        features={[
          "Вывоз каждые 2 дня",
          "До 20 кг мусора",
          "Поддержка в чате",
          "Уведомления"
        ]}
        gradient="from-blue-400 to-purple-500"
        onSelect={() => console.log('Базовый выбран')}
      />
      <ModernTariffCard
        name="Стандарт"
        price={1490}
        period="в месяц"
        features={[
          "Вывоз каждые 2 дня",
          "До 35 кг мусора",
          "Приоритетная поддержка",
          "Раздельный сбор",
          "Гибкое расписание"
        ]}
        gradient="from-purple-500 to-pink-500"
        isPopular
        onSelect={() => console.log('Стандарт выбран')}
      />
      <ModernTariffCard
        name="Премиум"
        price={2490}
        period="в месяц"
        features={[
          "Вывоз ежедневно",
          "Без ограничений",
          "VIP поддержка 24/7",
          "Крупногабарит",
          "Персональный менеджер"
        ]}
        gradient="from-teal-400 to-blue-500"
        onSelect={() => console.log('Премиум выбран')}
      />
    </div>
  );
}
