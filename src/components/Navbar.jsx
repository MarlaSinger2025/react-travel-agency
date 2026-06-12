import { NavLink, Link } from "react-router";

const Navbar = () => {

  const linkStyle = ({ isActive }) => ({
    color: isActive ? ' #FF69B4' : '"#4fc3f7',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive? 'underline' : 'none',

  });

  return (
    <div className='navbar bg-base-200 shadow-sm'>
      <div className='flex-1'>
        <Link className='btn btn-ghost text-xl' to='/' >
          Travel
        </Link>
      </div>
      <div className='navbar-end'>
        <ul className='menu menu-horizontal items-baseline gap-2'>
          <li>
            <NavLink style={linkStyle} to='/' >Home</NavLink>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/destinations'>Destinations</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
