import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout type="login" title="Login" smallText="Silahkan isi form dibawah">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
