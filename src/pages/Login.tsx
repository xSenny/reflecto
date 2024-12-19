import { useState } from "react";
import Navbar from "../components/Navbar";
import { loginOauth, session } from "../lib/appwrite";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [signState, setSignState] = useState<'sign-in' | 'sign-up'>('sign-in')
  const navigate = useNavigate()
  useState(async () => {
    const s = await session();
    if (!s) {
      console.log('Not logged in')
    } else {
      navigate('/dashboard')
    }
  })
  return (
    <>
      <div className="min-h-screen px-[162px] bg-background w-full text-text balsamiq-sans-regular flex flex-col justify-between items-center">
        <Navbar />
        <div className="w-[368px] space-y-6 bg-[#0D141E] rounded-[8px] px-[41px] py-[23px]">
          <div className="flex justify-between">
            <p className={`${signState !== 'sign-in' && 'text-[#707172]'} cursor-pointer`} onClick={() => setSignState('sign-in')}>Sign in</p>
            <p className={`${signState !== 'sign-up' && 'text-[#707172]'} cursor-pointer`} onClick={() => setSignState('sign-up')}>Sign up</p>
          </div>
          <div className="flex h-full flex-col justify-center items-center">
            <button onClick={() => loginOauth()} className="px-6 py-3 bg-secondary rounded-xl flex gap-2 items-center"><FaGoogle />Continue with Google</button>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default Login;
