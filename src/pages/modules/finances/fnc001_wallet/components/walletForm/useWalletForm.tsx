import { CreateWalletDto } from "../../../../../../models/modules/financeWallet/CreateWalletDto";
import { WalletService } from "../../../../../../services/modules/finances/WalletService";
import { Form } from "antd";
import { useEffect, useState } from "react";
import {
  EventBusEventHandler,
  useEventBus,
} from "../../../../../../context/EventBusContext";
import {
  REFETCH_MAIN_WALLET_TABLE_DATA,
  SEND_WALLET_TO_EDIT,
} from "../../FNC001.events";
import { WalletDto } from "@/models/modules/financeWallet/WalletDto";
import { UpdateWalletDto } from "@/models/modules/financeWallet/UpdateWalletDto";

const useWalletForm = () => {
  // Form state
  const [isLoading, setIsLoading] = useState(false);
  const [formMode, setFormMode] = useState<"Create" | "Update">("Create");
  const [walletToEditId, setWalletToEditId] = useState<number>(0);

  // Event Bus
  const { dispatch, subscribe, unsubscribe } = useEventBus();

  // Form
  const [form] = Form.useForm();

  const submitForm = async () => {
    setIsLoading(true);

    try {
      form.validateFields();

      const walletService = new WalletService();

      if (formMode == "Create") {
        const requestData = form.getFieldsValue() as CreateWalletDto;
        const response = await walletService.createWallet(requestData);

        if (response.success) {
          alert("Wallet was successfully created.");
          dispatch(REFETCH_MAIN_WALLET_TABLE_DATA, null);
        } else {
          alert(response.errorMessage);
        }
      } else {
        const requestData = form.getFieldsValue() as UpdateWalletDto;
        const response = await walletService.updateWallet(
          walletToEditId,
          requestData
        );

        if (response.success) {
          alert("Wallet was successfully updated.");
          dispatch(REFETCH_MAIN_WALLET_TABLE_DATA, null);

          setWalletToEdit(0);
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

  // Send wallet to edit event configuration
  const setWalletToEdit: EventBusEventHandler = (payload) => {
    form.setFieldsValue(payload);
    setWalletToEditId((payload as WalletDto).id);
    setFormMode("Update");
  };

  const cancelFormOperation = () => {
    form.resetFields();
    setFormMode("Create");
    setWalletToEditId(0);
  };

  useEffect(() => {
    subscribe(SEND_WALLET_TO_EDIT, setWalletToEdit);

    return () => unsubscribe(SEND_WALLET_TO_EDIT, setWalletToEdit);
  }, []);

  return {
    form,
    isLoading,
    formMode,
    submitForm,
    cancelFormOperation,
  };
};

export default useWalletForm;
