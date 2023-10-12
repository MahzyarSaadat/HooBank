import styles from "../style"
import {arrowUp} from "../assets"

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] 
    rounded-full p-[2px] bg-blue-gradient`}>
        <div className={`${styles.flexCenter} w-[100%] h-[100%] bg-primary 
        rounded-full flex-col`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-poppins font-bold text-[18px] leading-[23px]">
                    <span className="text-gradient">Get</span>
                </p>
                <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] object-contain" />
            </div>

            <p className="font-poppins font-bold text-[18px] leading-[23px]">
                <span className="text-gradient">Started</span>
            </p>

        </div>
    </div>
  )
}

export default GetStarted