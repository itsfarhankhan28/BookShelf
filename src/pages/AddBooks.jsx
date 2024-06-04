import { useEffect,useState } from "react"

const AddBooks = () => {

    const [books,setBooks] = useState()

    const getBooks = ()=>{
        const retrivedBooks = localStorage.getItem('mybooks')

        const booksdata = JSON.parse(retrivedBooks)
        setBooks(booksdata)
    }

    const HandleOnClick = ()=>{
        localStorage.removeItem('mybooks')
    }

    useEffect(()=>{
        getBooks()
    },[])

    if(!books){
        return(
            <>
            <div className="w-full flex justify-center items-center py-20 ">
                <h1 className="text-5xl font-semibold text-gray-400">No book found</h1>
            </div>
            </>
        )
    }

  return (
    <>
    <div className="mt-10">
        <div className="flex justify-center items-center">
            <h1 className="font-semibold text-3xl">My BookShelf</h1> 
        </div>
        <div className="w-full flex justify-center items-center py-10 flex-wrap gap-10">
        {books?.map((data)=>{
            return (
                <>
                <div className="w-[350px] h-[200px] rounded-2xl shadow-xl flex gap-3">
                    <div className="w-[40%] flex flex-col justify-center items-center border-r-2">
                        <h1>Book</h1>
                        <h1>Image</h1>
                    </div>
                    <div className="w-[60%] flex flex-col gap-3 justify-center items-start">
                        <h1 className="font-semibold">Title: <span className="font-normal">{data.title}</span></h1>
                        <h1 className="font-semibold">Author: <span className="font-normal">{data.author}</span></h1>
                    </div>
                </div>
                </>
            )
        })}
        </div>
        <div className="flex justify-center items-center">
            <button 
            onClick={()=>HandleOnClick()}
            className="px-5 py-1 rounded-xl bg-black text-white">
                Clear BookShelf
            </button>
        </div>
    </div>
    </>
  )
}

export default AddBooks
