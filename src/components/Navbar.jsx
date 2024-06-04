import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font shadow-xl">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">StoryScout</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/' className="mr-5 hover:text-gray-900">Search Book</Link>
      <Link to='/mybooks' className="mr-5 hover:text-gray-900">My Books</Link>
    </nav>
  </div>
</header>
  )
}

export default Navbar