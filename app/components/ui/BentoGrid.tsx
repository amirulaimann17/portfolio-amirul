import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    // Tech stack lists for id === 3
    const leftLists = ["SwiftUI", "Flutter", "Typescript"];
    const rightLists = ["Java", "NextJS", "MySQL"];

    // Only render for id 1-4
    if (id < 1 || id > 4) return null;

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
                "bg-gradient-to-r from-blue-900 to-teal-800 ", // Updated gradient
                className
            )}
        >

            <div className="h-full">
                {/* Background Image */}
                {img && (
                    <div className="w-full h-full absolute">
                        <img
                            src={img}
                            alt="Bento Image"
                            className={cn(imgClassName, "object-cover object-center")}
                        />
                    </div>
                )}

                {/* Spare Image */}
                {spareImg && (
                    <div className="absolute right-0 -bottom-5">
                        <img
                            src={spareImg}
                            alt="Spare Image"
                            className="object-cover object-center w-full h-full"
                        />
                    </div>
                )}

                {/* Content */}
                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
                        id === 4 && "text-left items-start"
                    )}
                >
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                        {description}
                    </div>
                    <div className="font-sans text-lg lg:text-2xl max-w-96 font-bold z-10">
                        {title}
                    </div>

                    {id === 4 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            {/* Left Column */}
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-4 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-4 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
