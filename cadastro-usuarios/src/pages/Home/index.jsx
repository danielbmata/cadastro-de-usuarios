import './style.css'
import Lixo from '../../assets/lixo.svg'

function Home() {

  const users = [{
    id: 'ffs54ds54',
    name: 'dan',
    age: 26,
    email: 'dan@email.com'
  }, {
    id: 'ffs4e54ds54',
    name: 'Julio',
    age: 20,
    email: 'julio@email.com'

  }]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Idade' name='idade' type='number' />
        <input placeholder='Email' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span> </p>
            <p>Idade: <span>{user.age}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
            <button>
              <img src={Lixo} alt="" />
            </button>
          </div>
        </div>
      ))}

    </div>

  )
}

export default Home
