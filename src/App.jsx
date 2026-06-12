import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import SingleDest from './pages/SingleDest';
import NotFound from './pages/NotFound';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	)
}

export default App;

	// return <About />;
	// return <Contact />;
	// return <Destinations />;
	// return <SingleDest />;
	// return <NotFound />;