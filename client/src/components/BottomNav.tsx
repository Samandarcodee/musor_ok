import { Link, useLocation } from "wouter";
import { Home, Calendar, User, Settings } from "lucide-react";

const navItems = [
  { path: "/", label: "Главная", icon: Home },
  { path: "/tariffs", label: "Тарифы", icon: Calendar },
  { path: "/profile", label: "Профиль", icon: User },
  { path: "/admin", label: "Админ", icon: Settings }
];

export default function BottomNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-xl border-t border-border">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-4 gap-1 h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.path;
            
            return (
              <Link key={item.path} href={item.path}>
                <button
                  className={`flex flex-col items-center justify-center h-full gap-1 rounded-lg transition-all ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "scale-110" : ""}`} />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
