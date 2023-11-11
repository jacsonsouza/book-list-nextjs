interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <button className="mt-3 px-6 py-3 font-medium tracking-wide text-gray-950 capitalize transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">
      {title}
    </button>
  );
}

export default Button;
