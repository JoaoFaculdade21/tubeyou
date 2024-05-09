import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-20 bg-cyan-600 flex justify-start items-center gap-2">
      <div className="gap-2 flex items-center">
        <Link href="/">
          <Image src="/logo.png" alt="icon" width={60} height={60} />
        </Link>
        <h1 className="text-3xl font-mono">TubeYou</h1>
      </div>
    </header>
  );
};

export default Header;
