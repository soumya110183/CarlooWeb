import TeamContainer from "./TeamContainer";

export default function MeetTeam() {
  return (
    <section className="w-full max-w-[1400px]  mx-auto  text-foreground pb-32">
      <h2 className="text-[48px] font-bold text-center">Meet The Team</h2>
      <p className="text-[22px] font-normal text-center">
        Get to know the minds powering our work
      </p>
      <div className=" mt-10 mx-auto grid grid-cols-2 gap-11">
        <TeamContainer
          img={"StevePhoto.png"}
          name={"Stephen Antony Venansious"}
          role={"Founder & Developer of Algorethics AI Library"}
          details={
            "Stephen Antony Venansious is a highly accomplished technology entrepreneur, data scientist, and the visionary behind the Algorethics AI Library. Drawing inspiration from the Rome Call for AI Ethics, Stephen developed this groundbreaking AI library to ensure that ethical principles are embedded into AI systems from the ground up.\n\nHis expertise spans across mobile security, cross-platform development, cybersecurity, and digital media rights enforcement, making him a sought-after technology consultant for multinational IT vendors.\n\nStephen's experience founding multiple successful global IT companies—specializing in mobility, augmented reality, and web development—positions him as a leader in the ethical AI space. His work in digital media rights enforcement for industries such as Bollywood and Hollywood further demonstrates his commitment to protecting intellectual property and enforcing fairness in technology. With a background in developing e-commerce platforms and contributing to open-source projects, Stephen's profound understanding of AI has led him to champion ethical AI development. His belief in fairness, transparency, and accountability in AI across industries such as healthcare, finance, and law enforcement makes him the ideal person to drive Algorethics' mission forward."
          }
        />
        <TeamContainer
          img={"rob-1-297x300.png"}
          name={"Robert McNamara"}
          role={"Co-Founder & Chief Ethical Innovation Officer"}
          details={
            "Robert McNamara is a forward-thinking technologist and ethical innovator, perfectly suited to lead the charge at Algorethics as its Co-Founder and Chief Ethical Innovation Officer. With a deep-rooted commitment to human-first technological solutions, Robert’s pioneering work includes the invention of Triggersmart, a globally recognized childproof smart gun that uses RFID technology to ensure that only authorized users can fire the weapon. This innovation addresses a critical global issue—preventing thousands of accidental firearm injuries and deaths each year, particularly among children.\n\nRobert's drive to create technology that serves humanity responsibly aligns seamlessly with the core mission of Algorethics. His passion for ethical AI development, combined with his track record of creating life-saving, socially impactful technologies, makes him the ideal advocate for promoting fairness, transparency, and ethical accountability in AI.\n\nHis vision for Algorethics is to ensure that AI not only advances society but does so in a way that safeguards human values and ethical integrity."
          }
        />
        <TeamContainer
          img={"drlevan.jpg"}
          name={"Dr. Levan Bodzashvili"}
          role={"Co-founder, Chief Legal & Compliance Lead"}
          details={
            "Dr. Levan Bodzashvili is a leading expert in cyberlaw, AI governance, and public policy, with over 20 years of experience in government positions, advisory roles, and academia. His extensive background in AI regulation and compliance makes him an indispensable part of Algorethics' leadership team.\n\nDr. Bodzashvili serves as the Chair of Neiron Academy, an institution committed to advancing artificial intelligence for the benefit of humanity. He firmly believes that AI governance frameworks must promote fairness, transparency, and accountability, ensuring that technology serves the common good. In his role as Governmental Relations and AI Compliance Officer at Algorethics, Dr. Bodzashvili bridges the gap between AI ethics and public policy, advising governments and enterprises on compliant AI deployment. He is passionate about ensuring that AI governance strategies align with regional laws, cultural norms, and global standards. His expertise in regulatory frameworks allows Algorethics to adapt its AI solutions to meet local and regional compliance requirements, promoting ethical AI deployment globally."
          }
        />
        <TeamContainer
          img={"tasleel-r5p2is03p7nlxekboqslnlvoyd3ckj39gctlgiqi2o.jpg"}
          name={"Tasleel"}
          role={"Co-Founder & Chief Projects Officer"}
          details={
            "Tasleel brings a wealth of experience in corporate consulting, humanitarian efforts, and project management, making him an invaluable addition to Algorethics as its Co-Founder and Chief Projects Officer. With roles such as Vice Chairman of the Indian Red Cross, Member of the UN Global Compact, and Past President of Rotary Manyata, Tasleel has demonstrated a strong commitment to both humanitarian causes and corporate success. Over the past 17 years, he has excelled in transaction management and marketing, delivering world-class solutions by combining local expertise with global corporate knowledge.\n\nAt Algorethics, Tasleel leverages his unique blend of corporate consulting and humanitarian leadership to oversee key projects and initiatives, ensuring they align with the ethical principles that guide the organization. His ability to manage complex, large-scale operations ensures that Algorethics’ mission of responsible AI development is implemented with precision and impact. His passion for ethical governance and responsible corporate practices makes him a key driver in ensuring that Algorethics leads the way in ethical AI deployment across industries."
          }
        />
        <TeamContainer
          img={"proffessorJose.jpeg"}
          name={"Prof. Dr. Jose Berengueres"}
          role={"Chief Mentor & Principal Ethical AI Advisor"}
          details={
            "Prof. Dr. Jose Berengueres is an esteemed academic and thought leader in AI and human-computer interaction, with a PhD in bio-inspired robotics from the Tokyo Institute of Technology. As a professor at the Computer Science Department at UAE University, he teaches cutting-edge topics like Visualization, Leadership in IT, and Design Thinking, while also conducting research in applied data science and AI. His extensive experience includes consulting for top-tier organizations like Apple, Etihad Airways, and Porsche Middle East, making him a go-to expert on the intersection of technology, creativity, and analytics.\n\nAs the Chief Mentor & Principal Ethical AI Advisor at Algorethics, Dr. Jose’s expertise in developing AI algorithms and his passion for ethical technology development are invaluable. He understands the critical importance of identifying and mitigating biases in AI systems, which, if unchecked, can lead to unfair outcomes in areas such as race, gender, and socioeconomic status. With his deep knowledge of AI and human-centered design, Dr. Jose ensures that Algorethics fosters fairness, transparency, and ethical integrity in all its AI applications."
          }
        />
        <TeamContainer
          img={"kimbarshili.jpg"}
          name={"Ketevan Kimbarishvili"}
          role={"Data Protection & Compliance Officer"}
          details={
            "Ketevan Kimbarishvili is a qualified lawyer with a Master's degree in Law and a strong track record in data protection, compliance, and legal advisory across public and private sectors. As the Data Protection & Compliance Officer at Algorethics, she leads our efforts in legal updates, government and industry engagement, and compliance training initiatives.\n\nKetevan previously served as the Data Protection Officer at the LEPL State Care Agency, where she implemented regulatory standards and privacy frameworks. She is also a certified trainer, currently teaching the “Personal Data Protection” course at BMCC Center, empowering professionals with knowledge on privacy laws and digital rights. Her legal acumen and hands-on experience in data governance strengthen Algorethics’ mission to align AI development with international data protection standards, ethical compliance, and regulatory readiness."
          }
        />
      </div>
    </section>
  );
}
