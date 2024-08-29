import hero from "..//assets/hero.png"

const Hero = () => {
  return(
    <div>
        <img src={hero} className="w-full max-h-[600px] object-cover"/>
    </div>
  )
}

export default Hero;

//w-full take up to full width 
// max-h-[600px] specified max height to be 600px
// object-cover to keep the aspect ratio so that the image doesnt get distorted
