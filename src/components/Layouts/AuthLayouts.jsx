import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { title, smallText, children, type } = props;

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="rounded w-full max-w-sm border shadow-xl px-4 py-10">
        <h1 className="text-blue-500 font-bold text-2xl text-center">
          {title}
        </h1>
        <p className="text-slate-600 text-sm mt-1 mb-2 text-center">
          {smallText}
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  console.log(type);
  if (type === "login") {
    return (
      <p className="mt-5 text-center">
        Tidak punya akun?{" "}
        <Link to={"/register"} className="text-blue-600 hover:underline">
          Daftar Disini
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-5 text-center">
        Sudah punya akun?{" "}
        <Link to={"/login"} className="text-blue-600 hover:underline">
          Login Disini
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
