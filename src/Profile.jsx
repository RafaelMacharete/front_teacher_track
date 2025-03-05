import "./Profile.css";
import React, { useState } from 'react';
import Navbar from "./components/Navbar.jsx";

function Profile() {
  const [dropdown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <>
      <Navbar />
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
        {/* Teacher Schedule */}
        <div className="teacher-schedule">
          <h1>Ocupação Docente</h1>
          {/* Dropdown */}
          <div className="shifts-container">
            <div className="menu"
            >
              <button
                onClick={toggleDropdown}
                className="menu-button"
              // onBlur={() => setTimeout(() => setDropdown(false))} 
              >
                <span>Manhã</span>
                <img src="./public/caret-down-fill.svg" alt="arrow pointing down (menu)" />
              </button>

              {dropdown && (
                <nav className="dropdown-content">
                  <ul>
                    <li>Tarde</li>
                    <li>Noite</li>
                  </ul>
                </nav>
              )}
            </div>
          </div>

          <table border="10">
            <tr>
              <th>Horário</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
            </tr>
            <tr>
              <td class="highlight">07:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="highlight">08:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="highlight">09:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="highlight">10:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="highlight">11:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>


        </div>
      </div>
    </>
  );
}

export default Profile;
