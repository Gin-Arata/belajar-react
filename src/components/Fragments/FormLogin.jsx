import InputElements from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";
import { login } from "../../services/auth.service";
import { useState } from "react";

const FormLogin = () => {
  // Penggunaan useState untuk menyimpan response dari API
  const [loginFailed, setLoginFailed] = useState("");

  // Penggunaan API Post untuk melakukan login
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // window.location.href = '/products';
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res.token);
        window.location.href = '/products';
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  // Penggunaan useRef untuk melakukan focus terhadap input
  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  });

  return (
    <form onSubmit={handleLogin}>
      {loginFailed && <p className="text-center text-red-500">{loginFailed}</p>}
      <InputElements
        name="username"
        type="text"
        placeholder="John Doe"
        label="Username"
        ref={usernameRef}
      />
      <InputElements
        name="password"
        type="password"
        placeholder="*********"
        label="Password"
      />
      <Button
        classname="w-full text-center bg-blue-500 hover:bg-blue-700"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
