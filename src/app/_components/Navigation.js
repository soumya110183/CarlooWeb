function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-transparent h-[86px]">
      <nav className="h-full w-full max-w-[1280px] flex  items-center justify-between mx-auto  text-white font-mont">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1">
            <img
              src="/logo-verselion.png"
              alt=""
              className="w-[54px] h-[54px]"
            />
            <span className="font-montserrat text-[18px] font-mont font-bold">
              Carlo peass
            </span>
          </div>

          <ul className="flex items-center gap-[20px] text-[16px] list-none font-semibold">
            {[
              "Why Carlo",
              "Compliance Frameworks",
              "Key Features",
              "Resources",
              "Contact",
              "About Us",
            ].map((item, i) => (
              <li key={i} className="relative group cursor-pointer">
                <span className="group-hover:text-[#C7BFE9] transition-all duration-400">
                  {item}
                </span>

                <div className="absolute left-1/2 -bottom-[15px] flex items-center gap-1 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

                  <div className="w-10 h-2 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button className=" border-none p-0 m-0  outline-none bg-[rgb(209,196,233)] text-[#311B92] w-[115px] h-[40px] text-[14px] rounded-[36px] font-bold">
          SIGN IN
        </button>
      </nav>
    </div>
  );
}

export default Navigation;
