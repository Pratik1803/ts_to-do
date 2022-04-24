import React, { useState, useContext } from "react";
import Styles from "./Table.module.scss";
import TaskState from "../../Interfaces/TaskState.interface";
import Button from "@mui/material/Button";
import {StateContext} from '../../App';

function Table() {
  const {states, setStates} = useContext(StateContext);
	const [tasks, setTasks] = useState<TaskState>({ tasks: [] });

  const toggleAddTaskModal = ()=>{
    setStates((prev: any)=>({...prev, addTaskModal:!states.addTaskModal}))
  }

	return (
		<>
			<Button>+ Add Task</Button>
		</>
	);
}

export default Table;
