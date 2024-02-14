import styles from "./DefaultPage.module.css";

interface IDefaultPageCmpProps {
  children?: React.ReactNode;
  className?: string;
  name?: string;
  description?: string;
  code?: string;
}

const DefaultPage = (props: IDefaultPageCmpProps) => {
  return (
    <div className={`${styles.page} ${props.className}`}>{props.children}</div>
  );
};

export default DefaultPage;
