import '../styles/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='form-login'>
      <form action="" method='GET' className='form'>
        <img src="./images/senai_logo.png" alt="senai logo" width='234px' height='60px' />
        
        <label htmlFor="nif">NIF</label>
        <input type="text" name="nif" />

        <label htmlFor="senha">Senha</label>
        <input type="password" name='senha' />
        
        <Link to='/profile'><button type="submit">Entrar</button></Link>
      </form>
    </div>
  )
}

export default Login;