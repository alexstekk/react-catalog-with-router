import { Link } from "react-router-dom";

function Header() {
	return (
		<header className='header'>
			<div className="header__container container">
				<Link to={'/'} className='header__title'>REACT MEALS</Link>
				<a href="https://github.com/alexstekk/react-catalog-with-router" className="header__link">View source on git</a>
			</div >
		</header>
	);
}
export { Header };
