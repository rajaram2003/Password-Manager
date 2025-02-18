import { useEffect, useState } from "react"
import { useRef } from "react"
import { ToastContainer, toast } from 'react-toastify';

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
    toast.success('copied to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />


      <div className="mycontainer">

        <h1 className="text-4xl font-bold text-center">
          <span className="text-lime-500">&lt; </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-lime-300">Pass</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">Mate /&gt;</span>
        </h1>

        <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-600 dark:from-neutral-800 dark:via-gray-300 dark:to-white text-lg font-medium text-center">
          Secure. Simplify. Own your passwords.
        </p>


        <div className="text-slate-800 flex flex-col p-4 gap-5 items-center">

          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] w-full p-4 py-1 text-slate-400 font-medium transition-all duration-300 focus:ring-2 focus:ring-lime-400 focus:outline-none"
            type="text"
            name="site"
          />

          <div className="flex w-full justify-between gap-5">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] w-full p-4 py-1 text-slate-400 font-medium transition-all duration-300 focus:ring-2 focus:ring-lime-400 focus:outline-none"
              type="text"
              name="username"
            />

            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] w-full p-4 py-1 text-slate-400 font-medium transition-all duration-300 focus:ring-2 focus:ring-lime-400 focus:outline-none"
                type="password"
                name="password"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={showPassword}>
                <img ref={ref} src="https://cdn-icons-png.flaticon.com/128/8231/8231416.png" alt="Eye Icon" className="w-7 h-7" />
              </span>
            </div>
          </div>

          <button onClick={savePassword}
            aria-label="Add Password"
            className="flex justify-center items-center gap-2 font-medium text-slate-900 rounded-full px-6 py-2 w-fit cursor-pointer active:scale-95 border bg-gradient-to-r from-indigo-500 to-purple-500"
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
          <h2 className="font-extrabold text-2xl py-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-600 dark:from-neutral-800 dark:via-gray-300 dark:to-white">
            Your Passwords
          </h2>

          {passwordArray.length === 0 && <div className="text-red-600">No passwords to show 🐸</div>}

          {passwordArray.length != 0 &&
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-lime-400 text-slate-800">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">UserName</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-lime-200 text-slate-800">
                {passwordArray.map((item, index) => {
                  return <tr key={index}>
                    <td className="py-2 border border-white text-center">
                      <div className="flex items-center justify-center">
                        <a href={item.site} target="_blank">{item.site}</a>
                        <div className="lordiconcopy cursor-pointer" onClick={() => { copyText(item.site) }}>                      <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/depeqmsz.json"
                          trigger="hover">
                        </lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className="py-2 border border-white text-center">
                      <div className="flex items-center justify-center">
                        <span>{item.username}</span>
                        <div className="lordiconcopy cursor-pointer" onClick={() => { copyText(item.username) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover">
                          </lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className="py-2 border border-white text-center">
                      <div className="flex items-center justify-center ">
                        <span>{item.password}</span>
                        <div className="lordiconcopy cursor-pointer" onClick={() => { copyText(item.password) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover">
                          </lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="justify-center py-2 border border-white text-center">
                      <span>
                        <lord-icon
                          src="https://cdn.lordicon.com/vwzukuhn.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#e4e4e4,secondary:#242424,tertiary:#16c72e,quaternary:#000000"
                          style={{ "width": "25px", "height": "25px" }}>
                        </lord-icon>
                      </span>
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