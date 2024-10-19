import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <h1>Bem-vindo ao TaskMaster</h1>
      <UsersList />  {/* Usando o componente aqui */}
    </div>
  );
}

export default App;
