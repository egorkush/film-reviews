import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav className='nav'>
               <div>
                    <Link
                      to='/'
                      style={{textDecoration: 'none', color: '#E1B517', fontFamily: 'Anton, sans-serif'}}
                    >
                      Movies
                    </Link>
                </div>
                 <div>
                    <Link
                      to='/gallery'
                      style={{textDecoration: 'none', color: '#E1B517', fontFamily: 'Anton, sans-serif'}}
                    >
                      Gallery
                    </Link>
                 </div>
                   <div>
                    <Link
                      to='/about'
                      style={{textDecoration: 'none', color: '#E1B517', fontFamily: 'Anton, sans-serif'}}
                    >
                      About
                    </Link>
                </div>
        </nav>
    )
}




