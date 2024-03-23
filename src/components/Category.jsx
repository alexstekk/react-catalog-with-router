import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getFilteredCategory } from '../api';
import { MealList } from './MealList';
import { Preloader } from './Preloader';

function Category() {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		getFilteredCategory(name).then((data) => setMeals(data.meals));
	}, [name]);

	return meals.length ? <MealList meals={meals} /> : <Preloader />;
}

export { Category };
