import clsx from "clsx"

export function NavbarKbd({ label, className }) {
    return (
        <kbd className={clsx(
            "text-xs px-2 py-1 ml-1 rounded-md leading-none",
            "bg-white text-slate-300",
            className
        )}>
            {label}
        </kbd>
    );
}