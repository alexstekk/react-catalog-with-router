import React, { useState } from 'react';

function Search({ cb }) {
	const [value, setValue] = useState('');

	const handleSearch = () => {
		cb(value);
	};

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};
	return (
		<div className='search'>
			<input
				type='search'
				className='search__input'
				placeholder='Search'
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
				onKeyDown={handleKey}
			/>
			<button
				className='search__button btn'
				onClick={handleSearch}
			>
				Search
			</button>
		</div>
	);
}

export { Search };
