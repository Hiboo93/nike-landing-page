import { arrowRight } from "../assets/icons/index.js"
import { bigShoe1 } from "../assets/images/index.js"
import Button from "../components/Button.jsx"
import { shoes, statistics } from "../constants/index.js"


const Hero = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container" id="home">
      <div className="relative xl:w-2/5 flex flex-col justify-items-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-poppins text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-roboto text-8xl max-sm:text-[72px] max-sm:leading-[82]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-poppins text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfor, and innovation for your active life.</p>
        <Button label={"Shop now"} iconURL={arrowRight}/>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {
            statistics.map((stat) => (
              <idv key={stat.label}>
                <p className="text-4xl font-roboto font-bold">{stat.value}</p>
                <p className="leading-7 font-roboto text-slate-gray">{stat.label}</p>
              </idv>
            ))
          }
      </div>
      </div>
      <div className="relavtive flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe1} alt="shoe collection" width={610} height={500} className="object-contain relative z-10" />

        <div>
          {
            shoes.map((shoe) => (
              <div key={shoe}>

              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero
