import { Layout } from "antd";
import styles from "./DefaultLayout.module.css";
import HeaderMenu from "./HeaderMenu";
import { Outlet } from "react-router-dom";
import SiderMenu from "./SiderMenu";

const { Content, Footer } = Layout;

const DefaultLayout = () => {
  return (
    <Layout className={styles.layout}>
      <HeaderMenu />
      <Layout hasSider>
        <SiderMenu />
        <Layout>
          <Content className={styles.layout__content}>
            <Outlet />
          </Content>
          <Footer className={styles.footer}>
            Gowther - ©{new Date().getFullYear()} Exodyas
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
