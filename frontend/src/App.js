import './App.css';
import './output.css';
//eslint-disable-next-line
import { Routes, Route, Switch } from 'react-router-dom';
import NotFound from './Component/pages/NotFound';
import ForumPage from './Component/pages/ForumPage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ForumPage />} />
        {/* <Route path="star-wars" element={<Main />}>
          <Route path="people">
            <Route index element={<People />} />
            <Route path=":id" element={<PeopleDetail />} />
          </Route>
          <Route path="planets">
            <Route index element={<Planets />} />
            <Route path=":id" element={<PlanetDetail />} />
          </Route>
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
