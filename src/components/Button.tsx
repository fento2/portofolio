interface IButtonProps {
    name: string;
    className?: string;
    icon?: string;
}

function Button({ name, className, icon }: IButtonProps) {
    return (
        <button className={`px-6 py-2 rounded-[10px] bg-black/20 text-white border border-black/5 flex items-center space-x-2 text-[14px] ${className}`}>
            <span>{name}</span>
            <img src={icon} alt="icon" className="w-5 h-5" />
        </button>
    );
}

export default Button;
