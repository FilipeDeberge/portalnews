import './App.css';
import Rotas from './routes/routes';
import Header from './components/Header';

// Página principal do portal de notícias
function App() {
  return (
    <div className="App">
      <Header name="PortalNews" links={["Últimas Notícias", "Nova Noticia", "Gerenciar Noticias"]}/>
      <Rotas />
    </div>
  );
}

export default App;
