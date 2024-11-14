
interface ButtonProps {
    text: string;
    className: string;
  }  
  

const Button = ({text, className}: ButtonProps) => {
    return <button type="button" className={`btn ${className}`}>{text}</button>;

    }
    export default Button;
