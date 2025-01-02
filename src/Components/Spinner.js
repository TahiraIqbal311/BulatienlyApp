import loading  from './loading.gif'
import React from 'react'
class Spinner extends React.Component{
    render(){
        return(
            <>
            <div className='text-center'>
            <img src={loading} alt="" />
            </div> 
            </>
        )
    }
}
export default Spinner