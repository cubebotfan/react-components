import './styles/app.css';
import Header from'./components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Gallary from './components/Gallary';

let gallaryList = [
	{
		id:0,
		src:require('./img/cake.jpg'),
		alt:'cake'
	},
	{
		id:1,
		src:require('./img/cookies.jpg'),
		alt:'cookie'
	},
	{
		id:2,
		src:require('./img/icecream.jpg'),
		alt:'ice cream'
	},
	{
		id:3,
		src:require('./img/muffins.jpg'),
		alt:'muffins'
	}
];

function App() {
  return (
		<div className='app-root flex-vertical'>
			<Header />
			<main className='flex-vertical'>
				<Banner
				title='React Components'
				text='Welcome to my react webpage. Feel free to check the source code in the repository'
				button1text='Open Repository'
				button1link='https://github.com/cubebotfan/react-components'
				button2text='Other Repositories'
				button2link='https://github.com/cubebotfan?tab=repositories'
				/>

				<Gallary
					gallary={gallaryList}
				/>
			</main>
			<Footer />
		</div>
  );
}

export default App;