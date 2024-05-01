import { TransactionService } from "../../../../../../services/modules/finances/TransactionService";
import { useEventBus } from "../../../../../../context/EventBusContext";
import {
  REFETCH_MAIN_TRANSACTION_TABLE_DATA,
  SEND_TRANSACTION_TO_EDIT,
} from "../../FNC002.events";
import { TransactionDto } from "../../../../../../models/modules/financeTransaction/TransactionDto";

interface IMainTransactionTableActionsProps {
  item: TransactionDto;
}

const useMainTransactionTableActions = ({
  item,
}: IMainTransactionTableActionsProps) => {
  const { dispatch } = useEventBus();

  const deleteTransaction = async () => {
    const transactionService = new TransactionService();
    const response = await transactionService.deleteTransaction(item.id);
    if (response.success) {
      alert("Transaction successfully deleted.");
      dispatch(REFETCH_MAIN_TRANSACTION_TABLE_DATA, null);
    } else {
      alert(response.errorMessage);
    }
  };

  const editTransaction = () => {
    dispatch(SEND_TRANSACTION_TO_EDIT, item);
  };

  return { editTransaction, deleteTransaction };
};

export default useMainTransactionTableActions;
