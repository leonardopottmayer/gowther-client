import { Button, Checkbox, Col, Form, Input, InputNumber, Row } from "antd";
import useWalletForm from "./useWalletForm";

const { TextArea } = Input;

const WalletForm = () => {
  const { form, isLoading, formMode, submitForm, cancelFormOperation } = useWalletForm();

  return (
    <Form
      form={form}
      name={`wallet_form`}
      initialValues={{ remember: true }}
      autoComplete="on"
      layout="vertical"
      requiredMark={false}
    >
      <Row gutter={8}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <Input disabled={isLoading} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label="Balance"
            name="balance"
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <InputNumber disabled={isLoading} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "This field is required!" }]}
      >
        <TextArea disabled={isLoading} rows={3} />
      </Form.Item>
      <Row gutter={8}>
        <Form.Item
          initialValue={false}
          name="isPhysical"
          valuePropName="checked"
        >
          <Checkbox disabled={isLoading}>Is physical</Checkbox>
        </Form.Item>
        <Form.Item
          initialValue={false}
          name="isInvestment"
          valuePropName="checked"
        >
          <Checkbox disabled={isLoading}>Is investment</Checkbox>
        </Form.Item>
      </Row>
      <Button type="primary" onClick={submitForm}>
        {formMode}
      </Button>
      <Button type="default" onClick={cancelFormOperation}>
        Cancel
      </Button>
    </Form>
  );
};

export default WalletForm;
