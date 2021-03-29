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

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;


interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContexData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}


export const TransactionContext = createContext<TransactionsContexData>({} as TransactionsContexData);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  return (
    <TransactionContext.Provider value={ { transactions, createTransaction } }>
      { children }
    </TransactionContext.Provider>
  );
}