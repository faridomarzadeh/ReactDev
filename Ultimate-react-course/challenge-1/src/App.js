import "./styles.css";

const skills = [
  { skill: "HTML + CSS", color: "darkblue", emoji: "" },
  { skill: "JavaScript", color: "yellow", emoji: "" },
  { skill: "Web Design", color: "DarkSeaGreen", emoji: "" },
  { skill: "Git and Github", color: "red", emoji: "" },
  { skill: "React", color: "Aqua", emoji: "" },
  { skill: "Svelte", color: "OrangeRed", emoji: "" },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./avatar.jpg" className="avatar" alt="Avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Golden retriever</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <ul className="skill-list">
      {props.skills.map((item) => (
        <Skill skill={item.skill} backgroundColor={item.color} />
      ))}
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.backgroundColor }}>
      {props.skill}
    </li>
  );
}
export default App;
