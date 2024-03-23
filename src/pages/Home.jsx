import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([]);

	const { pathname, search } = useLocation();
	const navigate = useNavigate();

	const handleSearch = (query) => {
		if (query) {
			setFilteredCatalog(catalog.filter((item) => item.strCategory.toLowerCase().includes(query.toLowerCase())));
			navigate({ pathname, search: `?search=${query}` });
		}
	};

	useEffect(() => {
		getAllCategories().then((data) => {
			setCatalog(data.categories);
			setFilteredCatalog(search ? data.categories.filter((item) => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())) : data.categories);
		});
	}, [search]);

	return (
		<>
			<Search cb={handleSearch} />
			{catalog.length ? <CategoryList catalog={filteredCatalog} /> : <Preloader />}
		</>
	);
}

export { Home };
