import React, { useState } from 'react';

function Email() {
	const [email, setEmail] = useState('');

	const handleEmailInput = (address) => {
		setEmail(address);
	};

	return (
		<div className='email'>
			<input
				type='email'
				placeholder='Email (Account ID)'
				value={email}
				onChange={(e) => handleEmailInput(e.target.value)}
			/>
		</div>
	);
}

export default Email;
