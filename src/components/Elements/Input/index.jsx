import Label from "./Label";
import Input from "./Input";

const InputElements = (props) => {
  const { name, type, placeholder, label } = props;
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputElements;
