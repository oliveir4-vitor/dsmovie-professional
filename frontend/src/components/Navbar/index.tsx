import {ReactComponent as GithubIcon} from 'assets/img/Github-logo.svg'
import './style.css'

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/oliveir4-vitor">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p>/oliveir4-vitor</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;