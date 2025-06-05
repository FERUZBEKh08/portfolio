import "./navbar.css";

//photos

import moon from "../photos & icons/half-moon.png";

export default function navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>Bosh</li>
        <li>Haqimda</li>
        <li>Loyihalar</li>
        <li>Aloqa</li>
      </ul>

      <article className="right">
        <button className="darkMode"><img src={moon} alt="" /></button>
        <button className="language">EN</button>
      </article>

      <span></span>
    </nav>
  );
}
