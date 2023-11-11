import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import PasswordInput from "./input/PasswordInput";
import Input from "./input/Input";

function LoginForm() {
  return (
    <form
      className="flex flex-col justify-center items-center w-80 rounded-lg px-8 py-8 bg-gray-950"
      action=""
    >
      <Image
        src={"/logo.png"}
        alt="Logo"
        className="py-3"
        width={64}
        height={64}
      />

      <Input labelText="Email" type="email" placeholder="usuario@exemplo.com" />

      <PasswordInput type="password" placeholder="********" />

      <Link
        href="#"
        className="self-start py-3 text-xs text-gray-600 hover:underline dark:text-gray-400"
      >
        Esqueceu a senha?
      </Link>
      <Button title="Entrar" />
    </form>
  );
}

export default LoginForm;
