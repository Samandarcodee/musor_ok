import Onboarding from '../Onboarding';

export default function OnboardingExample() {
  return (
    <Onboarding onComplete={() => console.log('Онбординг завершен')} />
  );
}
