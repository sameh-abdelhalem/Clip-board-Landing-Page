import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import instagram from "../../assets/images/icon-instagram.svg";
const Footer = () => {
  return (
    <footer className="bg-gra-50">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Image */}
          <img src={logo} alt="" className="scale-50" />
          {/* Container for menus and Socials */}
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            {/* Menus */}

            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              {/* menu 1 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="" className="hover:text-strongCyan">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>
              {/* menu 2 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="" className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="" className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>
            {/* social icons */}

            <div className="flex justify-between w-32 py-1">
              <a href="#">
                <img src={facebook} alt="" className="duration-200 ficon" />
              </a>
              <a href="#">
                <img src={twitter} alt="" className="duration-200 ficon" />
              </a>
              <a href="#">
                <img src={instagram} alt="" className="duration-200 ficon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
