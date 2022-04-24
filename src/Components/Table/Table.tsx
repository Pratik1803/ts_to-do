import React, { useState, useContext } from "react";
import Styles from "./Table.module.scss";
import TaskState from "../../Interfaces/TaskState.interface";
import Button from "@mui/material/Button";
import { StateContext } from "../../App";
import { TextField } from "@mui/material";
import Task from "../Task/Task";

function Table() {
	const { states, setStates } = useContext(StateContext);
	const [taskTitle, setTaskTitle] = useState<string>("");

	function addTask():void {
		setStates((perv: object) => ({
			...perv,
			tasks: [...states.tasks, taskTitle],
		}));
		setTaskTitle("");
	}

	return (
		<>
			<TextField
				type="text"
				label="Write Your Task"
				size="small"
				variant="outlined"
				value={taskTitle}
				onChange={(e) => {
					setTaskTitle(e.target.value);
				}}
			/>
			<Button onClick={addTask}>+ Add Task</Button>
			<div className={Styles.to_do_container}>
				{states.tasks.map((task, index) => (
					<Task key={index} title={task} index={index} />
				))}
			</div>
		</>
	);
}

export default Table;
