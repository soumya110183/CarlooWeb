export default function SubScriptionForm({maxw}){
    return(
         <form className={`flex w-full max-w-[560px] bg-black items-center sm:p-3.5 p-2.5 rounded-[10px] justify-between mt-6 ${maxw && "mx-auto"}`}>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full sm:w-2/3  text-white border-none outline-none  placeholder:text-gray-500 focus:outline-none focus:ring-0"
            required
          />
          <button
            type="submit"
            className="bg-[#651FFF] p-2.5 hover:bg-purple-600 text-white font-semibold   rounded-[10px] transition"
          >
            Subscribe
          </button>
          
        </form>
    )
}