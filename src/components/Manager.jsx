import { useEffect, useState } from "react"
import { useRef } from "react"

const Manager = () => {
  const ref = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])


  const showPassword = () => {
    alert('show the password');
    if (ref.current.src === "https://cdn-icons-png.flaticon.com/128/8231/8231687.png") {
      ref.current.src = "https://cdn-icons-png.flaticon.com/128/8231/8231416.png"
    }
    else {
      ref.current.src = "https://cdn-icons-png.flaticon.com/128/8231/8231687.png"
    }
  }

  const savePassword = () => {
    setPasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log([...passwordArray, form])
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-amber-200 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#fef3c7_100%)]"></div>

      <div className="mycontainer">

        <h1 className="text-4xl text font-bold text-center">
          <span className="text-yellow-300">&lt; </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-violet-400 from-slate-800">Pass</span>
          <span className="text-yellow-300">Mate /&gt;</span>
        </h1>
        <p className="text-slate-800 text-lg text-center">Secure. Simplify. Own your passwords.</p>

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

        <div className="passwords">
          <h2 className="font-extrabold text-2xl py-4 text-transparent bg-clip-text bg-gradient-to-r to-violet-400 from-slate-800">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}

          {passwordArray.length != 0 &&
          <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className="bg-yellow-300 text-slate-800">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">UserName</th>
                <th className="py-2">Password</th>
              </tr>
            </thead>
            <tbody className="bg-yellow-100 text-slate-800">
              {passwordArray.map((item, index)=>{
              return <tr key={index}>
                <td className="py-2 border border-white text-center w-32">{item.site}</td>
                <td className="py-2 border border-white text-center w-32">{item.username}</td>
                <td className="py-2 border border-white text-center w-32">{item.password
                  }</td>
              </tr>
              })}
            </tbody>
          </table>}
        </div>

      </div>
    </>
  )
}

export default Manager
