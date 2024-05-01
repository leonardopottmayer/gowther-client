import { useEffect, useState } from "react";
import { useEventBus } from "../../../../../../context/EventBusContext";
import { REFETCH_MAIN_TRANSACTION_TABLE_DATA } from "../../FNC002.events";
import { TransactionService } from "../../../../../../services/modules/finances/TransactionService";
import { TransactionWithDescriptionDto } from "../../../../../../models/modules/financeTransaction/TransactionWithDescriptionDto";

const useMainTransactionTable = () => {
  const { subscribe, unsubscribe } = useEventBus();

  const [transactions, setTransactions] = useState<
    TransactionWithDescriptionDto[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTableItemColor = (transactionCategoryId: number): string => {
    if (transactionCategoryId == 1) {
      return "green";
    } else if (transactionCategoryId == 2) {
      return "red";
    } else if (transactionCategoryId == 3) {
      return "blue";
    } else {
      return "black";
    }
  };

  const addKeyToTransactions = (
    transactionsData: TransactionWithDescriptionDto[]
  ) =>
    transactionsData.map((transactions) => ({
      ...transactions,
      key: transactions.id,
    }));

  const fetchUserTransactions = async () => {
    setIsLoading(true);

    try {
      const transactionService = new TransactionService();
      const response =
        await transactionService.getAllUserTransactionsWithDescription();

      if (response.success) {
        const transactionsWithKey = addKeyToTransactions(
          response.result!.entities
        );
        setTransactions(transactionsWithKey);
      } else {
        alert(response.errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Refetch main transaction table data event configuration
  const handleRefetchTransactions = () => {
    fetchUserTransactions();
  };

  useEffect(() => {
    subscribe(REFETCH_MAIN_TRANSACTION_TABLE_DATA, handleRefetchTransactions);

    return () =>
      unsubscribe(
        REFETCH_MAIN_TRANSACTION_TABLE_DATA,
        handleRefetchTransactions
      );
  }, []);

  useEffect(() => {
    fetchUserTransactions();
  }, []);

  return { isLoading, transactions, fetchUserTransactions, getTableItemColor };
};

export default useMainTransactionTable;
