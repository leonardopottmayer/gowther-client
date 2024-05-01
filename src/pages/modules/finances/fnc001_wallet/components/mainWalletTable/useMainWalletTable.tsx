import { WalletDto } from "../../../../../../models/modules/financeWallet/WalletDto";
import { WalletService } from "../../../../../../services/modules/finances/WalletService";
import { useEffect, useState } from "react";
import { useEventBus } from "../../../../../../context/EventBusContext";
import { REFETCH_MAIN_WALLET_TABLE_DATA } from "../../FNC001.events";

const useMainWalletTable = () => {
  const { subscribe, unsubscribe } = useEventBus();

  const [wallets, setWallets] = useState<WalletDto[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addKeyToWallets = (walletsData: WalletDto[]) =>
    walletsData.map((wallet) => ({ ...wallet, key: wallet.id }));

  const fetchUserWallets = async () => {
    setIsLoading(true);

    try {
      const walletService = new WalletService();
      const response = await walletService.getUserWallets();

      if (response.success) {
        const walletsWithKey = addKeyToWallets(response.result!.entities);
        setWallets(walletsWithKey);
      } else {
        alert(response.errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Refetch main wallet table data event configuration
  const handleRefetchWallets = () => {
    fetchUserWallets();
  };

  useEffect(() => {
    subscribe(REFETCH_MAIN_WALLET_TABLE_DATA, handleRefetchWallets);

    return () =>
      unsubscribe(REFETCH_MAIN_WALLET_TABLE_DATA, handleRefetchWallets);
  }, []);

  useEffect(() => {
    fetchUserWallets();
  }, []);

  return { isLoading, wallets, fetchUserWallets };
};

export default useMainWalletTable;
