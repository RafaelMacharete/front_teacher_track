import React, { useState } from 'react';
import './Login.css';

function App() {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <div>
      <button onClick={toggleModal}>Open</button>

      {modal && (
        <>
          <form action="GET">
            <img src="src/assets/images/senai_logo.png" alt="senai logo" width="234px" height="60px" />
            <label htmlFor="nif">NIF</label>
            <input type="text" name="nif" />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" />
            <button type="submit">Entrar</button>
          </form>

          <div className="modal">
            <div className="overlay" onClick={toggleModal}>asdas</div>
            <div className="modal-content">
              <h2>Hello Modal!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <button className="close-modal" onClick={toggleModal}>Close</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;