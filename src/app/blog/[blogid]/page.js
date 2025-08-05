import Underline from "@/app/_subcomponents/UnderLine";

export default async  function page(){

      const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  const blogs = await res.json();
    return (
        <section className="w-full mx-auto mt-35 text-white  max-w-[1280px] px-4 pb-30">

          <h2 className="text-[48px] font-bold text-center">
                  Get in touch with us
                </h2>
                <Underline />
                <p className="text-[22px] text-center">
                  Complete the form, and our team will reach out within 24 hours.
                </p>
        </section>
    )
}