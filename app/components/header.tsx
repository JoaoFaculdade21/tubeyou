import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-20 w-full bg-cyan-600 flex justify-start items-center gap-2">
      <Link href="/">
        <div className="gap-2 flex items-center ml-4 hover:scale-95">
          <Image src="/logo.png" alt="icon" width={60} height={60} />
          <h1 className="text-3xl font-mono font-bold text-white ">TubeYou</h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
