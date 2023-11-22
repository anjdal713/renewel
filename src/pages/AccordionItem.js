import { useRef, useState, useEffect } from "react";
import "./Accordion.css";
import { FiChevronDown } from 'react-icons/fi'; // Import FiChevronDown from react-icons/fi

const AccordionItem = (props) => {
  const contentEl = useRef(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  useEffect(() => {
    if (active === id) {
      contentEl.current.style.height = `${contentEl.current.scrollHeight}px`;
    } else {
      contentEl.current.style.height = "0px";
    }
  }, [active, id]);

  return (
    <>
      <header
        className={active === id ? "accordion-header active" : "accordion-header"}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <FiChevronDown size={24} style={{ transform: active === id ? 'rotate(-180deg)' : 'rotate(0deg)' }} />
      </header>
      <div
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
      >
        <p>{text}</p>
      </div>
    </>
  );
};

export const Accordion = () => {
  const [active, setActive] = useState(null);
  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  const faqs = [
    {
      header: "What is Lorem Ipsum?",
      text: "Lorem",
      id: 1,
    },
    {
      header: "Where is Lorem Ipsum?",
      text: "Seoul",
      id: 2,
    },
  ];

  return (
    <article>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          active={active}
          handleToggle={handleToggle}
          faq={faq}
        />
      ))}
    </article>
  );
};
