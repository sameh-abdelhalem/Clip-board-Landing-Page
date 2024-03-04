const CallToAction = () => {
  return (
    <section id="bottom">
      <div className="section-container my-20">
        <h3>Clipboard for IOS and MacOS</h3>
        <p className="section-p mb-10">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
        </p>
        {/* Button Container */}
        <div className="button-container">
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for IOS
          </a>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
