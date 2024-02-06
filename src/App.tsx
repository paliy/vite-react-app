import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Loading = lazy(() => import('./components/loader'));
const Home = lazy(() => import('./pages/home/index'));
const Header = lazy(() => import('./components/header'));
const CardDetails = lazy(() => import('./pages/cardDetails/index'));

function App() {
  return (
    <Router>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Suspense fallback={<Loading />}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":cardId" element={<CardDetails />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App;
