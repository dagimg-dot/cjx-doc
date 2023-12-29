const Button = ({ style, onClick, disabled, children }) => {
  return (
    <button
      className={
        "bg-amber-600 hover:bg-amber-800 py-1 px-6 text-white rounded-md cursor-pointer disabled:bg-slate-500 disabled:cursor-not-allowed " +
        style
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
