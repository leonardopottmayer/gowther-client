import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { UserDto } from "../models/modules/user/UserDto";
import { extractTokenInformation } from "../utils/extractTokenInformation";
import { clearApplicationLocalStorage } from "../utils/clearApplicationLocalStorage";

type IAuthContext = {
  token: string | null;
  user: UserDto | null;
  allowedFunctions: string[];
  isAuthenticated: () => boolean;
  authenticate: (token: string, user: UserDto) => void;
  logout: () => void;
};

const initialValue: IAuthContext = {
  token: null,
  user: null,
  allowedFunctions: [],
  isAuthenticated: () => false,
  authenticate: (token: string, user: UserDto) => {},
  logout: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(initialValue.token);
  const [user, setUser] = useState<UserDto | null>(initialValue.user);
  const [allowedFunctions, setAllowedFunctions] = useState<string[]>([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("@gowther::auth::token");

    if (storedToken) {
      setToken(storedToken);

      const tokenInfo = extractTokenInformation(storedToken);
      if (tokenInfo != null) {
        setUser(tokenInfo.user);
      }
    } else {
      clearApplicationLocalStorage();
      navigate("/auth/login");
    }
  }, []);

  const authenticate = (token: string, user: UserDto) => {
    setToken(token);
    localStorage.setItem("@gowther::auth::token", token);

    setUser(user);
  };

  const logout = () => {
    clearApplicationLocalStorage();

    setToken(null);
    setUser(null);

    navigate("/auth/login");
  };

  const isAuthenticated = () => {
    return !!token;
  };

  const authContext: IAuthContext = {
    token,
    user,
    allowedFunctions,
    isAuthenticated,
    authenticate,
    logout,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
