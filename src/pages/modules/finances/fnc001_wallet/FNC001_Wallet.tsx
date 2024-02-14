import DefaultPage from "../../../../components/common/pages/DefaultPage";
import MainWalletTable from "./components/mainWalletTable/MainWalletTable";
import WalletForm from "./components/walletForm/WalletForm";

const FNC001_Wallet = () => {
  return (
    <DefaultPage>
      <h1>Finance Wallets</h1>
      <WalletForm />
      <br />
      <MainWalletTable />
    </DefaultPage>
  );
};

export default FNC001_Wallet;
