import React from 'react'
import { useState ,useEffect} from "react";
const Contact=() =>
{
    const [show, setShow] = useState(false);
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        
  const handleSubmit=(ev) =>
  {
    ev.preventDefault();
    window.localStorage.setItem('user',name);

 }
  
  useEffect(() => {
window.localStorage.getItem('user');

  },[name]);
  const  date=new Date().getHours()
  function greet(date)
  {
    switch(date) {
    case date<12:
       return "Good morning";

    case date >= 12 && date <= 14:
   return  "Good afternoon";
    case date > 12:
    return  "Good evening";
    
    case date > 20 && date < 24:return "Good night";

     
      
    default: return " hi ,"
   
  }}
  

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-mauve-600">
      <h1 className="text-3xl py-4 text-slate-200 font-bold uppercase">
        
     <span>{greet(date)}</span>   {localStorage.getItem("user")} !
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-auto p-4 rounded-lg  border border-red-900 bg-neutral-200"
      >
        <h1 className="text-amber-950 text-xl text-center capitalize font-bold">
          claro log rentals
        </h1>
        <div className="my-4 w-full ">
          <div className="w-full flex my-2  border-2  rounded-lg  border-mauve-800">
            <label
              htmlFor="name"
              className="h-full  p-2 w-[30%] bg-sky-950 text-neutral-300 capitalize font-bold"
            >
              {" "}
              name
            </label>
            <input
              value={name}
              type="text"
              name="name"
              onChange={(ev) => setName(ev.target.value)}
              placeholder="enter your name"
              className="flex-1 w-[70%] indent-3 font-bold outline-0 border-0"
            />
          </div>
          <div className="w-full flex my-2  border-2  rounded-lg  border-mauve-800">
            <label
              htmlFor="email"
              className="h-full  p-2 w-[30%] bg-sky-950 text-neutral-300 capitalize font-bold"
            >
              {" "}
              email
            </label>
            <input
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              type="email"
              name="email"
              placeholder="enter your email"
              className="flex-1 w-[70%] indent-3 font-bold outline-0 border-0"
            />
          </div>
          <div className="w-full  my-2 h-12 flex overflow-hidden border-2  rounded-lg  border-mauve-800">
            <label
              htmlFor="password"
              className=" h-full  py-auto text-center py-3 w-[35%]  bg-sky-950 text-neutral-300 capitalize font-bold text-[min(10vw,15px)]"
            >
              {" "}
              password
            </label>
            <input
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              max={6}
              min={0}
              maxLength={6}
              name="password"
              type={show ? "text" : "password"}
              placeholder="enter your password"
              className=" w-[70%] indent-3 font-bold h-full outline-0 border-0"
            />
            <span
              title={show ?" hide" : "show"}
              onClick={() => setShow(!show)}
              className="flex-1 bg-slate-400 h-full cursor-pointer  text-center py-2 px-2"
            >
              {show ? "🫣" : "👁️"}
            </span>
          </div>
        </div>
        <button className="font-bold cursor-pointer bg-taupe-700 text-slate-300  px-6 py-3 rounded-xl mx-auto flex justify-center w-[70%] hover:bg-mauve-500 hover:text-taupe-900 my-3">
          login
        </button>
      </form>
    </div>
  );
}

export default Contact