'use client';

import Link from "next/link";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";

function Header() {
    const router = useRouter();

    const openMenu = () => document.querySelector('.sidebar').classList.add('open');

    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="row px-3">
                        <div className="col">
                            <div className="d-flex align-items-center gap-3">
                                <div>
                                    <button
                                        className="menu-open-btn"
                                        title="Menu Open"
                                        onClick={openMenu}
                                    >
                                        <i className="ph ph-list"></i>
                                    </button>
                                </div>

                                <div>
                                    <Link href="/">
                                        <img className="logo" src="/assets/images/logo.png" alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col search-bar d-none d-lg-block">
                            <div className="d-flex align-items-center justify-content-center gap-3">
                                <div className="search-input-group">
                                    <input type="text" className="search-input" name="search" id="search" placeholder="Search" />

                                    <button
                                        className="btn search-btn"
                                        onClick={() => router.push('/search/' + document.querySelector('#search').value.replace(' ', '-'))}
                                    >
                                        <i className="ph ph-magnifying-glass"></i>
                                    </button>
                                </div>

                                <div className="d-block d-lg-none">
                                    <button
                                        className="btn btn-circle"
                                        title="Close"
                                        onClick={() => document.querySelector('.search-bar').classList.remove('show')}
                                    >
                                        <i className="ph ph-x"></i>
                                    </button>
                                </div>

                                <div>
                                    <Button icon="ph ph-microphone" title="Voice" />
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="d-flex align-items-center justify-content-end gap-3">
                                <div className="d-block d-lg-none">
                                    <button
                                        className="btn btn-circle bg-transparent"
                                        title="Search"
                                        onClick={() => document.querySelector('.search-bar').classList.add('show')}
                                    >
                                        <i className="ph ph-magnifying-glass"></i>
                                    </button>
                                </div>

                                <div className="d-none d-sm-block">
                                    <Button className="bg-transparent" icon="ph ph-video-camera" title="Video" />
                                </div>

                                <div className="d-none d-sm-block">
                                    {/* <button className="btn btn-circle bg-transparent" title="Notifications">
                                        <i className="ph ph-bell"></i>
                                    </button> */}

                                    <Button className="bg-transparent" icon="ph ph-bell" title="Notifications" />
                                </div>

                                <div className="dropdown">
                                    <Button className="bg-transparent" icon="ph ph-user" title="Profile" />

                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item">
                                            <a className="dropdown-link" href="">Login</a>
                                        </li>

                                        <li className="dropdown-item">
                                            <a className="dropdown-link" href="">Register</a>
                                        </li>

                                        <li className="dropdown-item d-block d-sm-none">
                                            <a className="dropdown-link" href="">Video Create</a>
                                        </li>

                                        <li className="dropdown-item d-block d-sm-none">
                                            <a className="dropdown-link" href="">Notifications</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
