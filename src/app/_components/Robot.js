import RobootCharacterstics from "../_subcomponents/RobootCharacterstics";
import ScrollHeading from "../_subcomponents/ScrollHeading";

function Robot() {
  return (
    <section className="sm:px-10 px-5">
      <ScrollHeading
        heading={"ETHICAL GUARDIANS"}
        paragraph={"Carlo Protecting AI Integrity and Compliance in Real Time"}
      />
      <div className="py-10 flex flex-col md:gap-5 gap-5">
        <RobootCharacterstics
          img="/validator-robot.png"
          title={"THE VALIDATOR"}
          paragraph="The Validator is Carlo's ethical scanner — it continuously scans data
          streams in real time to ensure integrity, structure, and compliance.
          Like a digital priest, its halo represents purity and precision. It
          validates every data point before it enters the AI pipeline."
          imp={
            "Carlo’s real-time ethical scanner that validates every data point before it enters the AI pipeline. Prevents bad data from poisoning your models."
          }
        />
        <RobootCharacterstics
          img="/watcher.png"
          title={"THE WATCHER"}
          paragraph="The Watcher is Carlo's observant overseer. It monitors AI systems continuously, detecting behavior patterns and potential anomalies."
          imp={
            "A 24/7 compliance overseer that monitors every model output, detects anomalies, and flags violations instantly."
          }
          flex={true}
        />
        <RobootCharacterstics
          img="/guardian-robot.png"
          title={"THE GUARDIAN"}
          paragraph="The Guardian is Carlo's policy enforcer. It ensures that AI systems follow ethical and legal rules — no exceptions. Equipped with a shield of trust, it blocks unauthorized behaviors and safeguards user rights like a digital firewall with judgment."
          imp={
            "Carlo’s policy firewall—automatically enforces compliance rules, blocks unethical outputs, and mitigates risk before deployment."
          }
        />
        <RobootCharacterstics
          img="/robot-messenger.png"
          title={"THE MESSENGER"}
          paragraph="The Messenger is Carlo's communicator. It delivers structured, JSON-based feedback to developers, helping them understand how to fix or improve their AI models. Think of it as a translator between compliance logic and developer action."
          imp={
            "A developer-first compliance assistant delivering JSON-based feedback, helping you retrain and fix models quickly."
          }
          flex={true}
        />
      </div>
    </section>
  );
}

export default Robot;
