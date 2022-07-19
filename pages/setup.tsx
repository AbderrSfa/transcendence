import { emitWarning } from "process";
import cookie from 'js-cookie'

async function getData() {
	const req = await fetch('http://localhost:8080/api/auth/status');
	console.log(req.json().then(function (result) {
		console.log(result);
	}));
}


const Setup = () => {
	const token = cookie.get('access_token') as string;
	// console.log(token);
	// localStorage.setItem('token', token);
	
	return (
		<div className='bg-hero-pattern bg-cover bg-center h-screen'>
			<h1 className='text-center text-5xl font-bold mb-10'>
				Setup your profile
			</h1>
			<form action='' className='bg-gray-400'>
				<label htmlFor='username'>Username</label>
				<input type='text' id='username' name='username' placeholder='login' />
			</form>
			<button onClick={getData}>Start</button>
		</div>
	);
};

export default Setup;
