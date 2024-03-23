import { Meal } from './Meal';

function MealList({ meals }) {
	return (
		<div className='meals'>
			{meals.map((meal) => {
				return (
					<Meal
						key={meal.idMeal}
						{...meal}
					/>
				);
			})}
		</div>
	);
}
export { MealList };
