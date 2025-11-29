import { createContext, use, useState, ReactNode } from "react";
import { Card } from "../services/CardApiService";
import { useFilters } from "./FilterContext";
import { CardApiService } from "../services/CardApiService";

interface NetworkContextValue {
  card: Card | null;
  loading: boolean;
  error: string | null;
  fetchCard: () => Promise<void>;
}

const NetworkContext = createContext<NetworkContextValue | undefined>(
  undefined,
);

export const NetworkProvider = ({ children }: { children: ReactNode }) => {
  const [card, setCard] = useState<Card | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { filters } = useFilters();

  const fetchCard = async () => {
    setCard(null);
    setLoading(true);
    setError(null);
    try {
      const fetchedCard =
        await CardApiService.getInstance().getRandomCommander(filters);
      setCard(fetchedCard);
    } catch (err) {
      setError(`Failed to fetch card: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NetworkContext value={{ card, loading, error, fetchCard }}>
      {children}
    </NetworkContext>
  );
};

export const useNetwork = () => {
  const context = use(NetworkContext);
  if (!context)
    throw new Error("useNetwork must be used within a NetworkProvider");
  return context;
};
