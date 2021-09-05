import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Organize folders' />
      <Todo text='Cook 4 pizzas' />
      <Todo text='Call Alex this afternoon' />
    </div>
  );
}

export default App;
