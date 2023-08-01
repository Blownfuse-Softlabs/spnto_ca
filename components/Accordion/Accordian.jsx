import { useState } from "react";

const Accordion = ({ title, content, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="z-50">
      <div onClick={() => setIsOpen(!isOpen)}>{title}</div>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default Accordion;
