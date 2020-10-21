import React ,{useState,useEffect} from 'react'
import {listCollege} from '../redux/actions/collogeaction'
import {connect} from 'react-redux'
import store from '../store/store'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {Chart} from 'react-google-charts'


const List=(props)=>{
    const [isLoaded,setisLoaded]=useState(false)
    const [test,setTest]=useState(true)
    const [list,setList]=useState([])

    let Karnataka=0,Maharastra=0,Rajasthan=0;
    
    useEffect(()=>{

        axios.get('http://localhost:3005/college/allcollege')

        .then(res=>{
            setList(res.data)
            props.listCollege(res.data)
            console.log(res.data,' in list')
        })
        .catch(err=>console.log(err))
        
        setisLoaded(true)
    
    },[])
    return(
         <div>
       
        { isLoaded  ?(<div>
        <h3>Pie Chart</h3>
        {list.forEach(ele=>{
           if(ele.state==="Karnataka"){
               {Karnataka++}
              
           }else if(ele.state=="Rajasthan"){
               {Rajasthan++}
           }else{
               {Maharastra++}
            }
        })}
        <Chart chartType="PieChart"
         loader={<div>Loading Chart</div>}
        data={[
            ["state","college"],
            ["Karnataka",Karnataka],
            ["Maharastra",Maharastra],
            ["Rajasthan",Rajasthan]
        ]}
        options={{
            title: 'Charts By College',
            is3D: true,
          }}
          rootProps={{ 'data-testid': '2' }}/>
        </div>):
        (null)}</div>
    )
}
const mapStateToProps = (state) => ({
    list:state.college.item
    });
    const mapActionToProps = {
    listCollege
    };
    
    export default withRouter(connect(mapStateToProps, mapActionToProps)(List));