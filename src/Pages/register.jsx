import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout type="register" title="Register" smallText="Silahkan isi form dibawah">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
