import "./Profile.css";
import Header from "./components/Header.jsx";

function Profile() {
  return (
    <>
      <Header />
      <div className="content-profile">
        <div className="profile-info">
          <img src="./public/person-circle.svg" alt="" />
          <ul>
            <li>Professor da Silva</li>
            <li>professor.silva@senaisp.edu.br</li>
            <li>(19) 9 8765-4321</li>
            <li>NIF: 010203</li>
          </ul>
        </div>
        <div>
          <h1>Ocupação Docente</h1>
          <div>
            <ul>
              <li>Manhã</li>
              <li>Tarde</li>
              <li>Noite</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
