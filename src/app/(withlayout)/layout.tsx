'use client'
import {useState,useEffect} from 'react'
import { Layout } from "antd";
import Sidebar from "../components/ui/Sidebar";
import Contents from "../components/ui/Contents";
import {  isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const DashboardLayout= ({children}:{children:React.ReactNode}) => {
const userLoggedIn = isLoggedIn()
const [loading,setLoading] = useState(false)
const router = useRouter()

 useEffect(()=>{
  if(!userLoggedIn){
    router.push('/login')
  }
  setLoading(true)
 },[router,userLoggedIn])

if(!loading) {
  return <p>Loading...</p>
}

    return (
      <Layout hasSider>
        <Sidebar />
          <Contents> {children}</Contents>
        </Layout>
    );
  };
  
  export default DashboardLayout;