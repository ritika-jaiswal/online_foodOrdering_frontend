import axios from "axios"
import { CREATE_CATEGORY_REQUEST,CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAILURE,
    CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, CREATE_EVENTS_FAILURE,
    CREATE_RESTUARANT_REQUEST, CREATE_RESTUARANT_SUCCESS, CREATE_RESTUARANT_FAILURE,
    DELETE_EVENTS_SUCCESS, DELETE_EVENTS_FAILURE, DELETE_EVENTS_REQUEST,
    DELETE_RESTUARANT_FAILURE,DELETE_RESTUARANT_REQUEST,DELETE_RESTUARANT_SUCCESS,
    GET_ALL_EVENTS_FAILURE,GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS,
    GET_ALL_RESTUARANTS_FAILURE, GET_ALL_RESTUARANTS_REQUEST, GET_ALL_RESTUARANTS_SUCCESS,
    GET_RESTUARANTS_EVENTS_SUCCESS, GET_RESTUARANTS_EVENTS_FAILURE, GET_RESTUARANTS_EVENTS_REQUEST,
    GET_RESTUARANTS_CATEGORY_FAILURE, GET_RESTUARANTS_CATEGORY_SUCCESS, GET_RESTUARANTS_CATEGORY_REQUEST,
    GET_RESTUARANT_BY_USER_ID_FAILURE, GET_RESTUARANT_BY_USER_ID_SUCCESS, GET_RESTUARANT_BY_USER_ID_REQUEST,
    UPDATE_RESTUARANT_STATUS_FAILURE, UPDATE_RESTUARANT_STATUS_REQUEST, UPDATE_RESTUARANT_FAILURE,
    GET_RESTUARANT_BY_ID_REQUEST,
    GET_RESTUARANT_BY_ID_SUCCESS,
    GET_RESTUARANT_BY_ID_FAILURE,
    UPDATE_RESTUARANT_STATUS_SUCCESS,
    UPDATE_RESTUARANT_REQUEST,
    UPDATE_RESTUARANT_SUCCESS
 } from "./ActionType"
import { api } from "../../config/api"

