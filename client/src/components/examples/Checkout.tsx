import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import Checkout from "../../pages/Checkout";

export default function CheckoutExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <Checkout />
    </QueryClientProvider>
  );
}
