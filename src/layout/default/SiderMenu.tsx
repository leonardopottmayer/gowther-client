import { Layout, Menu, MenuProps } from "antd";
import { useState } from "react";
import styles from "./SiderMenu.module.css";
import { Link } from "react-router-dom";
import { BankFilled, CreditCardFilled, HomeFilled } from "@ant-design/icons";

const { Sider } = Layout;

const SiderMenu = () => {
  const [siderCollapsed, setSiderCollapsed] = useState<boolean>(true);

  const onCollapse = () => {
    setSiderCollapsed(!siderCollapsed);
  };

  const sidebarSubMenus: MenuProps["items"] = [
    {
      key: "item-home-page",
      label: <Link to="/">Home</Link>,
      icon: <HomeFilled />,
    },
    {
      key: "item-finances",
      label: <span>Finances</span>,
      icon: <BankFilled />,
      children: [
        {
          key: "finances-subitem-wallet",
          label: <Link to="/finances/wallet">FNC001 - Wallet</Link>,
          icon: <BankFilled />,
        },
        {
          key: "finances-subitem-transaction",
          label: <Link to="/finances/transaction">FNC002 - Transaction</Link>,
          icon: <CreditCardFilled />,
        },
      ],
    },
  ];

  return (
    <Sider
      theme="light"
      width={250}
      collapsible
      collapsed={siderCollapsed}
      onCollapse={onCollapse}
      className={styles.sider}
    >
      <div className={styles.sider__body}>
        <div className={styles.sider__content}>
          <Menu mode="inline" items={sidebarSubMenus} />
        </div>
      </div>
    </Sider>
  );
};

export default SiderMenu;
