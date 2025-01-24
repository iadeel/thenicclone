import logo from '../assets/images/logo.svg';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className="header flex justify-between items-center p-5" >
        <div className="logo cursor-pointer">
            <img src={logo} height={99.69} />
        </div>
        <div className="nav">
            <ul className='flex items-center gap-5 text-xl font-semibold text-white'>
                <li className='text-yellow-400'>Home</li>
                <li>About NIC  </li>
                <li>The Masjid</li>
                <li>Education</li>
                <li>Team</li>
                <li>Contact Us</li>
                <li className='border-2 px-2 py-1 rounded-md cursor-pointer'>Support</li>
            </ul>
        </div>
        <div className="socials flex text-white gap-3">
        <FaFacebook className=' cursor-pointer' size={30} />
        <FaInstagram className=' cursor-pointer' size={30} />
        <FaYoutube className=' cursor-pointer' size={30}/>
        </div>
    </div>
    </>
  )
}

export default Header