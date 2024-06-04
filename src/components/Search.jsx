// import {useState} from 'react'
// import { useDispatch } from 'react-redux'
// import { getBooks } from '../utils/BooksSlice'

// const Search = () => {

//     const [searchValue,setSearchValue] = useState()
//     console.log(searchValue)
//     const dispatch = useDispatch()

//     // const searchVal = useSelector((store)=>store.getbooks.searchval)
//     // console.log(searchVal)

//     // useEffect(()=>{
//     // },[dispatch,searchValue])
//     const HandleOnSubmit = ()=>{
//         dispatch(getBooks(searchValue))
//     }

//   return (
//     <div className="flex justify-center">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchValue}
//         onChange={(e)=>setSearchValue(e.target.value)}
//         className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button 
//         onSubmit={()=>HandleOnSubmit()}
//       type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700">
//         Search
//       </button>
//     </div>
//   )
// }

// export default Search
