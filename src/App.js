import Logo from './components/Logo';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

import './App.scss';

function App() {
	return (
		<div className='app'>
			<div className='app--container'>
				<Logo />
				<Header />
				<SignUp />
			</div>
			<Footer />
		</div>
	);
}

export default App;
