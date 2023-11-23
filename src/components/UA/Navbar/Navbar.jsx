import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'
import MyLink from '../MyLink/MyLink';

const Navbar = () => {
  
  const setLinkClass = ({ isActive }) => {
    if ((isActive)) {
      return classes.link__active
    }
    return classes.link
   }

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__links}>
        <NavLink className={setLinkClass} to={'/about'}>About</NavLink>
        <NavLink className={setLinkClass} to={'/posts'}>Posts</NavLink>
        <MyLink to={'/'}>Home</MyLink>
        <MyLink to={'everything'}>Everything</MyLink>
      </div>
    </nav>
  );
}
export default Navbar