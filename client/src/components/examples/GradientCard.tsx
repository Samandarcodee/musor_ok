import GradientCard from '../GradientCard';

export default function GradientCardExample() {
  return (
    <div className="p-6 space-y-4">
      <GradientCard gradient="from-purple-500 to-blue-600">
        <h3 className="text-2xl font-bold mb-2">Стандарт</h3>
        <p className="text-white/90">Самый популярный тариф</p>
        <div className="mt-4 text-4xl font-bold">1,490 ₽</div>
      </GradientCard>

      <GradientCard gradient="from-teal-400 to-blue-500">
        <h3 className="text-2xl font-bold mb-2">Премиум</h3>
        <p className="text-white/90">Максимальный комфорт</p>
        <div className="mt-4 text-4xl font-bold">2,490 ₽</div>
      </GradientCard>
    </div>
  );
}
