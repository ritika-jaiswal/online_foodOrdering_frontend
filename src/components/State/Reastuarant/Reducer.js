import * as actionTypes from "./ActionType"

const initialState = {
    restaurants: [],
    usersRestaurant: null,
    restaurant: null,
    loading: false,
    error: null,
    events: [],
    restaurantsEvents: [],
    categories: [],
};

export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_RESTUARANT_REQUEST:
        case actionTypes.GET_ALL_RESTUARANTS_REQUEST:
        case actionTypes.DELETE_RESTUARANT_REQUEST:
        case actionTypes.UPDATE_RESTUARANT_REQUEST:
        case actionTypes.GET_RESTUARANT_BY_ID_REQUEST:
        case actionTypes.CREATE_CATEGORY_REQUEST:
        case actionTypes.GET_RESTUARANTS_CATEGORY_REQUEST:
            return {
                ...state,
                loading: false,
                error: null,
            };
            case actionTypes.CREATE_RESTUARANT_SUCCESS:
            return {
                ...state,
                loading: false,
                usersRestaurants: action.payload,
            };

        case actionTypes.GET_ALL_RESTUARANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload,
            };
        case actionTypes.GET_RESTUARANT_BY_ID_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    restaurant: action.payload,
                };
        case actionTypes.GET_RESTUARANT_BY_USER_ID_SUCCESS:
        case actionTypes.UPDATE_RESTUARANT_STATUS_SUCCESS:
        case actionTypes.UPDATE_RESTUARANT_SUCCESS:
            return {
                ...state,
                loading: false,
                usersRestaurant: action.payload,
            };
        case actionTypes.DELETE_RESTUARANT_SUCCESS:
                return {
                    ...state,
                    error: null,
                    loading: false,
                    restaurants: state.restaurants
                    .filter(
                        (item) => item.id !== action.payload
                    ),
                };

        case actionTypes.CREATE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: [...state.restaurantsEvents, action.payload],
            };
        case actionTypes.GET_ALL_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload,
            };
        case actionTypes.GET_RESTUARANTS_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurantsEvents: action.payload,
            };
        case actionTypes.DELETE_EVENTS_SUCCESS:
            return { 
                ...state, 
                isLoading: false, 
                events: state.events.filter((item)=> item.id !== action.payload),
                restaurantsEvents : state.restaurantsEvents.filter(
                    (item) => item.id !== action.payload
                ),
            };
         case actionTypes.CREATE_CATEGORY_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    categories: [...state.categories, action.payload],
                };
        case actionTypes.GET_RESTUARANTS_CATEGORY_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        categories: action.payload,
                    };
        case actionTypes.CREATE_RESTUARANT_FAILURE:
        case actionTypes.GET_ALL_RESTUARANTS_FAILURE:
        case actionTypes.DELETE_RESTUARANT_FAILURE:
        case actionTypes.UPDATE_RESTUARANT_FAILURE:
        case actionTypes.GET_RESTUARANT_BY_ID_FAILURE:
        case actionTypes.CREATE_EVENTS_FAILURE:
        case actionTypes.CREATE_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};