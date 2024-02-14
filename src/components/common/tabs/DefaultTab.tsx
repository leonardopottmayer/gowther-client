import styles from "./DefaultTab.module.css";

interface IDefaultTabCmpProps {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPage = (props: IDefaultTabCmpProps) => {
  return <div>{props.children}</div>;
};

export default DefaultPage;
