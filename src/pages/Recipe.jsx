import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';
import { NavButton } from '../components/NavButton';

function Recipe() {
	const [recipe, setRecipe] = useState({});

	const { idMeal } = useParams();

	useEffect(() => {
		getMealById(idMeal).then((data) => setRecipe(data.meals[0]));
	}, [idMeal]);
	return (
		<>
			
			{!recipe.idMeal ? (
				<Preloader />
			) : (
				<div className='recipe'>
					<div className='recipe__image'>
						<img
							src={recipe.strMealThumb}
							alt='recipe.strMeal'
						/>
					</div>
					<h1 className='recipe__title'>{recipe.strMeal}</h1>
				</div>
			)}
            <NavButton />
		</>
	);
}

export { Recipe };
