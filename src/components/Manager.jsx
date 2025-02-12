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

      <div className="text-white flex flex-col p-4 gap-5">
        <input className="rounded-full border border-amber-300 w-full p-4 py-1" type="text" name="" id="" />
        <div className="flex w-full justify-between gap-5">
          <input className="rounded-full border border-amber-300 w-full p-4 py-1" type="text" name="" id="" />
          <input className="rounded-full border border-amber-300 w-full p-4 py-1" type="text" name="" id="" />
        </div>
        <button>Add Password</button>
      </div>
      </div>
    </div>
  )
}

export default Manager
