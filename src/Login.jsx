import './Login.css'

function App() {

  return (
    <div>
      <form action="POST">
      <img src="src/assets/images/senai_logo.png" alt="senai logo" width='234px' height='60px'/>
        <label htmlFor="nif">NIF</label>
        <input type="text" name="nif" />
        <label htmlFor="senha">Senha</label>
        <input type="password" name='senha' />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default App
