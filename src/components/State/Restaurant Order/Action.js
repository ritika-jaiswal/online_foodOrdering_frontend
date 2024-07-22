
import { api } from "../../config/api"
import { UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, GET_RESTAURANTS_ORDERS_REQUEST, GET_RESTAURANTS_ORDERS_SUCCESS, GET_RESTAURANTS_ORDERS_FAILURE } from "./ActionType";

export const updateOrderStatus= ({orderId, orderStatus, jwt}) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_ORDER_STATUS_REQUEST});
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/${orderStatus}`,{},{
            headers: {
                Authorization: `Bearer ${jwt}`
            },
        });
        const updatedOrder = response.data;
        console.log("updated order" , updatedOrder);
        dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload:updatedOrder })
    } catch (error) {
        dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error })
        console.log("error", error)
    }
  };
};

export const fetchRetaurantsOrder = ({restaurantId, orderStatus, jwt}) => {
    return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_ORDERS_REQUEST})
    try {
        const {data} = await api.get(`api/admin/order/restaurant/${restaurantId}`,{
            params: {order_status: orderStatus},
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        const orders = data;
        console.log("restaurants orders,....", orders)
        dispatch({ type: GET_RESTAURANTS_ORDERS_SUCCESS, payload:orders })
       
    } catch (error) {
        dispatch({ type: GET_RESTAURANTS_ORDERS_FAILURE, payload: error })
    }
}
};

