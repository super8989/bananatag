import React, { useState } from 'react';
import './password.scss';

function Password() {
	const [password, setPassword] = useState('');

	const handlePasswordInput = (password) => {
		setPassword(password);
	};

	return (
		<div className='password'>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => handlePasswordInput(e.target.value)}
			/>
		</div>
	);
}

export default Password;
