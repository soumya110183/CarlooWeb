import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
  FaLeaf,
  FaCommentDots,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-20 px-5 text-white">
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between ">
        <div className="max-w-[300px] space-y-4 font-medium">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Awrora" className="w-[40px]" />
            <h2 className="text-xl font-bold">Carlo PEaas</h2>
          </div>
          <p className="text-gray-300">
            Carlo PEaaS by Algorethics helps AI developers and enterprises
            achieve ethical compliance with global standards in real-time. Align
            your AI projects with trust, transparency, and global regulations
          </p>
          <p>Copyright ©2025 Algorethics.ai</p>
        </div>

        <div className="flex flex-wrap gap-14">
          {/* <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-300 w-full max-w-[250px]">
              <div>
                <li className="flex items-center gap-2.5">
                  <img src="/1f1fa-1f1f8 1.svg" alt=""></img>Algorethics USA
                </li>
                <li className="flex items-center gap-2.5">
                  <img src="/ic_baseline-phone.svg" alt=""></img>+1 929-400-3096
                </li>
              </div>
              <div>
                <li className="flex items-center gap-2.5">
                  <img src="/1f1ee-1f1f3 1.svg" alt=""></img>Algorethics India
                </li>
                <li className="flex items-center gap-2.5">
                  <img src="/ic_baseline-phone.svg" alt=""></img>+91 91
                  4897-4612
                </li>
              </div>
              <div>
                <li className="flex items-center gap-2.5">
                  <img src="/1f1e6-1f1ea 1" alt=""></img>Algorethics UAE
                </li>
                <li className="flex items-center gap-2.5">
                  <img src="/ic_baseline-phone.svg" alt=""></img>+971 50 268
                  2270
                </li>
              </div>
              <div>
                <li className="flex items-center gap-2.5">
                  <img src="/1f1ec-1f1ea 1.svg" alt=""></img>Algorethics Georgia
                </li>
                <li className="flex items-center gap-2.5">
                  <img src="/ic_baseline-phone.svg" alt=""></img>+995 598 50 25
                  55
                </li>
              </div>
              <div>
                <li className="flex items-center gap-2.5">
                  <img src="/1f1ec-1f1ea 1.svg" alt=""></img>Algorethics Georgia
                </li>
                <li className="flex items-center gap-2.5">
                  <img src="/ic_baseline-phone.svg" alt=""></img>+995 598 50 25
                  55
                </li>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <li className="flex items-center gap-2.5">
                  <img src="/mail.svg" alt=""></img>steve@algorethics.ai
                </li>
                <li className="flex items-center gap-2.5">
                  <img src="/mdi_location.svg" alt=""></img>333 Sunset Dr, Apt
                  204 Fort Lauderdale, FL 33301 USA
                </li>
              </div>
            </ul>
          </div> */}

          <div className="w-full max-w-[185px]">
            <h4 className="font-bold mb-3">Newsletter</h4>
            <p>Subscribe our newsletter to get our latest update & news</p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <a className="cursor-pointer">
                <li>Why Carlo</li>
              </a>
              <a className="cursor-pointer">
                <li>Pricing</li>
              </a>
              <a className="cursor-pointer">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
              (Icon, idx) => (
                <Icon
                  key={idx}
                  className="text-white bg-black rounded-full p-2 w-8 h-8 cursor-pointer hover:scale-105 transition"
                />
              )
            )}
          </div>

          <div className="mt-4 flex items-center bg-black border border-gray-600 rounded-[10px]   overflow-hidden max-w-[230px] pr-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-black text-white text-sm px-4 py-3 outline-none w-full placeholder:font-medium placeholder:text-white"
            />

            <img src="material-symbols_send.svg" alt="sendbutton"></img>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-6 left-6">
        <button className="flex items-center gap-2 px-5 py-2 text-[#2F4F20] bg-[#DBFFCB] rounded-full shadow-lg font-semibold">
          <FaLeaf />
          BUY NOW
        </button>
      </div> */}

      {/* <div className="absolute bottom-6 right-6">
        <div className="relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="bg-[#2D006C] p-4 rounded-full shadow-md cursor-pointer hover:scale-110 transition">
            <FaCommentDots className="text-[#00F0FF]" size={24} />
          </div>
        </div>
      </div> */}
    </footer>
  );
}
