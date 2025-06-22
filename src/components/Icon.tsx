interface IIcon {
    name: string;
    icon: string;
    ClassName?: string;
}
export const warna2: string = "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700";

function Icon(props: IIcon) {
    return (
        <div className="w-30 h-38 text-[13px] sm:w-36 sm:h-40 sm:text-[17px]">
            <div className={`cursor-pointer rounded-4xl bg-gray-600/75 border-2 border-black 
      w-full h-full flex flex-col justify-center items-center text-center
      transition-all duration-300 transform
      hover:scale-105 hover:shadow-lg ${props.ClassName}`}>

                <img
                    src={props.icon}
                    alt="icon"
                    className="w-24 h-24 mb-2"
                />
                <span className={`font-semibold tracking-widest ${warna2}`}>
                    {props.name}
                </span>
            </div>
        </div>
    );
}

export default Icon;
