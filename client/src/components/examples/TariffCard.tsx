import TariffCard from '../TariffCard';

export default function TariffCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <TariffCard
        name="Базовый"
        price={990}
        period="в месяц"
        features={[
          "Вывоз каждые 2 дня",
          "До 20 кг мусора",
          "Поддержка в чате",
          "Уведомления о вывозе"
        ]}
        onSelect={() => console.log('Базовый выбран')}
      />
      <TariffCard
        name="Стандарт"
        price={1490}
        period="в месяц"
        features={[
          "Вывоз каждые 2 дня",
          "До 35 кг мусора",
          "Приоритетная поддержка",
          "Уведомления о вывозе",
          "Раздельный сбор мусора"
        ]}
        isPopular
        onSelect={() => console.log('Стандарт выбран')}
      />
      <TariffCard
        name="Премиум"
        price={2490}
        period="в месяц"
        features={[
          "Вывоз ежедневно",
          "Без ограничений по весу",
          "VIP поддержка 24/7",
          "Уведомления о вывозе",
          "Раздельный сбор мусора",
          "Утилизация крупногабаритных отходов"
        ]}
        onSelect={() => console.log('Премиум выбран')}
      />
    </div>
  );
}
