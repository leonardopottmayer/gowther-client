import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { LoginRequestDto } from "../../../models/modules/authentication/LoginRequestDto";
import { AuthenticationService } from "../../../services/AuthenticationService";
import { extractTokenInformation } from "../../../utils/extractTokenInformation";

const useLoginPage = () => {
  const { authenticate } = useAuth();
  const navigate = useNavigate();

  const [requestIsLoading, setRequestIsLoading] = useState<boolean>(false);

  const onFinish = async (values: LoginRequestDto) => {
    setRequestIsLoading(true);

    const authenticationService = new AuthenticationService();

    try {
      const loginResult = await authenticationService.login(values);

      if (loginResult.result?.token) {
        const tokenInfo = extractTokenInformation(loginResult.result.token);

        if (tokenInfo != null) {
          authenticate(loginResult.result.token, tokenInfo.user);

          navigate("/");
        }
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

export default useLoginPage;
