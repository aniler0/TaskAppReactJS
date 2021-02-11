import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">Hakkında</Link>
    </footer>
  );
};
export default Footer;
