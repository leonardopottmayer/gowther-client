import { Button, Card, Form, Input } from "antd";
import styles from "./Register.module.css";
import pageStyles from "../../../styles/common/page.module.css";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import DefaultPage from "../../../components/common/pages/DefaultPage";
import useRegisterPage from "./useRegisterPage";

const RegisterPage = () => {
  const { onFinish, requestIsLoading } = useRegisterPage();

  return (
    <DefaultPage className={pageStyles.page}>
      <Card title="Register" size="small" className={styles.center}>
        <Form
          name="register_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="on"
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input disabled={requestIsLoading} prefix={<UserOutlined />} />
          </Form.Item>
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
          <Form.Item
            label="E-Mail"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input disabled={requestIsLoading} prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item>
            <Button
              loading={requestIsLoading}
              type="primary"
              htmlType="submit"
              block
            >
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </DefaultPage>
  );
};

export default RegisterPage;