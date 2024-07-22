import { ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_SUCCESS, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, REMOVE_CART_ITEM_FAILURE, CLEARE_CART_REQUEST, CLEARE_CART_SUCCESS, CLEARE_CART_FAILURE } from "./ActionType";
import { api } from "../../config/api"

export const findCart = ({token}) => {
    return async (dispatch) => {
        dispatch({type:ADD_ITEM_TO_CART_REQUEST});
    try {
        const response = await api.get("/api/cart",{
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload:response.data })
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error })
        console.log("error", error)
    }
  };
};

export const getAllCartItems = (reqData) => {
    return async (dispatch) => {
    dispatch({ type: GET_ALL_CART_ITEMS_REQUEST})
    try {
        const response = await api.get(
            `api/carts/${reqData.cartId}/items`,{
            headers: {
                Authorization: `Bearer ${reqData.token}`
            }
        })
        dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload:response.data })
        console.log("get all cart item", data)
    } catch (error) {
        dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error })
        console.log("error", error)
    }
}
};

export const addItemToCart = ({reqData}) => {
    return async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    console.log("JWT", jwt)
    try {
        const { data } = await api.put(`/api/cart/add`, reqData.cartItem, {
            headers: {
                Authorization: `Bearer ${reqData.token}`
            }
        });
        console.log("add item to cart", data)
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
       
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.messsage })
        console.log("error", error)
    }
 };
};

export const updateCartItemRequest = (reqData) => {
    return async (dispatch) => {
    dispatch({type: UPDATE_CART_ITEM_REQUEST})
    try {
        const { data } = await api.put(`/api/cart-item/update`, reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        });
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
        console.log("update cart item Request.", data)
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.messsage })
        console.log("error", error)
    }
 };
};

export const removeCartItem = ({cartItemId, jwt}) => {
    return async (dispatch) => {
    dispatch({type: REMOVE_CART_ITEM_REQUEST})
    try {
        const res = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId })
        console.log("delete food.", res.data)
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.messsage })
        console.log("error", error)
    }
 };
};

export const clearCartAction = () => {
    return async (dispatch) => {
    dispatch({type: CLEARE_CART_REQUEST})
    try {
        const {data} = await api.put(`/api/cart/clear`, {},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        });
        dispatch({ type: CLEARE_CART_SUCCESS, payload: data })
        console.log("clear cart.", res.data)
    } catch (error) {
        dispatch({ type: CLEARE_CART_FAILURE, payload: error.messsage })
        console.log("error", error)
    }
 };
};
