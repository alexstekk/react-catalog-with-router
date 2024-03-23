import { Link } from 'react-router-dom';

function Meal({ strMeal, strMealThumb, idMeal }) {
	return (
		<div className='card'>
			<div className='card__img'>
				<img
					src={strMealThumb ? strMealThumb : 'https://placehold.co/320x200?text=No+image'}
					alt={strMeal}
				/>
			</div>
			<div className='card__info'>
				<h2 className='card__title'>{strMeal}</h2>
				<div className='card__action'>
					<Link
						to={`/meal/${idMeal}`}
						className='card__button btn'
					>
						View recipe
					</Link>
				</div>
			</div>
		</div>
	);
}

export { Meal };
