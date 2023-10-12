import styles from "../style"
import { discount , robot } from "../assets"
import GetStarted from "./GetStarted"

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col
    ${styles.paddingY}`}>
      <div className={`flex-1 
      flex-col ${styles.flexStart} xl:px-0 ${styles.paddingX}`}>
        <div className="flex flex-row  items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">

          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Dsicount For {" "}
            <span className="text-white">1 Mouth</span> Account
          </p>
        </div>

        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="flex-1 text-white ss:text-[72px] text-[52px] leading-[75px] font-poppins font-bold ss:leading-[100px]">
            The Next
            <br className="sm:block hidden" /> {" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>

        </div>

        <h1 className="text-white w-full ss:text-[68px] text-[52px] leading-[75px] font-poppins font-bold ss:leading-[100px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] z-[5] relative"/>
        <div className="absolute w-[40%] h-[35%] top-0 z-[0] pink__gradient" />
        <div className="absolute w-[80%] h-[80%] bottom-40 rounded-full z-[1] white__gradient" />
        <div className="absolute w-[50%] h-[50%] bottom-20 right-20 z-[0] blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
      </div>
    </section>
  )

export default Hero