import { Footer } from "widgets/footer";
import { Navbar } from "widgets/navbar";
import { Header } from "widgets/header/Header";



export function Layout({ title, children }) {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4">
                <Header title={title} />
                <div className="flex">
                    {children}
                </div>
            </main>
            <Footer />
        </>

    )
}