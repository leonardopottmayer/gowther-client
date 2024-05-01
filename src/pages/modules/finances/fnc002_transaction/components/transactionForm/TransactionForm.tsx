import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import useTransactionForm from "./useTransactionForm";

const TransactionForm = () => {
  const {
    form,
    isLoading,
    formMode,
    transactionCategories,
    transactionSubcategories,
    wallets,
    submitForm,
    cancelFormOperation,
    handleSelectedTransactionCategoryChanged,
  } = useTransactionForm();

  return (
    <Form
      form={form}
      name={`transaction_form`}
      initialValues={{ remember: true }}
      autoComplete="on"
      layout="vertical"
      requiredMark={false}
    >
      <Row gutter={8}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <Input disabled={isLoading} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
          <Form.Item
            label="Value"
            name="value"
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <InputNumber disabled={isLoading} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
          <Form.Item
            label="Transaction date"
            name="transactionDate"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <DatePicker format={"DD/MM/YYYY"} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <Form.Item label="Origin wallet" name="originWalletId">
            <Select
              disabled={isLoading}
              options={wallets.map((item) => {
                return { value: item.id, label: item.name };
              })}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <Form.Item label="Destination wallet" name="destinationWalletId">
            <Select
              disabled={isLoading}
              style={{ width: "100%" }}
              options={wallets.map((item) => {
                return { value: item.id, label: item.name };
              })}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <Form.Item
            label="Transaction category"
            name="transactionCategoryId"
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <Select
              disabled={isLoading}
              style={{ width: "100%" }}
              onChange={handleSelectedTransactionCategoryChanged}
              options={transactionCategories.map((item) => {
                return { value: item.id, label: item.name };
              })}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <Form.Item
            label="Transaction subcategory"
            name="transactionSubcategoryId"
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <Select
              disabled={isLoading}
              style={{ width: "100%" }}
              options={transactionSubcategories.map((item) => {
                return { value: item.id, label: item.name };
              })}
            />
          </Form.Item>
        </Col>
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

export default TransactionForm;
