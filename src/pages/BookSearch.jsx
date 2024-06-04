/* eslint-disable react-hooks/exhaustive-deps */
// import Search from '../components/Search'
// import Books from "../components/Books"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"

const BookSearch = () => {

    const [searchValue,setSearchValue] = useState('Harry Potter')
    const [books,setBooks] = useState()
    const [bookshelf,setBookshelf] = useState([])

    const getBooks = async()=>{
        try{
            const res = await axios.get(`https://openlibrary.org/search.json?q=${searchValue}&limit=10&page=1`)
            const data = res.data
            console.log(data)
            setBooks(data)
        }catch(err){
            console.log(err)
        }
    }

    const AddToBookShelf = (title,authorname)=>{
       setBookshelf([...bookshelf,{title:title,author:authorname}])
    }

    const AddToLocalStorage = (bookshelf)=>{
        const booksJson = JSON.stringify(bookshelf)
        localStorage.setItem("mybooks",booksJson)
    }

    useEffect(()=>{
        getBooks()
    },[searchValue])


  return (
    <div className="md:p-10 xxsm:p-5 flex flex-col gap-10">
        <div className="flex xxsm:flex-col xxsm:gap-5 md:flex-row md:justify-between items-center">
            <h1 className="text-3xl font-semibold">Available books:-</h1>
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e)=>setSearchValue(e.target.value)}
                    className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                // onClick={()=>HandleOnClick()}
                type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700">
                    Search
                </button>
            </div>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap gap-10">
            {books ? books?.docs?.map((data)=>{
                return (
                    <>
                    <div className="w-[350px] h-[200px] rounded-2xl shadow-xl flex gap-3">
                        <div className="flex flex-col justify-center items-center w-[40%] border-r-2">
                            <h1>Book</h1>
                            <h1>Image</h1>
                        </div>
                        <div className="flex justify-center items-start flex-col w-[60%] gap-3">
                            <h1 className="font-semibold">Book title: <span className="font-normal">{data.title}</span></h1>
                            <h1 className="font-semibold">Edition Count: <span className="font-normal">{data.edition_count}</span></h1>
                            <div className="w-full flex justify-center">
                                <button 
                                onClick={()=>AddToBookShelf(data.title,data.author_name)}
                                className="px-5 py-1 bg-black text-white rounded-xl">
                                    <h1>Add to BookShelf</h1>
                                </button>
                            </div>
                            <div className="w-full flex justify-center">
                                <Link to='/mybooks'>
                                    <button 
                                    onClick={()=>AddToLocalStorage(bookshelf)}
                                    className="px-5 py-1 bg-black text-white rounded-xl">
                                        <h1>Visit BookShelf</h1>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }) : <Loader/>}
        </div>
    </div>
  )
}

export default BookSearch
