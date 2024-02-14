import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Formatter } from "../../../../../../utils/Formatter";
import useMainWalletTable from "./useMainWalletTable";
import { Table } from "antd";
import { WalletDto } from "../../../../../../models/modules/financeWallet/WalletDto";
import MainWalletTableActions from "../mainWalletTableActions/MainWalletTableActions";

const MainWalletTable = () => {
  const { isLoading, wallets } = useMainWalletTable();

  return (
    <Table loading={isLoading} dataSource={wallets} size="small">
      <Table.Column title="Id" dataIndex="id" />
      <Table.Column title="Name" dataIndex="name" />
      <Table.Column title="Description" dataIndex="description" />
      <Table.Column
        title="Balance"
        dataIndex="balance"
        align="right"
        render={(value) => {
          return (
            <span style={value >= 0 ? { color: "green" } : { color: "red" }}>
              {new Formatter().formatMoney(value)}
            </span>
          );
        }}
      />
      <Table.Column
        title="Is physical"
        dataIndex="isPhysical"
        render={(value) => {
          return value == true ? (
            <CheckOutlined style={{ color: "green" }} />
          ) : (
            <CloseOutlined style={{ color: "red" }} />
          );
        }}
      />
      <Table.Column
        title="Is investment"
        dataIndex="isInvestment"
        render={(value) => {
          return value == true ? (
            <CheckOutlined style={{ color: "green" }} />
          ) : (
            <CloseOutlined style={{ color: "red" }} />
          );
        }}
      />
      <Table.Column
        title="Actions"
        render={(_value, item: WalletDto, _index) => {
          return <MainWalletTableActions item={item} />;
        }}
      />
    </Table>
  );
};

export default MainWalletTable;
