import './App.css';
import SimpleComponent from './components/SimpleComponent';
import ComponentExample from './components/ComponentExample';
import ComponentWithState from './components/ComponentWithState';
import ComponentWithState1 from './components/ComponentWithState1';

function App() {
	return (
		<div className='App'>
      <SimpleComponent />
      <ComponentExample />
			<ComponentWithState />
			<ComponentWithState1 />
		</div>
	);
}

export default App;
