import { useParams } from 'react-router-dom';
import { todos } from '../data/todos';
import { TodoTable } from '../components/TodoTable';


export const TodosPage = () => {
  const { todoId = 0 } = useParams()

  return (
    <>
      <h1 className="title">Todos Page</h1>
  
      <TodoTable
        todos={todos}
        selectedTodoId={+todoId} />
    </>
  )
};
