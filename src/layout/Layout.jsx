import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

const AppLayout = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default AppLayout;
