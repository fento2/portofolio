
interface IButton {
    name: string;
    className?: string;
    icon?: string;
}

function Button(props: IButton) {
    return (
        <button className={`cursor-pointer hover:bg-cyan-500 px-7 py-4 rounded-[10px] border border-cyan-400 text-white flex items-center space-x-2 text-[14px] ${props.className}`}>
            <span>{props.name}</span>
            <img src={props.icon} alt="icon" className="w-5 h-5" />
        </button>
    );
}

export default Button;
