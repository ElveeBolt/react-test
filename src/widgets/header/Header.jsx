import { useTitle } from "shared/lib/browser/dom";


export function Header({title}) {
    useTitle(title)
    
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}