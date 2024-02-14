import { Button, Card, Form, Input } from "antd";
import pageStyles from "../../../styles/common/page.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import useLoginPage from "./useLoginPage";
import DefaultPage from "../../../components/common/pages/DefaultPage";

const LoginPage = () => {
  const { onFinish, requestIsLoading } = useLoginPage();

  return (
    <DefaultPage className={pageStyles.page}>
      <Card title="Login" size="small" /*className={styles.center}*/>
        <Form
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="on"
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input disabled={requestIsLoading} prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              disabled={requestIsLoading}
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button
              loading={requestIsLoading}
              type="primary"
              htmlType="submit"
              block
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </DefaultPage>
  );
};

export default LoginPage;