export const getAllRestuarantsAction = (token) => {
    console.log("token", token)
    return async (dispatch) => {
        dispatch({type:GET_ALL_RESTUARANTS_REQUEST});
    try {
        const { data } = await api.get("/api/restaurants",{
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        dispatch({ type: GET_ALL_RESTUARANTS_SUCCESS, payload: data })
        console.log("all restuarant", data)
    } catch (error) {
        dispatch({ type: GET_ALL_RESTUARANTS_FAILURE, payload: error })
        console.log("error", error)
    }
  };
};

export const getRestuarantById = (reqData) => {
    return async (dispatch) => {
    dispatch({ type: GET_RESTUARANT_BY_ID_REQUEST})
    try {
        const response = await api.get(`api/restaurants/${reqData.restaurantId}`,{
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        })
        dispatch({ type: GET_RESTUARANT_BY_ID_SUCCESS, payload:response.data })
        console.log("Get Restaurant By RestId", response)
    } catch (error) {
        dispatch({ type: GET_RESTUARANT_BY_ID_FAILURE, payload: error })
        console.log("error", error)
    }
}
};

export const getRestuarantByUserId = (jwt) => {
    return async (dispatch) => {
    dispatch({ type: GET_RESTUARANT_BY_USER_ID_REQUEST })
    console.log("JWT", jwt)
    try {
        const { data } = await api.get(`/api/admin/restuarants/user`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        console.log("get retuarant by user id", data)
        dispatch({ type: GET_RESTUARANT_BY_USER_ID_SUCCESS, payload: data })
       
    } catch (error) {
        dispatch({ type: GET_RESTUARANT_BY_USER_ID_FAILURE, payload: error.messsage })
        console.log("error", error)
    }
 };
};

export const createRestuarant = (reqData) => {
    console.log("token...........", reqData.token)
    return async (dispatch) => {
    dispatch({type: CREATE_RESTUARANT_REQUEST})
    try {
        const { data } = await api.post(`/api/admin/restaurants`, reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.token}`
            }
        });
        dispatch({ type: CREATE_RESTUARANT_SUCCESS, payload: data })
        console.log("restuarant created successfully.", data)
    } catch (error) {
        dispatch({ type: CREATE_RESTUARANT_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};

export const updateRestuarant = ({restaurantId, restuarantData, jwt}) => {
    return async (dispatch) => {
    dispatch({type: UPDATE_RESTUARANT_REQUEST})
    try {
        const res = await api.put(`/api/admin/restaurant/${restaurantId}`, restuarantData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: UPDATE_RESTUARANT_SUCCESS, payload: res.data })
        console.log("restuarant updated successfully.", res.data)
    } catch (error) {
        dispatch({ type: UPDATE_RESTUARANT_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};

export const deleteRestuarant = ({restaurantId,jwt}) => {
    return async (dispatch) => {
    dispatch({type: DELETE_RESTUARANT_REQUEST})
    try {
        const res = await api.delete(`/api/admin/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: DELETE_RESTUARANT_SUCCESS, payload: res.data })
        console.log("restuarant deleted successfully.", res.data)
    } catch (error) {
        dispatch({ type: DELETE_RESTUARANT_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};

export const updateRestuarantStatus = ({restaurantId, jwt}) => {
    return async (dispatch) => {
    dispatch({type: UPDATE_RESTUARANT_STATUS_REQUEST})
    try {
        const res = await api.put(`/api/admin/restaurant/${restaurantId}/status`,{}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: UPDATE_RESTUARANT_STATUS_SUCCESS, payload: res.data })
        console.log("resss.............", res.data)
    } catch (error) {
        dispatch({ type: UPDATE_RESTUARANT_STATUS_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};

export const createEventAction = ({data, jwt, restaurantId}) => {
    return async (dispatch) => {
    dispatch({type: CREATE_EVENTS_REQUEST})
    try {
        const res = await api.post(`/api/admin/events/restaurant/${restaurantId}`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: CREATE_EVENTS_SUCCESS, payload: res.data })
        console.log("create event.", res.data)
    } catch (error) {
        dispatch({ type: CREATE_EVENTS_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};

export const getAllEvents = ({jwt}) => {
    return async (dispatch) => {
    dispatch({type: GET_ALL_EVENTS_REQUEST})
    try {
        const res = await api.get(`/api/events`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            },
        });
        dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data })
        console.log("get all events.", res.data)
    } catch (error) {
        dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};

export const deleteEventAction = ({eventId, jwt}) => {
    return async (dispatch) => {
    dispatch({type: DELETE_EVENTS_REQUEST})
    try {
        const res = await api.delete(`/api/admin/events/${eventId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId })
        console.log("delete event.", res)
    } catch (error) {
        dispatch({ type: DELETE_EVENTS_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};

export const getRestuarantsEvents = ({restaurantId, jwt}) => {
    return async (dispatch) => {
    dispatch({type: GET_RESTUARANTS_EVENTS_REQUEST})
    try {
        const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: GET_RESTUARANTS_EVENTS_SUCCESS, payload: res.data })
        console.log("get event.", res)
    } catch (error) {
        dispatch({ type: GET_RESTUARANTS_EVENTS_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};

export const createCategoryAction = ({reqData, jwt}) => {
    return async (dispatch) => {
    dispatch({type: CREATE_CATEGORY_REQUEST})
    try {
        const res = await api.post(`/api/admin/category`, reqData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data })
        console.log("create category.", res)
    } catch (error) {
        dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};

export const getRestuarantsCategory = ({jwt, restaurantId}) => {
    return async (dispatch) => {
    dispatch({type: GET_RESTUARANTS_CATEGORY_REQUEST})
    try {
        const res = await api.get(`/api/category/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: GET_RESTUARANTS_CATEGORY_SUCCESS, payload: res.data })
        console.log("get restuarant category.", res)
    } catch (error) {
        dispatch({ type: GET_RESTUARANTS_CATEGORY_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};