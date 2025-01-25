import { FaKaaba } from "react-icons/fa";
import feed1 from '../assets/images/feed1.png'
import feed2 from '../assets/images/feed2.png'
import { FaFacebookF } from "react-icons/fa";
import multipost from '../assets/images/multipost.png'

const Feeds = () => {
  return (
    <>
    <div className="feeds flex justify-between">
      <div className="Feedsleft">
        <div className="timetable gap-5 flex flex-col items-center justify-end">
          <p>Prayer Timings</p>
          <FaKaaba size={"20px"}/>
          <table>
            <tr>
              <td>fajar</td>
              <td align={"right"}>06:02 Am</td>
            </tr>
            <tr>
              <td>Zuhar</td>
              <td align={"right"}>12:18 pm</td>
            </tr>
            <tr>
              <td>Asar</td>
              <td align={"right"}>13:48 pm</td>
            </tr>
            <tr>
              <td>Maghrib</td>
              <td align={"right"}>16:11 PM</td>
            </tr>
            <tr>
              <td>Isha</td>
              <td align={"right"}>18:08 PM</td>
            </tr>
            <tr>
              <td>Jummah</td>
              <td align={"right"}>11:46 AM</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="feedsright flex flex-col items-center justify-between gap-10">
        <h1>Facebook Feeds</h1>
        <div className="cards flex gap-4 items-center justify-center">
          <div className="card flex flex-col">
            <img src={feed1} alt="" />
            <div className="cardcontent flex justify-end items-center">
            <FaFacebookF size={"22px"} color={"#0d6cac"}/>
            </div>
            <img src={multipost} className="multiposticon" />
          </div>
          <div className="card flex flex-col">
            <img src={feed2} alt="" />
            <div className="cardcontent flex justify-end items-center">
            <FaFacebookF size={"22px"} color={"#0d6cac"} />
            </div>
            <img src={multipost} className="multiposticon" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Feeds