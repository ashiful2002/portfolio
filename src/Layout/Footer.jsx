const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div className="-mb-4 text-white">
      <div className="container mx-auto">
        <div className="text-center">
          <div>
            <p className="">
              &copy; {fullYear} | All Right Reserved by
              <a
                target="_blank"
                href="https://ashiful-islam.vercel.app/"
                className="ml-2 text-white"
              >
                Ashiful islam
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
