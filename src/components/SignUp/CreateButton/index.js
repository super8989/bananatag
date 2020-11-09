import React from 'react';
import './button.scss';

function CreateButton() {
	const submitForm = () => {
		console.log('button clicked');
	};

	return (
		<div className='button'>
			<button onClick={submitForm}>create account</button>
		</div>
	);
}

export default CreateButton;
