import axios from "axios"
export const axiosJWT = axios.create()


export const getAllUser = async () => {
    const res = await axios
        .get(`http://localhost:3005/api/user/get-all`)
    return res.data
}


export const getDetailsUser = async (id, access_token) => {
    const res = await axiosJWT
        .get(`http://localhost:3005/api/user/get-details/${id}`, {
            headers: {
                token: `Bearer ${access_token}`
            }
        })
    return res.data
}

export const updateUser = async (id, access_token, data) => {
    const res = await axiosJWT
        .put(`http://localhost:3005/api/user/update-user/${id}`, data, {
            headers: {
                token: `Bearer ${access_token}`,
            }
        })
    return res.data
}

export const deleteUser = async (id, access_token) => {
    const res = await axiosJWT
        .delete(`http://localhost:3005/api/user/delete-user/${id}`, {
            headers: {
                token: `Bearer ${access_token}`
            }
        })
    return res.data
}