import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList';
import { Preloader } from '../components/Preloader';
import { NavButton } from '../components/NavButton';

function Category() {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		getFilteredCategory(name).then((data) => setMeals(data.meals));
	}, [name]);

	return (
		<>
			<NavButton />
			{meals.length ? <MealList meals={meals} /> : <Preloader />}
		</>
	);
}

export { Category };
