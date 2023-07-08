import { Navigate, Route, Routes, useMatch, useParams,} from 'react-router-dom';
import { MainNav } from './components/MainNav';
import { TodosPage } from './pages/TodosPage';

 
export const App = () => {
  const match = useMatch('/todos/:todoId');

  return <>
    <MainNav />

  {match?.params.todoId 
  ? (<b>Selected Todo Id  {match?.params.todoId}</b>) 
  : (<b>Todo Id is not selected</b>)
  }

    <div className="section">
      <Routes>
        <Route path="todos"> 
          <Route index element={(<TodosPage />)} />
          <Route path=":todoId" element={(<TodosPage />)} />
        </Route>

        <Route path="/" element={<h1 className="title">Home Page</h1>} />
        <Route path= "home" element={<Navigate to="/" replace/>} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
  </>;
};
