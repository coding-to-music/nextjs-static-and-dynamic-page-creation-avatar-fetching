// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/avatars">
              <a>Avatars</a>
            </Link>
          </li>
          <li>
            <Link href="/characters/korra">
              <a>Character:Korra</a>
            </Link>
          </li>
          <li>
            <Link href="/affiliations/water">
              <a>Affiliations:water</a>
            </Link>
          </li>
          <li>
            <Link href="/api">
              <a>API</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          background-color: #f0f0f0;
          padding: 10px;
        }
        ul {
          display: flex;
          list-style: none;
          padding: 0;
        }
        li {
          margin-right: 20px;
        }
        a {
          text-decoration: none;
          color: #333;
          font-weight: bold;
        }
      `}</style>
    </header>
  );
};

export default Header;
