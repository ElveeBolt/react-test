import clsx from "clsx";

export function NavbarButton({ Icon, className, ...props }) {
    return (
        <button type="button" className={clsx(
            "flex items-center justify-center w-10 h-10 ms-1 text-xl rounded-full",
            "text-slate-400",
            "hover:bg-slate-100",
            className
        )} {...props}>
            <Icon className="w-6 h-6" />
        </button>
    );
}