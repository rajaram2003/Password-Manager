
const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

      <div className="logo font-bold text-white text-2xl">

      <span className="text-yellow-300">&lt; </span>
        Pass
      <span className="text-yellow-300">Mate /&gt;</span> 


        </div>
      <ul>
        <li className="flex gap-4">
          <a className="hover:font-bold hover:text-yellow-300" href="">Home</a>
          <a className="hover:font-bold hover:text-yellow-300" href="">About</a>
          <a className="hover:font-bold hover:text-yellow-300" href="">Contact</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
