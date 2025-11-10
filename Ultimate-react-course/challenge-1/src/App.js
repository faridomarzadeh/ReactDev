import "./styles.css";

const skills = [
  { skill: "HTML + CSS", color: "darkblue", level: "advanced" },
  { skill: "JavaScript", color: "yellow", level: "advanced" },
  { skill: "Web Design", color: "DarkSeaGreen", level: "advanced" },
  { skill: "Git and Github", color: "red", level: "intermediate" },
  { skill: "React", color: "Aqua", level: "advanced" },
  { skill: "Svelte", color: "OrangeRed", level: "beginner" },
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

function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((item) => (
        <Skill skill={item.skill} color={item.color} level={item.level} />
      ))}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      {skill}
      {level === "advanced" && "💪"}
      {level === "intermediate" && "👍"}
      {level === "beginner" && "👶"}

      {/* {level === "advanced" ? "💪" : level === "intermediate" ? "👍" : "👶"} */}
    </li>
  );
}
export default App;
