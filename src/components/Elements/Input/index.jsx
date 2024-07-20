import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

// Penggunaan forwardRef untuk mengirimkan ref menuju suatu child component
const InputElements = forwardRef((props, ref) => {
  const { name, type, placeholder, label } = props;
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputElements;
