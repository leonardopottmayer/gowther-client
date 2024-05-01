import React from "react";
import { useAuth } from "../../../context/AuthContext";

interface IDefaultRouteCmpProps {
  functionCode: string;
  element: React.ReactNode;
}

const DefaultRoute = (props: IDefaultRouteCmpProps) => {
  const { allowedFunctions } = useAuth();

  const hasAccessToFunction = () => {
    return allowedFunctions.includes(props.functionCode);
  };

  return props.element;

  // return hasAccessToFunction() ? (
  //   props.element
  // ) : (
  //   <h1>You do not have permission to access this route 1</h1>
  // );
};

export default DefaultRoute;
