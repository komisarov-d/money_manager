import React from 'react'

import style from './Planning.module.scss'
export const Planning = () => {
   document.title = 'Planning'

   return (
      <div>
         <div class="page-title">
            <h3>Планирование</h3>
            <h4>12 212</h4>
         </div>

         <section>
            <div>
               <p>
                  <strong>Девушка:</strong>
        12 122 из 14 0000
      </p>
               <div class="progress" >
                  <div
                     class="determinate green"
                     style="width:40%"
                  ></div>
               </div>
            </div>
         </section>
      </div>
   )
}