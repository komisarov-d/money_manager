import React from 'react'
import './loader.css'
export const Loader = () => {

   return (
      <div className="loader-block">
         <div className="loader">
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
         </div>
      </div>

   )
}