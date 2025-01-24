import map from '../assets/images/map.png'

const Location = () => {
  return (
    <>
    <div className="location flex flex-col items-center pt-5">
        <h1>Our Location</h1>
        <div className="map">
        <img src={map} />
        </div>
    </div>
    </>
  )
}

export default Location