import MissionImg from '../assets/images/missionimg.png'
const Mission = () => {
  return (
    <>
    <div className="mission flex justify-center p-12">
        <div className="left gap-5 flex flex-col items-center justify-center">
            <h1>Our Mission</h1>
            <p>Based on the statement of God Almighty, “O people! We created you all from a male and a female, and we made you into nations and tribes so that you may know one another” (Surah Al Hujrat Ayah 13). The Islamic Center (NIC) plays a vital and holistic role in bringing the views of the different spectrums of Islamic society together by creating a common language of dialogue without violating the right Islamic rules.</p>
            <h2>We need your support to start building the masjid this year</h2>
            <p className='yellow'>Please help us with your donations on our donation website</p>
            <button>Donate Now</button>
        </div>
        <div className="right flex flex-col items-center">
            <img src={MissionImg} />
            <h3>
            Salatul Eid on 1st of May 2022
            </h3>
        </div>
    </div>
    </>
  )
}

export default Mission