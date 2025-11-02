import SubscriptionCard from '../SubscriptionCard';

export default function SubscriptionCardExample() {
  return (
    <div className="max-w-md p-6">
      <SubscriptionCard
        planName="Стандарт"
        status="active"
        nextPickupDate="15 ноября 2024, 10:00-12:00"
        address="ул. Ленина, д. 25, кв. 42, Санкт-Петербург"
        onManage={() => console.log('Управление подпиской')}
      />
    </div>
  );
}
