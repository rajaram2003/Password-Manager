import { useEffect, useState } from "react"
import { useRef } from "react"

const Manager = () => {
  const ref = useRef()
  const [form, setform] = useState({site: "", username: "", password: ""})
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if(passwords){
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])


  const showPassword = () => {
    alert('show the password');
    if(ref.current.src === "https://cdn-icons-png.flaticon.com/128/8231/8231687.png"){
    ref.current.src = "https://cdn-icons-png.flaticon.com/128/8231/8231416.png"
  }
  else{
  ref.current.src = "https://cdn-icons-png.flaticon.com/128/8231/8231687.png"
  }
  }

  const savePassword = () => {
    console.log(form)
    let passwords = localStorage.getItem("passwords");
    let passwordArray;
    if(passwords){
      passwordArray = JSON.parse(passwords)
    }
    else{
      passwordArray = []
    }
  }

  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value})
  }

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

      <div className="text-slate-800 flex flex-col p-4 gap-5 items-center">   
      <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className="rounded-full border border-amber-400 w-full p-4 py-1" type="text" name="site" id="" />  
        <div className="flex w-full justify-between gap-5">
          <input value={form.username} onChange={handleChange} placeholder="Enter Username" className="rounded-full border border-amber-400 w-full p-4 py-1" type="text" name="username" id="" />
          <div className="relative">

          <input value={form.password} onChange={handleChange} placeholder="Enter Password" className="rounded-full border border-amber-400 w-full p-4 py-1" type="text" name="password" id="" />
          <span className="absolute right-1 top-1 cursor-pointer" onClick={showPassword}>
      <img ref={ref} src="https://cdn-icons-png.flaticon.com/128/8231/8231416.png" alt="Eye Icon" className="w-6 h-6" />
    </span>

          </div>
        </div>

        <button onClick={savePassword}
      aria-label="Add Password"
      className="flex justify-center items-center gap-2 bg-amber-300 rounded-full px-6 py-2 w-fit hover:bg-amber-600 transition-colors cursor-pointer active:scale-95 border border-yellow-400"
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
