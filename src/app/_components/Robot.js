import RobootCharacterstics from "../_subcomponents/RobootCharacterstics";
import ScrollHeading from "../_subcomponents/ScrollHeading";

function Robot() {
  return (
    <secton>
      <ScrollHeading
        heading={"CHARACTERSTICS"}
        paragraph={"Each One Symbolizing a Function Of Carlo"}
      />
      <div className="py-10 flex flex-col gap-16">
        <RobootCharacterstics
          img="/validator-robot.png"
          title={"THE VALIDATOR"}
          paragraph="The Validator is Carlo's ethical scanner — it continuously scans data
          streams in real time to ensure integrity, structure, and compliance.
          Like a digital priest, its halo represents purity and precision. It
          validates every data point before it enters the AI pipeline."
          imp={
            "The Validator ensures that incoming data is clean, structured, and compliant — protecting your AI from bad input before it even begins."
          }
        />
        <RobootCharacterstics
          img="/watcher.png"
          title={"THE WATCHER"}
          paragraph="The Watcher is Carlo's observant overseer. It monitors AI systems continuously, detecting behavior patterns and potential anomalies. With a tablet in hand, it's always analyzing, always aware — like a control tower for algorithmic safety."
          imp={
            "The Watcher provides 24/7 oversight of AI operations, identifying risks, anomalies, and performance bottlenecks before they escalate."
          }
          flex={true}
        />
        <RobootCharacterstics
          img="/guardian-robot.png"
          title={"THE GUARDIAN"}
          paragraph="The Guardian is Carlo's policy enforcer. It ensures that AI systems follow ethical and legal rules — no exceptions. Equipped with a shield of trust, it blocks unauthorized behaviors and safeguards user rights like a digital firewall with judgment."
          imp={
            "The Guardian enforces AI rules and regulations, blocking harmful outputs and unethical decisions in real time."
          }
        />
        <RobootCharacterstics
          img="/robot-messenger.png"
          title={"THE MESSENGER"}
          paragraph="The Messenger is Carlo's communicator. It delivers structured, JSON-based feedback to developers, helping them understand how to fix or improve their AI models. Think of it as a translator between compliance logic and developer action."
          imp={
            "The Messenger provides clear, actionable feedback to help developers optimize and retrain their AI responsibly."
          }
          flex={true}
        />
      </div>
    </secton>
  );
}

export default Robot;
