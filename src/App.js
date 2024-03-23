import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
	return (
		<>
			<Header />

			<main className='main'>
				<div className='main__container container'></div>
			</main>
			<Footer />
		</>
	);
}

export default App;
