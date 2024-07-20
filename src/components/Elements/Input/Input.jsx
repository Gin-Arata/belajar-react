import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm rounded border w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
      ref={ref}
    />
  );
});

export default Input;
