import { Button } from "@mui/material";
import React, { useContext } from "react";
import { StateContext } from "../../App";
import Styles from "./Task.module.scss";

type props = {
	title: string;
	index: number;
};

function Task({ title, index }: props) {
	const { states, setStates } = useContext(StateContext);

	function completedTask(a: number): void {
		setStates((prev: object) => ({
			...prev,
			tasks: states.tasks.filter((task: string) => task !== title),
		}));
	};

	return (
		<div className={Styles.task}>
			<p>{title}</p>
			<Button onClick={()=>{
        completedTask(index);
      }}>Done</Button>
		</div>
	);
}

export default Task;
