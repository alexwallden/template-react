import { Route, Routes } from 'react-router-dom';

const RouterView = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<h1>Main</h1>} />
      </Routes>
    </main>
  );
};

export default RouterView;
