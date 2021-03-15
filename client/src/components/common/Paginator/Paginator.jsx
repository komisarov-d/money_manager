// import React from 'react'

// export const Pagination = ({ totalItemsCount, pageSize, currentPage, onPageChanged = x => x, portionSize = 10 }) => {

//    let pageCount = Math.ceil(totalItemsCount / pageSize)
//    let pages = [];
//    for (let i = 1; i <= pageCount; i++) {
//       pages.push(i);
//    }
//    let portionCount = Math.ceil(pageCount / portionSize)
//    let [portionNumber, setPortionNumber] = useState(1)
//    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
//    let rightPortionNumber = portionNumber * portionSize

//    return (
//       <div className="">
//          <ul className="pagination">
//             <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
//             <li className="active"><a href="#!">1</a></li>
//             <li className="waves-effect"><a href="#!">2</a></li>
//             <li className="waves-effect"><a href="#!">3</a></li>
//             <li className="waves-effect"><a href="#!">4</a></li>
//             <li className="waves-effect"><a href="#!">5</a></li>
//             <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
//          </ul>
//       </div>
//    )
// }