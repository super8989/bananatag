import React, { useState } from 'react';

function ConfirmPassword() {
	const [confirmPassword, setConfirmPassword] = useState('');

	const handlePasswordInput = (password) => {
		setConfirmPassword(password);
	};

	return (
		<div className='password'>
			<input
				type='password'
				placeholder='Confirm Password'
				value={confirmPassword}
				onChange={(e) => handlePasswordInput(e.target.value)}
			/>
		</div>
	);
}

export default ConfirmPassword;
