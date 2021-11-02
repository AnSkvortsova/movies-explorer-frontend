import logo from '../../images/logo.svg';

export function Logo() {
  return(
    <a className="logo" href="/">
      <img className="logo__img" src={logo} alt="логотип" />
    </a>
  );
}