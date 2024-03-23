import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Category } from './components/Category';

function App() {
	return (
		<BrowserRouter>
			<Header />

			<main className='main'>
				<div className='main__container container'>
					<Routes>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path='/category/:name'
							element={<Category />}
						/>
					</Routes>
				</div>
			</main>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
