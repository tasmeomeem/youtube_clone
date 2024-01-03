import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout(props) {
    return (
        <>
            <Header />

            <Sidebar />

            <main className="main">
                {props.children}
            </main>

            <Footer />
        </>
    );
}

export default Layout;