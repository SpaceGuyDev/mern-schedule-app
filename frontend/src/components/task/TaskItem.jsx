import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskList, createTask, deleteTask } from '../../features/task/taskSlice';
import { closeIcon, checkMarkIcon } from '../../constance/icons';

const TaskItem = ({ taskList, taskItem }) => {
    const dispatch = useDispatch();
    const location = useLocation().pathname.split('/')[1];
    const completedTasks = useSelector(state => state.task.completedTasks);
    const completedTaskItemIds = useSelector(state => state.task.completedTasks)?.map(task => task.taskItem);

    return (
        <div className={`task-item${
            completedTaskItemIds?.includes(taskItem._id)? ' completed' : ''
        }`}>
            <div className="flex align-between">
                <div className="task-info mr-1">
                    <h3 className="title-4">{taskItem.title}</h3>
                    {taskItem.description && (
                        <p className="ml-1">{taskItem.description}</p>
                    )}
                    <small>
                        Completed by {completedTasks.find(task => task.taskItem === taskItem._id).completedBy.firstName} {completedTasks.find(task => task.taskItem === taskItem._id).completedBy.lastName}
                    </small>
                </div>
                {location === 'dashboard' ? (
                    <button 
                        className="btn-icon btn-icon-danger"
                        onClick={() => 
                            dispatch(updateTaskList({
                                _id: taskList._id,
                                taskItemId: taskItem._id,
                                action: 'removeTaskItem',
                            }))
                        }
                    >
                        {closeIcon}
                    </button>
                ) : location === 'user' && (
                    completedTaskItemIds?.includes(taskItem._id) ? (
                        <button 
                            className="btn-icon btn-icon-danger"
                            onClick={() => 
                                dispatch(deleteTask(
                                    completedTasks.find(task => task.taskItem === taskItem._id)._id
                                ))
                            }
                        >
                            {closeIcon}
                        </button>
                    ) : (
                        <button 
                            className="btn-icon btn-icon-primary"
                            onClick={() => 
                                dispatch(createTask({
                                    taskListId: taskList._id,
                                    taskItem: taskItem._id,
                                }))
                            }
                        >
                            {checkMarkIcon}
                        </button>
                    )
                )}
            </div>
        </div>
    )
}

export default TaskItem