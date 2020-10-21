import {LIST_COLLEGE} from '../actions/types'

const initialState={
    item:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case LIST_COLLEGE:
            return{
                ...state,
                item:action.payload
            };
            default:
                return state
    }
}