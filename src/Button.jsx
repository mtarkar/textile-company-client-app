// Re-usuable Button in the entire App.

import "./Button.css";

const Button = ({ label, variant = "primary", onClick, type = "button" }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
