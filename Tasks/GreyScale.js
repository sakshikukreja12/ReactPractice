import React from 'react'
const grayScale= (WrappedComponent)=>{
    return function GrayScale(props){
        return (
            <div style={{filter:"grayscale(100%)"}}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}
export default grayScale 