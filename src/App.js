import Logo from './components/Logo';
import Header from './components/Header';
import Email from './components/Email';
import Password from './components/Password';
import ConfirmPassword from './components/ConfirmPassword';
import Footer from './components/Footer';

import './App.scss';

function App() {
	return (
		<div className='app'>
			<div className='app--container'>
				<Logo />
				<Header />
				<Email />
				<Password />
				<ConfirmPassword />
				<Footer />
			</div>
		</div>
	);
}

export default App;
