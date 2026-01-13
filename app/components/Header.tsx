import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="navbar">
      <Link href="/" className="cursor-pointer">
        <Image src="/TS.png" alt="logo" width={50} height={50} />
      </Link>
      <div className="flex-1"></div>
      <div className="flex-none">
        <ul className="menu menu-horizontal md:px-1 text-sm md:text-lg md:pr-12 md:space-x-5">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/resume.pdf" download>
              Resume
            </Link>
          </li>
          <li>
            <Link href="/#portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
