import { Button, Popconfirm, Space, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { TransactionDto } from "../../../../../../models/modules/financeTransaction/TransactionDto";
import useMainTransactionTableActions from "./useMainTransactionTableActions";

export interface IMainTransactionTableActionsCmpProps {
  item: TransactionDto;
}

const MainTransactionTableActions = (
  props: IMainTransactionTableActionsCmpProps
) => {
  const { editTransaction, deleteTransaction } =
    useMainTransactionTableActions(props);

  return (
    <Space direction="horizontal" size="small">
      {/* <Tooltip title="Edit" placement="left">
        <Button
          size="small"
          onClick={editTransaction}
          icon={<EditOutlined />}
        />
      </Tooltip> */}
      <Popconfirm
        title="Delete transaction"
        description="Are you sure to delete this transaction?"
        onConfirm={deleteTransaction}
        okText="Yes"
        cancelText="No"
      >
        <Tooltip title="Delete" placement="right">
          <Button
            size="small"
            icon={<DeleteOutlined style={{ color: "red" }} />}
          />
        </Tooltip>
      </Popconfirm>
    </Space>
  );
};

export default MainTransactionTableActions;
