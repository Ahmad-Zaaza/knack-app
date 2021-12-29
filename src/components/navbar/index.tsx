import Image from "next/image";
import logo from "@/assets/logo.png";
import avatar from "@/assets/avatar.png";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { useApplicationState } from "@/contexts/ApplicationContext";
const Navbar = () => {
  const [_, setState] = useApplicationState();
  const handleOpenSidenav = () => {
    setState((prev) => ({ ...prev, sideNavOpen: !prev.sideNavOpen }));
  };
  return (
    <header className="border-b py-2  4xl:py-4 px-4 ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <a className="max-w-[200px]">
            <Image src={logo} layout="intrinsic" alt="Knack logo" />
          </a>
        </Link>

        <div className="items-center gap-4 hidden md:flex ">
          <Link href="/">
            <a className="text-muted hover:text-primary">Handbook</a>
          </Link>
          <Link href="/">
            <a className="text-muted hover:text-primary">Support</a>
          </Link>
          <div className="w-12 ">
            <Image src={avatar} layout="intrinsic" alt="Avatar" />
          </div>
        </div>
        <button onClick={handleOpenSidenav} className="block md:hidden">
          <RiMenu3Fill size={25} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
