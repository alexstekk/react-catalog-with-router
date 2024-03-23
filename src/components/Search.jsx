import React, { useState } from 'react';

function Search(props) {
	const { handleSearch } = props;

	const [search, setSearch] = useState('');
	const [type, setType] = useState('');

	const handleType = (e) => {
		setType(e.target.value);
		handleSearch(search, e.target.value);
	};

	return (
		<div className='search'>
			<input
				type='search'
				placeholder='Search'
				className='search__input'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleSearch(search, type);
					}
				}}
			/>
			<button
				className='search__button'
				onClick={() => {
					if (search) {
						handleSearch(search, type);
					}
				}}
			>
				Search
			</button>
			<div className='search__type'>
				<label>
					<input
						className='search__radio'
						type='radio'
						value=''
						onChange={handleType}
						checked={type === ''}
						name='filter'
					/>
					All
				</label>
				<label>
					<input
						className='search__radio'
						type='radio'
						value='movie'
						onChange={handleType}
						checked={type === 'movie'}
						name='filter'
					/>
					Movie
				</label>
				<label>
					<input
						className='search__radio'
						type='radio'
						value='series'
						onChange={handleType}
						checked={type === 'series'}
						name='filter'
					/>
					Series
				</label>
			</div>
		</div>
	);
}

export { Search };
