import "../styles/Profile.css";
import React, { useState } from 'react';
import Navbar from "../components/Navbar.jsx";

function Profile() {
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  function toggleModal() {
    setModal(!modal);
  }

  function handleCellClick(event) {
    if (event.target.tagName === 'TD' && event.target.className != 'highlight') {
      setModal(!modal)
    }
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

          <table
            border="10"
            onClick={handleCellClick}>
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

          {modal && <div className="modal-overlay" onClick={toggleModal}></div>}
          {modal && (
            <div className="modal-content">
              <h1>Registrar horário</h1>
              <img src="./public/x.svg" alt="x-close icon" width='30px' onClick={toggleModal} />
              <form action="" method="POST" className="modal-schedule-register">
                <label htmlFor="input1">input1</label>
                <input type="text" name="input1" />

                <label htmlFor="input2">input2</label>
                <input type="text" name="input2" />

                <label htmlFor="input3">input3</label>
                <input type="text" name="input3" />

                <button type="submit">Registrar</button>
              </form>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Profile;