import { Form } from "antd";
import { useEffect, useState } from "react";
import {
  EventBusEventHandler,
  useEventBus,
} from "../../../../../../context/EventBusContext";
import {
  REFETCH_MAIN_TRANSACTION_TABLE_DATA,
  SEND_TRANSACTION_TO_EDIT,
} from "../../FNC002.events";
import { TransactionService } from "../../../../../../services/modules/finances/TransactionService";
import { CreateTransactionDto } from "../../../../../../models/modules/financeTransaction/CreateTransactionDto";
import { TransactionDto } from "../../../../../../models/modules/financeTransaction/TransactionDto";
import { TransactionCategoryDto } from "../../../../../../models/modules/financeTransactionCategory/TransactionCategoryDto";
import { TransactionSubcategoryDto } from "../../../../../../models/modules/financeTransactionSubcategory/TransactionSubcategoryDto";
import { TransactionCategoryService } from "../../../../../../services/modules/finances/TransactionCategoryService";
import { TransactionSubcategoryService } from "../../../../../../services/modules/finances/TransactionSubcategoryService";
import { WalletDto } from "../../../../../../models/modules/financeWallet/WalletDto";
import { WalletService } from "../../../../../../services/modules/finances/WalletService";
import { UpdateTransactionDto } from "../../../../../../models/modules/financeTransaction/UpdateTransactionDto";
import moment from "moment";

const useTransactionForm = () => {
  // --------------------------------------------------
  // INITIAL CONFIGURATIONS
  // --------------------------------------------------

  const { dispatch, subscribe, unsubscribe } = useEventBus();

  const [form] = Form.useForm();

  // --------------------------------------------------
  // STATES
  // --------------------------------------------------

  // Form state
  const [isLoading, setIsLoading] = useState(false);
  const [formMode, setFormMode] = useState<"Create" | "Update">("Create");
  const [transactionToEditId, setTransactionToEditId] = useState<number>(0);
  const [transactionCategories, setTransactionCategories] = useState<
    TransactionCategoryDto[]
  >([]);
  const [transactionSubcategories, setTransactionSubcategories] = useState<
    TransactionSubcategoryDto[]
  >([]);
  const [wallets, setWallets] = useState<WalletDto[]>([]);

  // --------------------------------------------------
  // DATA FETCHING
  // --------------------------------------------------

  const fetchUserWallets = async () => {
    const walletService = new WalletService();

    const response = await walletService.getUserWallets();

    if (response.success) {
      setWallets(response.result?.entities ?? []);
    } else {
      alert(response.errorMessage);
    }
  };

  const fetchTransactionCategories = async () => {
    const transactionCategoryService = new TransactionCategoryService();

    const response =
      await transactionCategoryService.getAllFinanceTransactionCategories();

    if (response.success) {
      setTransactionCategories(response.result?.entities ?? []);
    } else {
      alert(response.errorMessage);
    }
  };

  const fetchTransactionSubcategories = async (
    transactionCategoryId: number
  ) => {
    if (transactionCategoryId > 0) {
      const transactionSubcategoryService = new TransactionSubcategoryService();

      const response =
        await transactionSubcategoryService.getAllFinanceTransactionSubcategoriesByTransactionCategoryId(
          transactionCategoryId
        );

      if (response.success) {
        setTransactionSubcategories(response.result?.entities ?? []);
      } else {
        alert(response.errorMessage);
      }
    } else {
      setTransactionSubcategories([]);
    }
  };

  // --------------------------------------------------
  // FORM
  // --------------------------------------------------

  const submitForm = async () => {
    setIsLoading(true);

    try {
      form.validateFields();

      const transactionService = new TransactionService();

      if (formMode == "Create") {
        const requestData = form.getFieldsValue() as CreateTransactionDto;
        console.log(requestData);
        const response = await transactionService.createTransaction(
          requestData
        );

        if (response.success) {
          alert("Transaction was successfully created.");
          dispatch(REFETCH_MAIN_TRANSACTION_TABLE_DATA, null);
        } else {
          alert(response.errorMessage);
        }
      } else {
        const requestData = form.getFieldsValue() as UpdateTransactionDto;
        const response = await transactionService.updateTransaction(
          transactionToEditId,
          requestData
        );
        if (response.success) {
          alert("Transaction was successfully updated.");
          dispatch(REFETCH_MAIN_TRANSACTION_TABLE_DATA, null);
          setTransactionToEdit(0);
          setFormMode("Create");
          form.resetFields();
        } else {
          alert(response.errorMessage);
        }
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectedTransactionCategoryChanged = async (
    selectedTransactionCategoryId: number
  ) => {
    await fetchTransactionSubcategories(selectedTransactionCategoryId);
  };

  const setTransactionToEdit: EventBusEventHandler = (payload) => {
    const { transactionDate, ...otherFields } = payload;
    const { transactionCategoryId } = otherFields;

    fetchTransactionSubcategories(transactionCategoryId);

    const formattedTransactionDate = moment(transactionDate);

    form.setFieldsValue({
      ...otherFields,
      transactionDate: formattedTransactionDate,
    });

    setTransactionToEditId((payload as TransactionDto).id);
    setFormMode("Update");
  };

  const cancelFormOperation = () => {
    form.resetFields();
    setFormMode("Create");
    setTransactionToEditId(0);
  };

  // --------------------------------------------------
  // PAGE LOAD
  // --------------------------------------------------

  useEffect(() => {
    fetchTransactionCategories();
    fetchUserWallets();
  }, []);

  useEffect(() => {
    subscribe(SEND_TRANSACTION_TO_EDIT, setTransactionToEdit);

    return () => unsubscribe(SEND_TRANSACTION_TO_EDIT, setTransactionToEdit);
  }, []);

  return {
    form,
    isLoading,
    formMode,
    transactionCategories,
    transactionSubcategories,
    wallets,
    submitForm,
    cancelFormOperation,
    handleSelectedTransactionCategoryChanged,
  };
};

export default useTransactionForm;
