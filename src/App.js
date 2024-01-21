import './App.css';
import { Parent } from './NestedComponentsExample/Parent';

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
			<Parent />
		</div>
	);
}

export default App;
