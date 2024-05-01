import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { AuthenticationService } from "../../../services/AuthenticationService";
import { RegisterRequestDto } from "@/models/modules/authentication/RegisterRequestDto";

const useRegisterPage = () => {
  const { authenticate } = useAuth();
  const navigate = useNavigate();

  const [requestIsLoading, setRequestIsLoading] = useState<boolean>(false);

  const onFinish = async (values: RegisterRequestDto) => {
    setRequestIsLoading(true);

    const authenticationService = new AuthenticationService();

    try {
      const registerResult = await authenticationService.register(values);

      if (registerResult.result && registerResult.result > 0) {
        message.success("Successfully registered.", 5);
        navigate("/auth/login");
      }
    } catch (error: any) {
      message.error(error.message, 5);
    } finally {
      setRequestIsLoading(false);
    }
  };
  return {
    requestIsLoading,
    onFinish,
  };
};

export default useRegisterPage;