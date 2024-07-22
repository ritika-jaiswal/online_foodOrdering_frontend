import * as actionTypes from "./ActionType"

const initialState = {
    orders: [],
    loading: false,
    error: null,
    
};

export const restaurantOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RESTAURANTS_ORDERS_REQUEST:
        case actionTypes.UPDATE_ORDER_STATUS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.GET_RESTAURANTS_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
            };
        case actionTypes.UPDATE_ORDER_STATUS_SUCCESS:
            const updateOrder = state.orders.map((order) =>
            order.id === action.payload.id?action.payload:order);
            return {
                ...state,
                loading: false,
                orders: updateOrder
            };
        case actionTypes.GET_RESTAURANTS_ORDERS_FAILURE:
        case actionTypes.UPDATE_ORDER_STATUS_FAILURE:
            return {...state, loading:false, error:action.error};

        default:
            return state;
    }
};