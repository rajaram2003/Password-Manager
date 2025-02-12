const Manager = () => {
  return (
    <div>
<div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="bg-slate-800 mycontainer">

        <h1 className="text-4xl text font-bold text-center">
        <span className="text-yellow-300">&lt; </span>
        Pass
        <span className="text-yellow-300">OP /&gt;</span>
        </h1>
        <p className="text-yellow-300 text-lg text-center">Your own Password Manager</p>

      <div className="text-black flex flex-col p-4 gap-5 items-center">
        <input className="rounded-full border border-amber-300 w-full p-4 py-1" type="text" name="" id="" />
        <div className="flex w-full justify-between gap-5">
          <input className="rounded-full border border-amber-300 w-full p-4 py-1" type="text" name="" id="" />
          <input className="rounded-full border border-amber-300 w-full p-4 py-1" type="text" name="" id="" />
        </div>

        <button
      aria-label="Add Password"
      className="parent-button flex justify-center items-center gap-2 bg-amber-300 rounded-full px-4 py-2 w-fit hover:bg-amber-600 transition-colors cursor-pointer active:scale-95"
    >
      <lord-icon
        src="https://cdn.lordicon.com/slmechys.json"
        trigger="hover"
        target="button"
        style={{ width: "24px", height: "24px" }}
      ></lord-icon>
      Add Password
    </button>
    
      </div>
      </div>
    </div>
  )
}

export default Manager
