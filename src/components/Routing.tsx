import {FC, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));

const Routing: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Suspense fallback={<>Loading...</>}><Home/></Suspense>}/>
      </Routes>
    </Router>
  );
};

export default Routing;
