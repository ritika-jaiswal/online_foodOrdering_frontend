
import { api } from "../../config/api"
import { CREATE_INGREDIENST_CATEGORY_REQUEST, CREATE_INGREDIENST_CATEGORY_FAILURE, CREATE_INGREDIENST_CATEGORY_SUCCESS, GET_INGREDIENTS, CREATE_INGREDIENST_SUCCESS, GET_INGREDIENST_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionType";

export const getIngredientsOfRestaurants= ({id, jwt}) => {
    return async (dispatch) => {
    try {
        const response = await api.get(`/api/admin/ingredients/restaurants/${id}`,{
            headers: {
                Authorization: `Bearer ${jwt}`
            },
        });
        console.log("get all ingredients" , response.data);
        dispatch({ type: GET_INGREDIENTS, payload:response.data })
    } catch (error) {
        console.log("error", error)
    }
  };
};

export const createIngredient = ({data, jwt}) => {
    return async (dispatch) => {
    try {
        const response = await api.post(`api/admin/ingredients`, data,{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        console.log("create ingredients....", response.data)
        dispatch({ type: CREATE_INGREDIENST_SUCCESS, payload:response.data })
       
    } catch (error) {
        console.log("error",error);
    }
}
};

export const getIngredientCategory = ({id, jwt}) => {
    return async (dispatch) => {
    try {
        const response = await api.get(`api/admin/ingredients/restaurant/${id}/category`, data,{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        console.log("get ingredients category", response.data)
        dispatch({ type: GET_INGREDIENST_CATEGORY_SUCCESS, payload:response.data })
       
    } catch (error) {
        console.log("error",error);
    }
}
};

export const updateStockOfIngredienst = ({id, jwt}) => {
    return async (dispatch) => {
    try {
        const {data} = await api.put(`api/admin/ingredients/${id}/stoke`, {},{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        console.log("update ingredients stock", data)
        dispatch({ type: UPDATE_STOCK, payload:data })
       
    } catch (error) {
        console.log("error",error);
    }
}
};

