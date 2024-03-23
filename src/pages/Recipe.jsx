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
							alt={recipe.strMeal}
						/>
					</div>
					<h1 className='recipe__title'>{recipe.strMeal}</h1>
					<div className='recipe__additional-info'>
						<p>Category: {recipe.strCategory}</p>
						{recipe.strArea ? <p>Area: {recipe.strArea}</p> : null}
					</div>
					<p className='recipe__instruction'>{recipe.strInstructions}</p>
					<div className='recipe__table table-recipe'>
						<div className='table-recipe__title'>
							<p>Ingredients</p>
							<p>Measure</p>
						</div>
						<div className='table-recipe__body'>
							{Object.keys(recipe).map((key) => {
								if (key.includes('Ingredient') && recipe[key]) {
									return (
										<div key={key}>
											<p>{recipe[key]}</p>
											<p>{recipe[`strMeasure${key.slice(13)}`]}</p>
										</div>
									);
								}
								return null;
							})}
						</div>
					</div>
					{recipe.strYoutube ? (
						<div className='recipe__video'>
							<h2>Video recipe</h2>
							<iframe
								title={idMeal}
								width='600'
								height='350'
								allowFullScreen
								src={`https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}`}
								frameBorder='0'
							/>
						</div>
					) : null}
				</div>
			)}
			<NavButton />
		</>
	);
}

export { Recipe };
