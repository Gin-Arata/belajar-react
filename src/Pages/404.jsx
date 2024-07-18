import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-y-5">
      <h1 className="text-2xl font-mono font-bold">Whoopss!!</h1>
      <hr className="border w-3/4 border-black" />
      <p className="text-xl font-mono">Sorry for unexpected error</p>
      <p className="font-mono">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
