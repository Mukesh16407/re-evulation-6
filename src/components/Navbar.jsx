import {Link} from 'react-router-dom'
import styles from "./css/navbar.module.css";
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
    <div className={styles.navbar}>
      <ul>
        {links.map((el, index) => {
          return (
            <Link key={index} to={el.link}>
              <li id={el.id}>{el.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
