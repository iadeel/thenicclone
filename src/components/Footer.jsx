import logo from '../assets/images/logoBlue.png'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className="footer flex justify-around items-center">
        <div className="footer1 flex flex-col justify-evenly">
            <img src={logo} />
            <p>© 2023 thenic.se</p>
        </div>
        <div className="footer2">
            <ul className='flex flex-col gap-2'>
                <li>Home</li>
                <li>About NIC</li>
                <li>The Masjid</li>
                <li>Education</li>
                <li>Team</li>
                <li>Contact Us</li>
                <li className='footerCTN'>Support</li>
            </ul>
        </div>
        <div className="footer3 gap-5 flex flex-col justify-start items-center">
            <h1>Follow Us</h1>
            <div className="socials flex gap-2">
                <FaFacebook className=' cursor-pointer' size={30} color={"#0d6cac"}/>
                <FaInstagram className=' cursor-pointer' size={30} color={"#0d6cac"} />
                <FaYoutube className=' cursor-pointer' size={30} color={"#0d6cac"}/>
            </div>
            <p>Email: contact@thenic.com</p>
        </div>
    </div>
    </>
  )
}

export default Footer