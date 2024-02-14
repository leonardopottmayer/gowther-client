import MainTransactionTable from "./components/mainTransactionTable/MainTransactionTable";
import TransactionForm from "./components/transactionForm/TransactionForm";

const FNC002_Transaction = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <TransactionForm />
      <br />
      <MainTransactionTable />
    </div>
  );
};

export default FNC002_Transaction;
