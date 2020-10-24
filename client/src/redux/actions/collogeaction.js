import {LIST_COLLEGE} from './types'
import {LIST_COLLEGE_STATE} from './types'
import axios from 'axios'

export const listCollege=(collegeList)=>(dispatch)=>{
   
   
            dispatch({
                type:LIST_COLLEGE,
                payload:collegeList
            })
        
    
}

export const listCollegeState=(state)=>(dispatch)=>{
   
    axios.get(`http://localhost:3005/college/state/${state}`)
    .then(res=>{
        console.log('state wise colleges',res.data)
        dispatch({
            type:LIST_COLLEGE_STATE,
            payload:res.data
        })
    
    })
    .catch(err=>console.log(err))

}

