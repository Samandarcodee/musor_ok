import StatsCard from '../StatsCard';
import { Users, Package, TrendingUp } from 'lucide-react';

export default function StatsCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <StatsCard
        title="Активные клиенты"
        value="1,234"
        icon={Users}
        trend="+12% за месяц"
      />
      <StatsCard
        title="Вывозов сегодня"
        value="89"
        icon={Package}
        trend="Из 120 запланированных"
      />
      <StatsCard
        title="Доход за месяц"
        value="1.8M ₽"
        icon={TrendingUp}
        trend="+8% к прошлому месяцу"
      />
    </div>
  );
}
