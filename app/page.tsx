import { ShoppingBag } from "lucide-react";
import Button from "./components/Button";

export default function Home(){
  return (<>
    <div className="w-screen bg-[#252525] text-white h-16 flex justify-center items-center ">
      <h1 className="text-2xl mx-10">Learning Server Actions</h1>
   

    </div>
    <div className="flex justify-center items-center h-screen">
      <Button/>
    </div>
    
  </>)
}