
const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

        <div className="logo font-bold text-white text-2xl">

          <span className="text-lime-400">&lt; </span>
          Pass
          <span className="text-lime-400">Mate /&gt;</span>


        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold hover:text-lime-400" href="">Home</a>
            <a className="hover:font-bold hover:text-lime-400" href="">About</a>
            <a className="hover:font-bold hover:text-lime-400" href="">Contact</a>
          </li>
        </ul> */}

        <a
          href="https://github.com/rajaram2003/Password-Manager"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 cursor-pointer active:scale-95 border border-lime-400 transition-all">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub Icon" width="24" height="24" className="invert" />
            GitHub
          </button>
        </a>


      </div>
    </nav>
  )
}

export default Navbar
