import Link from "next/link";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="px-3 my-5">
                    <div className="card border py-5 px-3">
                        <div className="row">
                            <div className="col-xl-7">
                                <ul className="nav footer-menu justify-content-center justify-content-xl-start">
                                    <li className="nav-item">
                                        <Link href="/about" className="nav-link text-dark py-0 ps-0">About</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/terms" className="nav-link text-dark py-0 ps-0">Terms and Conditions</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/privacy" className="nav-link text-dark py-0 ps-0">Privacy and Policy</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact" className="nav-link text-dark py-0 ps-0">Contact</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-xl-5 text-center text-xl-end">
                                Copyright &copy; 2023 <a href="#">youtube-clone.com</a>. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
