import React, { useState } from 'react';
import Email from './Email';
import Password from './Password';
import ConfirmPassword from './ConfirmPassword';

function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<div className='signup'>
			<Email email={email} />
			<Password />
			<ConfirmPassword />
		</div>
	);
}

export default SignUp;
