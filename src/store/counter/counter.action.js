import { INCREASE, DECREASE } from './counter.types';

export const increaseCount = (payload) => {
    return { type: INCREASE, payload: payload };
}
export const decreaseCount = (payload) => {
    return { type: DECREASE, payload: payload };
}