import { CategoryItem } from '../components/CategoryItem';
function CategoryList({ catalog }) {
	return (
		<div className='categories'>
			{catalog.map((el) => (
				<CategoryItem
					key={el.idCategory}
					{...el}
				/>
			))}
		</div>
	);
}

export { CategoryList };
