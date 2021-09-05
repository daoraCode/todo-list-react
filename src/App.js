import Modal from './components/Modal';
import Todo from './components/Todo';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Organize folders' />
      <Todo text='Cook 4 pizzas' />
      <Todo text='Call Alex this afternoon' />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
