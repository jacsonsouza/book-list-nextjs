interface InputProps {
  labelText: string;
  type: string;
  placeholder: string;
}

function Input({ labelText, type, placeholder }: InputProps) {
  return (
    <div className="py-3">
      <label
        about={type}
        className="block text-sm text-gray-500 dark:text-gray-300"
      >
        {labelText}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
      />
    </div>
  );
}

export default Input;
