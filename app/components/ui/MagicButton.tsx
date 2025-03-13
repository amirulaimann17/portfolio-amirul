const MagicButton = ({
    title,
    href,
    otherClasses,
}: {
    title: string;
    href: string;
    otherClasses?: string;
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-12 w-full md:w-60 mt-4 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
            {/* Gradient Animation: Blue → Teal → Green */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#14b8a6_50%,#22c55e_100%)]" />

            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
               bg-black px-7 text-mx font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
            >
                {title}
            </span>
        </a>
    );
};

export default MagicButton;
