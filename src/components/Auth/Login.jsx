import React from 'react'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const submitHandler = (e) => {
      e.preventDefault();
      console.log("Email: ", email);
      console.log("Password: ", password);
      
      
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div 
        onSubmit={(e) =>{
          submitHandler(e);
        }}
        className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form className='flex flex-col gap-4 p-4 items-center justify-center'>
                <input value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                  
                }} 
                 required type="email" className='border-2 border-emerald-600 rounded-full py-3 px-4 text-xl text-black outline-none bg-transparent placeholder:text-zinc-400'  placeholder="Enter your email" />
                <input value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                 required type="password"  className='border-2 border-emerald-600 rounded-full py-3 px-4 text-xl m-3 text-black outline-none bg-transparent placeholder:zinc-400'  placeholder="Enter your password" />
                <button  className='border-2 border-none bg-emerald-600 rounded-full py-3 px-4 text-xl text-white outline-none  '>Login</button>
                
            </form>

        </div>
    </div>
  )
}

export default Login