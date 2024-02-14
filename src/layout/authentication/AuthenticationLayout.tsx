import { Layout } from "antd";
import styles from "./AuthenticationLayout.module.css";
import { Outlet } from "react-router-dom";

const { Content, Footer } = Layout;

const AuthenticationLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Layout>
        <Content>
          <Outlet />
        </Content>
        <Footer className={styles.footer}>
          Gowther - ©{new Date().getFullYear()} Exodyas
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AuthenticationLayout;
