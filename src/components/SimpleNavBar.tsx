import Image from "next/image";
import Link from "next/link";

function SimpleNavBar() {
  return (
    <nav className="flex justify-center items-center w-full py-4 bg-gray-950">
      <Link href={"/"}>
        <Image src={"/logo.png"} width={64} height={64} alt="Logo" />
      </Link>
    </nav>
  );
}

export default SimpleNavBar;
