import './App.css';
// import SimpleComponent from './components/SimpleComponent';
// import ComponentExample from './components/ComponentExample';
// import ComponentWithState from './components/ComponentWithState';
// import ComponentWithState1 from './components/ComponentWithState1';
// import MetricsContainer from './components/Metrics';
import ComponentWithUpdatingState from './components/ComponentWithUpdatingState';

function App() {
	return (
		<div className='App'>
			{/* <SimpleComponent />
      <ComponentExample />
			<ComponentWithState />
			<ComponentWithState1 /> */}
			{/* <MetricsContainer /> */}
			<ComponentWithUpdatingState />
		</div>
	);
}

export default App;
