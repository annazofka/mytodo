import './App.css';
import { Statistics } from './NestedComponents/Statistics';
import { TodoForm } from './NestedComponents/TodoForm';
import { TodoList } from './NestedComponents/TodoList';
// import { Parent } from './NestedComponentsExample/Parent';
// import SimpleComponent from './components/SimpleComponent';
// import ComponentExample from './components/ComponentExample';
// import ComponentWithState from './components/ComponentWithState';
// import ComponentWithState1 from './components/ComponentWithState1';
// import MetricsContainer from './components/Metrics';
// import ComponentWithUpdatingState from './components/ComponentWithUpdatingState';
// import ToDosComponent from './components/ComponentWithUpdatingStateToDoList';
// import ComponentWithUpdatingStateCheckbox from './components/ComponentWithUpdatingStateCheckbox';
// import ToDoListSelectAndDateComponent from './components/ComponentWithUpdatingStateSelectAndDate';

function App() {
	const todos = [
		{ todoName: 'Learn JavaScript', status: false },
		{ todoName: 'Learn React', status: true },
		{ todoName: 'Learn CSS', status: false },
		{ todoName: 'Learn HTML', status: false },
	];

	return (
		<div className='App'>
			{/* <SimpleComponent />
      		<ComponentExample />
			<ComponentWithState />
			<ComponentWithState1 /> */}
			{/* <MetricsContainer /> */}
			{/* <ComponentWithUpdatingState /> */}
			{/* <ToDosComponent /> */}
			{/* <ComponentWithUpdatingStateCheckbox /> */}
			{/* <ToDoListSelectAndDateComponent /> */}
			{/* <Parent /> */}

			<TodoForm />
			<Statistics todoList={todos} />
			<TodoList todoList={todos} />
		</div>
	);
}

export default App;
