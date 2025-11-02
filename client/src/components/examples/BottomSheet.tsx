import BottomSheet from '../BottomSheet';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function BottomSheetExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6">
      <Button onClick={() => setIsOpen(true)}>
        Открыть Bottom Sheet
      </Button>

      <BottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Настройки"
      >
        <div className="space-y-4">
          <p>Это пример содержимого bottom sheet.</p>
          <p>Вы можете добавить любой контент сюда.</p>
          <Button onClick={() => setIsOpen(false)} className="w-full">
            Закрыть
          </Button>
        </div>
      </BottomSheet>
    </div>
  );
}
