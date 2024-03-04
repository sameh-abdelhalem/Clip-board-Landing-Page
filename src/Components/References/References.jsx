import googleLogo from "../../assets/images/logo-google.png";
import imbLogo from "../../assets/images/logo-ibm.png";
import microsoftLogo from "../../assets/images/logo-microsoft.png";
import hpLogo from "../../assets/images/logo-hp.png";
import vectorLogo from "../../assets/images/logo-vector-graphics.png";

const References = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
        <img src={googleLogo} alt="" />
        <img src={imbLogo} alt="" />
        <img src={microsoftLogo} alt="" />
        <img src={hpLogo} alt="" />
        <img src={vectorLogo} alt="" />
      </div>
    </section>
  );
};

export default References;
