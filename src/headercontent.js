import React from 'react';
const headerContent =()=>{
    return(
      <div className="content-heading">
        <h1 className="title">{album[0].title}</h1>
        <i>id :{album[0].id} </i>
        <i> userId: {album[0].userId}</i>
       </div>
    )
} 

export default headerContent;