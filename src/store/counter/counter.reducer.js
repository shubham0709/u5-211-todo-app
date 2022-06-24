import { INCREASE, DECREASE } from "./counter.types";

const initialState = {
    count: 0
}
export const counterReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case INCREASE: return {
            ...state, count: state.count + payload
        }
        case DECREASE: return {
            ...state, count: state.count - payload
        }
        default: {
            return state;
        }
    }
}