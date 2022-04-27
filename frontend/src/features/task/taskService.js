import axios from "axios";


const API_URL = '/api/tasks/';


// Task lists
// get all business task lists
const getAllBusinessTaskLists = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.get(`${API_URL}list/${id}`, config);
    return response.data;
}

// get all user task lists
const getAllUserTaskLists = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.get(`${API_URL}list/user`, config);
    return response.data;
}

// create task list
const createTaskList = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.post(`${API_URL}list`, data, config);
    return response.data;
}

// update task list
const updateTaskList = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.put(`${API_URL}list/${data._id}`, data, config);
    return response.data;
}

// delete task list
const deleteTaskList = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.delete(`${API_URL}list/${data._id}`, config);
    return response.data;
}


// Task list items
// create task list item
const createTaskListItem = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.post(`${API_URL}item/`, data, config);
    return response.data;
}

// update task item
const updateTaskItem = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.put(`${API_URL}item/${data._id}`, data, config);
    return response.data;
}

// delete task list item
const deleteTaskItem = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.delete(`${API_URL}item/${id}`, config);
    return response.data;
}


// Completed user tasks
// get all tasks for the list
const getAllTasksForList = async (taskListId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.get(`${API_URL}task/${taskListId}`, config);
    return response.data;
}

// get recent user tasks
const getRecentUserTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.get(`${API_URL}task`, config);
    return response.data;
}

// create task
const createTask = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.post(`${API_URL}task`, data, config);
    return response.data;
}

// delete task
const deleteTask = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.delete(`${API_URL}task/${id}`, config);
    return response.data;
}




const taskService = {
    getAllBusinessTaskLists,
    getAllUserTaskLists,
    createTaskList,
    updateTaskList,
    deleteTaskList,

    createTaskListItem,
    updateTaskItem,
    deleteTaskItem,

    getAllTasksForList,
    getRecentUserTasks,
    createTask,
    deleteTask,
};


export default taskService;