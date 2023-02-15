import '../App.css';


// função que retorna o header do site
function Header(props) {
  return (
    <header className="header">
      <h1 className='portal'>{props.name}</h1>
      <ul className="menu">
        <li><a href='/'>{props.links[0]}</a></li>
        <li><a href='/admin'>{props.links[1]}</a></li>
        <li><a href='/admnoticias'>{props.links[2]}</a></li>
      </ul>

    </header>
  );
}


export default Header;