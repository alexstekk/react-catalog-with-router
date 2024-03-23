import { useNavigate } from 'react-router-dom';

function NavButton() {
	const navigate = useNavigate();

	return (
		<div className='btn_nav'>
			<button
				className='btn '
				onClick={() => {
					navigate(-1);
				}}
			>
				Go back
			</button>
		</div>
	);
}

export { NavButton };
