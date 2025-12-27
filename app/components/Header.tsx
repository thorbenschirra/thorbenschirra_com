export default function Header() {
  return (
    <div className="navbar">
      <div className="flex-1"></div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg pr-12 space-x-5">
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Resume</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
