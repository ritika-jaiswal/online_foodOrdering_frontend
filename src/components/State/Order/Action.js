
import { GET_USERS_NOTIFICATION_REQUEST, GET_USERS_NOTIFICATION_FAILURE, GET_USERS_NOTIFICATION_SUCCESS, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS, GET_USERS_ORDERS_FAILURE } from "./ActionType";
import { api } from "../../config/api"

export const createOrder= ({reqData}) => {
    return async (dispatch) => {
        dispatch({type:CREATE_ORDER_REQUEST});
    try {
        const { data } = await api.post("/api/order",reqData.order,{
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            },
        });
        // if(data.payment_url){
        //     window.location.href=data.payment_url;
        // }
        dispatch({ type: CREATE_ORDER_SUCCESS, payload:data })
        console.log("craaeted order data", data)
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error })
        console.log("error", error)
    }
  };
};

export const getUsersOrders = (jwt) => {
    return async (dispatch) => {
    dispatch({ type: GET_USERS_ORDERS_REQUEST})
    try {
        const {data} = await api.get(`api/order/user`,{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload:data })
        console.log("users orders", data)
    } catch (error) {
        dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error })
        console.log("error", error)
    }
}
};

export const searchMenuItem = ({keyword, jwt}) => {
    return async (dispatch) => {
    dispatch({ type: SEARCH_MENU_ITEM_REQUEST })
    console.log("JWT", jwt)
    try {
        const { data } = await api.get(`/api/food/search?name=${keyword}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        console.log("data......", data)
        dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data })
       
    } catch (error) {
        dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error.messsage })
        console.log("error", error)
    }
 };
};

export const updateMenuItemsAvailability = ({foodId, jwt}) => {
    return async (dispatch) => {
    dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST})
    try {
        const { data } = await api.put(`/api/admin/food/${foodId}`, {} , {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data })
        console.log("update menu item availability.", data)
    } catch (error) {
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};

export const deleteFoodAction = ({foodId, jwt}) => {
    return async (dispatch) => {
    dispatch({type: DELETE_MENU_ITEM_REQUEST})
    try {
        const res = await api.delete(`/api/admin/food/${foodId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: foodId })
        console.log("delete food.", res.data)
    } catch (error) {
        dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error })
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
        const res = await api.get(`/api/events`, data, {
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
        dispatch({ type: GET_RESTUARANS_EVENTS_SUCCESS, payload: res.data })
        console.log("get event.", data)
    } catch (error) {
        dispatch({ type: GET_RESTUARANS_EVENTS_FAILURE, payload: error })
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
        console.log("create category.", data)
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
        const res = await api.get(`/api/category/restuarant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: GET_RESTUARANS_CATEGORY_SUCCESS, payload: res.data })
        console.log("get restuarant category.", data)
    } catch (error) {
        dispatch({ type: GET_RESTUARANS_CATEGORY_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};