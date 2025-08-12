import {Link} from "react-router-dom";

export function Navbar() {
    const hoverStyle = `hover:text-gray-500 duration-200`
    return(
        <>
            <Link className={hoverStyle} to={{
                pathname: "/",
            }} >
                About
            </Link>

            {/*<Link className={hoverStyle} to={{*/}
            {/*    pathname: "/about",*/}
            {/*}} >*/}
            {/*    About*/}
            {/*</Link>*/}

            <Link className={hoverStyle} to={{
                pathname: "/projects",
            }}>
                Projects
            </Link>

            <Link className={hoverStyle} to={{
                pathname: "/now",
            }}>
                Now
            </Link>

            <Link className={hoverStyle} to={{
                pathname: "/other",
            }}>
                Other
            </Link>
        </>

    )
}