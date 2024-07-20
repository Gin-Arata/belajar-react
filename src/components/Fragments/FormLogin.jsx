import InputElements from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href = '/products';
    }

    // Penggunaan useRef untuk melakukan focus terhadap input
    const emailRef = useRef();

    useEffect(() => {
        emailRef.current.focus();
    });

    return (
        <form onSubmit={handleLogin}>
            <InputElements
                name="email"
                type="email"
                placeholder="example@mail.com"
                label="Email"
                ref={emailRef}
            />
            <InputElements
                name="password"
                type="password"
                placeholder="*********"
                label="Password"
            />
          <Button classname="w-full text-center bg-blue-500 hover:bg-blue-700" type="submit">Login</Button>
        </form>
    );
}

export default FormLogin;