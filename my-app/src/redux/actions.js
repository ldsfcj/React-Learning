/*
包含所有的action creator
 */


import {DECREMENT, INCREMENT} from "./action-types";

//同步的action都是返回对象
//异步的action返回的是函数
export const increment = (number) => ({
    type: INCREMENT,
    data: number
})

export const decrement = (number) => ({
    type: DECREMENT,
    data: number
})

//定义一个异步action
export const incrementAsync = (number) => {
    return dispatch => {
        setTimeout(() => {
            //1s 之后才去分发一个增加的action
            dispatch(increment(number));
        }, 1000)
    }
}