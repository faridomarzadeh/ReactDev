import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div className="accordion">
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <AccordionItem
          title={item.title}
          rowNumber={index}
          key={item.title}
          isOpen={openQuestion === index}
          setOpenQuestion={setOpenQuestion}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        key={"Test 1"}
        rowNumber={3}
        title={"Test 1"}
        isOpen={openQuestion === 3}
        setOpenQuestion={setOpenQuestion}
      >
        <p>Allows react developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make componenets reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({
  title,
  rowNumber,
  isOpen,
  setOpenQuestion,
  children,
}) {
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setOpenQuestion(isOpen ? null : rowNumber)}
    >
      <p className="number">
        {rowNumber <= 9 ? `0${rowNumber + 1}` : `${rowNumber + 1}`}
      </p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
