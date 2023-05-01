import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="container">
        <h1>math magicians</h1>

        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/calculator">calculator</Link></li>
          <li><Link to="/quote">quote</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
