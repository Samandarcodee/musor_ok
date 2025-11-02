import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import Onboarding from "@/components/Onboarding";
import NewHome from "@/pages/NewHome";
import NewTariffs from "@/pages/NewTariffs";
import NewProfile from "@/pages/NewProfile";
import Checkout from "@/pages/Checkout";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={NewHome} />
      <Route path="/tariffs" component={NewTariffs} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/profile" component={NewProfile} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    setShowOnboarding(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showOnboarding && <Onboarding onComplete={handleOnboardingComplete} />}
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
