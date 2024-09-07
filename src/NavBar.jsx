import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <nav className="bg-[#212529] text-gray-500 flex justify-evenly p-2 rounded-xl">
            <div>
                <Link to="" className="hover:text-white cursor-pointer">
                Home
                </Link>
            </div>
            <div>
                <a href="https://subtle-panda-d10d46.netlify.app/" target="_blank" className="hover:text-white cursor-pointer">
                INote App
                </a>
            </div>
            <div>
                <a href="https://ayushxvx.github.io/Dark-portfolio" target="_blank" className="hover:text-white cursor-pointer">
                About Me
                </a>
            </div>
        </nav>
    )
}

export default NavBar;