import InputElements from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href = '/products';
    }

    return (
        <form onSubmit={handleLogin}>
            <InputElements
                name="email"
                type="email"
                placeholder="example@mail.com"
                label="Email"
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