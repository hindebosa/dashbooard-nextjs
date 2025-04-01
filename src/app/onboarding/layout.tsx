import { Container } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Layout;
