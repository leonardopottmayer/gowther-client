import { Formatter } from "../../../../../../utils/Formatter";
import { Table } from "antd";
import useMainTransactionTable from "./useMainTransactionTable";
import MainTransactionTableActions from "../mainTransactionTableActions/MainTransactionTableActions";
import { TransactionDto } from "../../../../../../models/modules/financeTransaction/TransactionDto";
import { TransactionWithDescriptionDto } from "../../../../../../models/modules/financeTransaction/TransactionWithDescriptionDto";

const MainTransactionTable = () => {
  const { isLoading, transactions, getTableItemColor } =
    useMainTransactionTable();

  return (
    <Table loading={isLoading} dataSource={transactions} size="small">
      <Table.Column title="Id" dataIndex="id" />
      <Table.Column title="Description" dataIndex="description" />
      <Table.Column title="Origin wallet" dataIndex="originWalletName" />
      <Table.Column
        title="Destination wallet"
        dataIndex="destinationWalletName"
      />
      <Table.Column
        title="Category"
        dataIndex="transactionCategoryName"
        render={(value, record: TransactionWithDescriptionDto) => {
          return (
            <span
              style={{ color: getTableItemColor(record.transactionCategoryId) }}
            >
              {value}
            </span>
          );
        }}
      />
      <Table.Column
        title="Subcategory"
        dataIndex="transactionSubcategoryName"
        render={(value, record: TransactionWithDescriptionDto) => {
          return (
            <span
              style={{ color: getTableItemColor(record.transactionCategoryId) }}
            >
              {value}
            </span>
          );
        }}
      />
      <Table.Column
        title="Value"
        dataIndex="value"
        align="right"
        render={(value, record: TransactionWithDescriptionDto) => {
          return (
            <span
              style={{ color: getTableItemColor(record.transactionCategoryId) }}
            >
              {new Formatter().formatMoney(value)}
            </span>
          );
        }}
      />
      <Table.Column
        title="Date"
        dataIndex="transactionDate"
        render={(value) => new Date(value).toLocaleDateString()}
      />
      <Table.Column
        title="Created at"
        dataIndex="createdAt"
        render={(value) => new Date(value).toLocaleDateString()}
      />
      <Table.Column
        title="Actions"
        render={(_value, item: TransactionDto, _index) => {
          return <MainTransactionTableActions item={item} />;
        }}
      />
    </Table>
  );
};

export default MainTransactionTable;
