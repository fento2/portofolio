import Image from "next/image";

interface IIcon {
    name: string;
    icon: string;
    ClassName?: string;
}
export const warna2: string = "text-indigo-600";

function Icon(props: IIcon) {
    return (
        <div className="w-30 h-38 text-[13px] sm:w-36 sm:h-40 sm:text-[17px]">
            <div className={`cursor-pointer rounded-3xl shadow-2xl 
      w-full h-full flex flex-col justify-center items-center text-center
      transition-all duration-300 transform
      hover:scale-110 hover:shadow-2xl bg-neutral-900 border-none  ${props.ClassName}`}>

                <Image
                    src={props.icon}
                    alt="icon"
                    className="w-24 h-24 mb-2"
                /> 
                <span className={`font-semibold tracking-widest text-white`}>
                    {props.name}
                </span>
            </div>
        </div>
    );
}

export default Icon;
