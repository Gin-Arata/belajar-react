const Label = (props) => {
  const { children, htmlfor } = props;
  return (
    <label htmlFor={htmlfor} className="text-slate-700 font-bold mb-2">
      {children}
    </label>
  );
};

export default Label;
