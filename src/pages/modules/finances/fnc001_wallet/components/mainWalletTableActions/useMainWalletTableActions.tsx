import { WalletService } from "../../../../../../services/modules/finances/WalletService";
import { useEventBus } from "../../../../../../context/EventBusContext";
import {
  REFETCH_MAIN_WALLET_TABLE_DATA,
  SEND_WALLET_TO_EDIT,
} from "../../FNC001.events";

interface IMainWalletTableActionsProps {
  item: { id: number };
}

const useMainWalletTableActions = ({ item }: IMainWalletTableActionsProps) => {
  const { dispatch } = useEventBus();

  const deleteWallet = async () => {
    const walletService = new WalletService();
    const response = await walletService.deleteWallet(item.id);

    if (response.success) {
      alert("Wallet successfully deleted.");
      dispatch(REFETCH_MAIN_WALLET_TABLE_DATA, null);
    } else {
      alert(response.errorMessage);
    }
  };

  const editWallet = () => {
    dispatch(SEND_WALLET_TO_EDIT, item);
  };

  return { editWallet, deleteWallet };
};

export default useMainWalletTableActions;
