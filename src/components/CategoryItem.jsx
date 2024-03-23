import { Link } from 'react-router-dom';

function CategoryItem(props) {
	const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props;
	return (
		<div className='card'>
			<Link to={`/category/${strCategory}`}>
				<div className='card__img'>
					<img
						src={strCategoryThumb ? strCategoryThumb : 'https://placehold.co/320x200?text=No+image'}
						alt={strCategory}
					/>
				</div>
			</Link>

			<div className='card__info'>
				<h2 className='card__title'>{strCategory}</h2>
				<p className='card__description'>{strCategoryDescription.slice(0, 80)}...</p>
				<div className='card__action'>
					<Link
						to={`/category/${strCategory}`}
						className='card__button btn'
					>
						View category
					</Link>
				</div>
			</div>
		</div>
	);
}

export { CategoryItem };
