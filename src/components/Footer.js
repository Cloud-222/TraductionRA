import { TbBrandGithubFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-500 mt-50 ">
      <div className="flex justify-center items-center align-items h-30">
        <a href="https://github.com/Cloud-222" target= "_blank" ><TbBrandGithubFilled className=" size-7 text-gray-400 hover:drop-shadow-[0_0_2px_rgba(255,255,255,1)] hover:text-white transform hover:scale-110 duration-300"></TbBrandGithubFilled></a>
        
      </div>
      
    
  </footer>
  );
}
