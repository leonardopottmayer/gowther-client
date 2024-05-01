import { Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthenticationLayout from "../layout/authentication/AuthenticationLayout";
import DefaultLayout from "../layout/default/DefaultLayout";
import Home from "../pages/home/Home";
import FinanceWallet from "../pages/modules/finances/fnc001_wallet/FNC001_Wallet";
import FinanceTransaction from "../pages/modules/finances/fnc002_transaction/FNC002_Transaction";
import LoginPage from "../pages/authentication/login/Login";
import RegisterPage from "../pages/authentication/register/Register";

const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Routes>
        {isAuthenticated() && (
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            {/* Finaances */}
            <Route path="/finances">
              <Route path="/finances/wallet" element={<FinanceWallet />} />
              <Route
                path="/finances/transaction"
                element={<FinanceTransaction />}
              />
            </Route>
          </Route>
        )}
        <Route path="/auth" element={<AuthenticationLayout />}>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
