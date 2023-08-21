import { useState } from "react";

const Accordion = ({ title, content, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{title}</div>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default Accordion;
