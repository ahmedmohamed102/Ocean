import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2">
      <Image src="/logo.png" alt="Logo" width={32} height={32} />
      <div className="relative">
        <h1 className="text-white text-xl font-bold tracking-wide">Ocean</h1>
        <div className="absolute bottom-1.5 -right-2.5 w-2 h-2 bg-sky-700 rounded-full"/>
      </div>
    </Link>
  );
};

export default Logo;
