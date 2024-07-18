const Button = (props) => {
  const { children, classname, onClick = () => {}, type = "button" } = props;

  return (
    <button
      className={`text-white font-bold py-2 px-4 ${classname} rounded`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;