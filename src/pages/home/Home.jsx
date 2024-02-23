import "./style.home.scss"
import Search from "../../components/search/Search"
import Logo from "../../components/logo/Logo"

export default function Home(){

  return (
    <>
    <section className="home">
      <div className="header-home">
        <Logo />
      </div>
      <div className="home-main">
          <h1>Busque letras de música</h1>
          <Search />
      </div>
    </section>
    </>
  );
}