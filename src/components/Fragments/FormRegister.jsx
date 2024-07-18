import InputElements from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
    return (
        <form action="">
            <InputElements
                name="username"
                type="text"
                placeholder="John Doe"
                label="Username"
            />
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
            <InputElements
                name="password_confirmation"
                type="password"
                placeholder="*********"
                label="Konfirmasi Password"
            />
          <Button classname="w-full text-center bg-blue-500 hover:bg-blue-700">Register</Button>
        </form>
    );
}

export default FormRegister;