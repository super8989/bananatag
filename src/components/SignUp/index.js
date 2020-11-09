import React, { useState } from 'react';
import Email from './Email';
import Password from './Password';
import ConfirmPassword from './ConfirmPassword';
import CreateButton from './CreateButton';

function SignUp() {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<div className='signup'>
			<Email />
			<Password />
			<ConfirmPassword />
			<CreateButton />
		</div>
	);
}

export default SignUp;
