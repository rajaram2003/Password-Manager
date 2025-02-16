import { useEffect, useState } from "react"
import { useRef } from "react"

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
  }


  const showPassword = () => {
    passwordRef.current.type = "text"
    console.log(ref.current.src)
    if (ref.current.src === "https://cdn-icons-png.flaticon.com/128/8231/8231687.png") {
      ref.current.src = "https://cdn-icons-png.flaticon.com/128/8231/8231416.png"
      passwordRef.current.type = "password"
    }
    else {
      passwordRef.current.type = "text"
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
      <div className="absolute inset-0 -z-1 h-full w-full bg-violet-200 bg-gradient-to-b from-white to-fef3c7"></div>


      <div className="mycontainer">

        <h1 className="text-4xl text font-bold text-center">
          <span className="text-yellow-300">&lt; </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-violet-400 from-slate-800">Pass</span>
          <span className="text-yellow-300">Mate /&gt;</span>
        </h1>
        <p className="text-slate-800 text-lg font-medium text-center">Secure. Simplify. Own your passwords.</p>

        <div className="text-slate-800 flex flex-col p-4 gap-5 items-center">
          <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className="rounded-full border border-amber-400 w-full p-4 py-1" type="text" name="site" id="" />
          <div className="flex w-full justify-between gap-5">
            <input value={form.username} onChange={handleChange} placeholder="Enter Username" className="rounded-full border border-amber-400 w-full p-4 py-1" type="text" name="username" id="" />
            <div className="relative">

              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder="Enter Password" className="rounded-full border border-amber-400 w-full p-4 py-1" type="password" name="password" id="" />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={showPassword}>
                <img ref={ref} src="https://cdn-icons-png.flaticon.com/128/8231/8231416.png" alt="Eye Icon" className="w-7 h-7" />
              </span>


            </div>
          </div>

          <button onClick={savePassword}
            aria-label="Add Password"
            className="flex justify-center items-center gap-2 font-medium text-slate-800 bg-amber-300 rounded-full px-6 py-2 w-fit hover:bg-violet-400 transition-colors cursor-pointer active:scale-95 border border-yellow-400"
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
          {passwordArray.length === 0 && <div className="text-red-600">No passwords to show 🐸</div>}

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
                {passwordArray.map((item, index) => {
                  return <tr key={index}>
                    <td className="py-2 border border-white text-center">
                      <div className="flex items-center justify-center">
                      <a href={item.site} target="_blank">{item.site}</a>
                      <div className="lordiconcopy cursor-pointer" onClick={copyText(item.site)}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "padding-top": "3px", "padding-left": "3px" }}
                          src="https://cdn.lordicon.com/depeqmsz.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                      </div>
                    </td>

                    <td className="py-2 border border-white text-center">
                      <div className="flex items-center justify-center">
                      <span>{item.username}</span>
                    <div className="lordiconcopy cursor-pointer" onClick={copyText(item.username)}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "padding-top": "3px", "padding-left": "3px" }}
                          src="https://cdn.lordicon.com/depeqmsz.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                      </div>
                    </td>

                    <td className="py-2 border border-white text-center">
                    <div className="flex items-center justify-center ">
                      <span>{item.password}</span>
                    <div className="lordiconcopy cursor-pointer" onClick={copyText(item.password)}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "padding-top": "3px", "padding-left": "3px" }}
                          src="https://cdn.lordicon.com/depeqmsz.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                      </div>
                    </td>
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
