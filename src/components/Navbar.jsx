import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <img src="./images/senai_logo.png" alt="logo senai" className="image" height="45px"/>
        <div>
          <li>Início</li>
          <li>Cadastros</li>
          <li>Professores</li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;