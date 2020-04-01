import React from 'react'


const Avatars = ({firstName, url}) => {

    return (
        <div >
            <img src ={url}/>
            <p>{firstName} Simpson</p>
        </div>
    )
}   

export default Avatars