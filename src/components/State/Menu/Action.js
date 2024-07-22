import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS,
    GET_MENU_ITEMS_BY_RESTAUARANT_ID_FAILURE,
    GET_MENU_ITEMS_BY_RESTAUARANT_ID_REQUEST,
    GET_MENU_ITEMS_BY_RESTAUARANT_ID_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS
 } from "./ActionType";
import { api } from "../../config/api"
import { CREATE_CATEGORY_FAILURE, CREATE_EVENTS_FAILURE, CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, DELETE_EVENTS_FAILURE, 
    DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS, DELETE_RESTUARANT_FAILURE, DELETE_RESTUARANT_REQUEST, 
    DELETE_RESTUARANT_SUCCESS, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, 
     GET_RESTUARANTS_EVENTS_FAILURE, GET_RESTUARANTS_EVENTS_SUCCESS,
     UPDATE_RESTUARANT_STATUS_FAILURE, UPDATE_RESTUARANT_STATUS_REQUEST, UPDATE_RESTUARANT_STATUS_SUCCESS, 
     GET_RESTUARANTS_EVENTS_REQUEST,CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, 
     GET_RESTUARANTS_CATEGORY_REQUEST , GET_RESTUARANTS_CATEGORY_FAILURE,GET_RESTUARANTS_CATEGORY_SUCCESS} from "../Reastuarant/ActionType";

export const createMenuItem = ({menu, jwt}) => {
    return async (dispatch) => {
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
    try {
        const { data } = await api.post("/api/admin/food",menu,{
            headers: {
                Authorization: `Bearer ${jwt}`
            },
        });
        dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload:data })
        console.log("created menu", data)
    } catch (error) {
        dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error })
        console.log("error", error)
    }
  };
};

export const getMenuItemsByRestuarantById = (reqData) => {
    return async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAUARANT_ID_REQUEST})
    try {
        const {data} = await api.get(
            `api/food/restaurant/${reqData.restaurantId}?vegitarian=${reqData.
                vegitarian}&sessional=${reqData.sessional}&nonveg=${reqData.nonveg}
                &food_category=${reqData.foodCategory}`,{
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        })
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAUARANT_ID_SUCCESS, payload:data })
        console.log("menu item by restaurant", data)
    } catch (error) {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAUARANT_ID_FAILURE, payload: error })
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
        console.log("get event.", res.data)
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
        console.log("create category.", res.data)
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
        dispatch({ type: GET_RESTUARANTS_CATEGORY_SUCCESS , payload: res.data })
        console.log("get restuarant category.", res.data)
    } catch (error) {
        dispatch({ type: GET_RESTUARANTS_CATEGORY_FAILURE, payload: error })
        console.log("error", error)
    }
 };
};