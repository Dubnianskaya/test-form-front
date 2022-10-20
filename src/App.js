import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

const createChunk = componentName => {
  return lazy(() =>
    import(`./pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const MessagePage = createChunk('MessagePage');

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="message" element={<MessagePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
