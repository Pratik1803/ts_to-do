type Task = {
    taskName:string,
    completed:boolean
}

export default interface TaskState {
    tasks: Task[];
};