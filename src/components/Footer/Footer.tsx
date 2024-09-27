import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <a
      href="https://WillGITCode.github.io/GameDevPortfolio"
      className="link footer__link"
    >
      {new Date().getFullYear()}
    </a>
  </footer>
);

export default Footer;
