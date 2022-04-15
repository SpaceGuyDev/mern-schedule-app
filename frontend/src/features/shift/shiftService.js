import axios from "axios";


const API_URL = '/api/shifts/';


// Get all employees for a business
const getAllBusinessShifts = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.get(`${API_URL}?business=${data.business}&fromDate=${data.fromDate}&toDate=${data.toDate}`, config);

    return response.data;
}


// Create Shift
const createShift = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.post(`${API_URL}`, data, config);

    return response.data;
}


// Edit Shift
const editShift = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.put(`${API_URL}${data.id}`, data, config);

    return response.data;
}


// Delete Shift
const deleteShift = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.delete(`${API_URL}${id}`, config);

    return response.data;
}


// export service
const shiftService = {
    getAllBusinessShifts,
    createShift,
    editShift,
    deleteShift,
};

export default shiftService;