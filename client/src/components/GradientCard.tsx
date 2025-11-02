import { ReactNode } from "react";

interface GradientCardProps {
  children: ReactNode;
  gradient?: string;
  className?: string;
  onClick?: () => void;
}

export default function GradientCard({ 
  children, 
  gradient = "from-purple-500 to-blue-600",
  className = "",
  onClick
}: GradientCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-3xl p-6 bg-gradient-to-br ${gradient} text-white shadow-xl ${
        onClick ? "cursor-pointer active:scale-95 transition-transform" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
