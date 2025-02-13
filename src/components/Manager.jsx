const Manager = () => {
  return (
    <div>
<div className="absolute inset-0 -z-10 h-full w-full bg-amber-100 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#fef3c7_100%)]"></div>

      <div className= "mycontainer">

        <h1 className="text-4xl text font-bold text-center">
        <span className="text-yellow-300">&lt; </span>
        <span className="hover:text-yellow-300">Pass</span>
        <span className="text-yellow-300">Mate /&gt;</span>
        </h1>
        <p className="text-yellow-300 text-lg text-center">Secure. Simplify. Own your passwords.</p>

      <div className="text-black flex flex-col p-4 gap-5 items-center">
        <input className="rounded-full border border-amber-300 w-full p-4 py-1" type="text" name="" id="" />
        <div className="flex w-full justify-between gap-5">
          <input className="rounded-full border border-amber-300 w-full p-4 py-1" type="text" name="" id="" />
          <input className="rounded-full border border-amber-300 w-full p-4 py-1" type="text" name="" id="" />
        </div>

        <button
      aria-label="Add Password"
      className="flex justify-center items-center gap-2 bg-amber-300 rounded-full px-6 py-2 w-fit hover:bg-amber-600 transition-colors cursor-pointer active:scale-95"
    >
      <lord-icon
        src="https://cdn.lordicon.com/slmechys.json"
        trigger="hover"
        target="button"
        style={{ width: "24px", height: "24px" }}
      ></lord-icon>
      Save Password
    </button>

      </div>
      </div>
    </div>
  )
}

export default Manager
