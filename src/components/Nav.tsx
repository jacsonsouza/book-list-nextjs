import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <nav className="flex flex-row justify-between w-full px-6 py-4 bg-gray-950">
      <ul className="flex flex-row items-center justify-between">
        <li className="px-5">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={64} height={64} alt="Logo" />
          </Link>
        </li>
        <li className="px-5 text-lg font-semibold">
          <Link href={"/login"}>Entrar</Link>
        </li>
        <li className="px-5 text-lg font-semibold">
          <Link href={"/sign-up"}>Cadastro</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
