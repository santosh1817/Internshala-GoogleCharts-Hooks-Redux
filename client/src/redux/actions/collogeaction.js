import {LIST_COLLEGE} from './types'
import axios from 'axios'

export const listCollege=(collegeList)=>(dispatch)=>{
   
   
            dispatch({
                type:LIST_COLLEGE,
                payload:collegeList
            })
        
    
}