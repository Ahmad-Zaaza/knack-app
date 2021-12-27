import Image from "next/image";
import logo from "@/assets/logo.png";
import avatar from "@/assets/avatar.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b py-2  4xl:py-4 px-4 ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <a className="max-w-[200px]">
            <Image src={logo} layout="intrinsic" alt="Knack logo" />
          </a>
        </Link>

        <div className="flex items-center gap-4 ">
          <Link href="/">
            <a className="text-muted hover:text-primary">Handbook</a>
          </Link>
          <div className="w-12 ">
            <Image src={avatar} layout="intrinsic" alt="Avatar" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
