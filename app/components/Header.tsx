import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar">
      <div className="flex-1"></div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg pr-12 space-x-5">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/#portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
