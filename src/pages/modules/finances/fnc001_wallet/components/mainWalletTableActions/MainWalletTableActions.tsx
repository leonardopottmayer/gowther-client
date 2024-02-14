import { Button, Popconfirm, Space, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { WalletDto } from "../../../../../../models/modules/financeWallet/WalletDto";
import useMainWalletTableActions from "./useMainWalletTableActions";

export interface IMainWalletTableActionsCmpProps {
  item: WalletDto;
}

const MainWalletTableActions = (props: IMainWalletTableActionsCmpProps) => {
  const { editWallet, deleteWallet } = useMainWalletTableActions(props);

  return (
    <Space direction="horizontal" size="small">
      <Tooltip title="Edit" placement="left">
        <Button size="small" onClick={editWallet} icon={<EditOutlined />} />
      </Tooltip>
      <Popconfirm
        title="Delete wallet"
        description="Are you sure to delete this wallet?"
        onConfirm={deleteWallet}
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

export default MainWalletTableActions;
