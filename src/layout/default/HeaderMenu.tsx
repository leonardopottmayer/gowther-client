import { Avatar, Typography, Dropdown, Layout, MenuProps, Space } from "antd";
import styles from "./HeaderMenu.module.css";
import system_logo from "../../assets/react.svg";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const { Header } = Layout;
const { Text } = Typography;

const HeaderMenu = () => {
  const { user, logout } = useAuth();

  const userActions: MenuProps["items"] = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link to="/profile">{user?.username}</Link>,
    },
    {
      key: "999",
      danger: true,
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: () => {
        logout();
      },
    },
  ];

  return (
    <Header className={styles.header__body}>
      <img
        className={styles.header__logo}
        src={system_logo}
        alt="Gowther Logo"
      />
      <Dropdown
        className={styles.header__pointer}
        menu={{ items: userActions }}
      >
        <Space>
          <Avatar size="default" icon={<UserOutlined />} />
          <Text className={styles.header__text}>{user?.username}</Text>
        </Space>
      </Dropdown>
    </Header>
  );
};

export default HeaderMenu;
