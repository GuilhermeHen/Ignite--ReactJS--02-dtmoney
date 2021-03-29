import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext<Transaction[]>([]);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactios] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then(response => setTransactios(response.data.transactions));
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      { children }
    </TransactionContext.Provider>
  );
}