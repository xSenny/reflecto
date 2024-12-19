import { useState } from "react";
import Navbar from "../components/Navbar";
import { account, saveAccount } from "../lib/appwrite";

import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";



const Redirect = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const getQueryParam = (param: string) => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get(param);
  };
  useState(async () => {
    await account.createSession(getQueryParam('userId')!, getQueryParam('secret')!)
    await saveAccount().then(() => navigate('/journal'))
  })
  return (
    <>
      <div className="min-h-screen px-[162px] bg-background w-full text-text balsamiq-sans-regular flex flex-col justify-between items-center">
        <Navbar />
        <div className="w-[368px] space-y-6 bg-[#0D141E] rounded-[8px] px-[41px] py-[23px] flex items-center flex-col text-center">
          Please wait while we are saving your data!
          <Loader className="h-10 animate-spin"/>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default Redirect;
