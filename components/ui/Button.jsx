import Link from "next/link";

const Button = ({ href = "/contact-us", label, className = "" }) => {
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};

export default Button;
