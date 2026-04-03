export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  // Base styles shared by all buttons
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center";
  
  // Variant styles
  const variants = {
    primary: "bg-primary text-white hover:bg-dark shadow-lg shadow-green-100",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    dark: "bg-dark text-white hover:bg-primary",
    white: "bg-white text-primary hover:bg-dark hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}