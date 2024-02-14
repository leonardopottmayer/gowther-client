import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { EventBusProvider } from "./EventBusContext";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="app__provider" className="app__provider">
      <BrowserRouter>
        <EventBusProvider>
          <AuthProvider>{children}</AuthProvider>
        </EventBusProvider>
      </BrowserRouter>
    </div>
  );
};

export default AppProvider;
