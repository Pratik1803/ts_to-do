import React, {createContext, useState} from "react";
import Styles from "./App.module.scss";
import Table from "./Components/Table/Table";

interface Context {
	states: {
		addTaskModal:boolean
	};
	setStates: Function;
}

const StateContext = createContext<Context>({
	states:{
		addTaskModal:false,
	},
	setStates:()=>{}
});

function App() {
	const [states, setStates] = useState({
		addTaskModal:false,
	});

	return <StateContext.Provider value={{states, setStates}}>
		<div className={Styles.App}>
		<h1>Welcome to TypeScript To-DO</h1>
		<br/>
		<Table/>
	</div>
	</StateContext.Provider>;
}

export default App;
export {StateContext};
