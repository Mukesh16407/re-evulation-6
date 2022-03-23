import {Link} from 'react-router-dom'
import styles from './css/navbar.css'
const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "about",
    link: "/about"
  },
  {
    title: "products",
    link: "/products"
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <ul className={styles.navbar}>
      {links.map((el,index) => (
        <Link to={el.link} key={index}>
          <li>{el.title}</li>
        </Link>
      ))}
    </ul>
  );
};
