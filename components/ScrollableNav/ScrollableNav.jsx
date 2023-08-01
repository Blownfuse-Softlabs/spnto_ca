import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollableNav = ({ menuItems, id, activeCourseCallback }) => {
  const [activeCourse, setActiveCourse] = useState(menuItems[0]);
  const menuRef = useRef(null);
  const activeLinkRef = useRef(null);

  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [activeCourse]);

  const handleLinkClick = (course, event) => {
    event.preventDefault(); // Prevent default link click behavior
    setActiveCourse(course);
    if (activeCourseCallback) {
      activeCourseCallback(course);
    }
    // Handle scrolling inside the navigation container
    if (menuRef.current && activeLinkRef.current) {
      const scrollLeft =
        activeLinkRef.current.offsetLeft -
        menuRef.current.offsetLeft +
        activeLinkRef.current.offsetWidth / 2 -
        menuRef.current.offsetWidth / 2;
      menuRef.current.scroll({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex select-none">
      <div className="absolute flex justify-between items-center h-full w-full pointer-events-none">
        <div className="z-20 h-full w-3 bg-gradient-to-r from-inherit to-transparent" />
        <div className="z-20 h-full w-3 bg-gradient-to-l from-inherit to-transparent" />
      </div>
      <div
        className="flex whitespace-nowrap gap-6 px-4 overflow-x-auto scrollbar-hide scroll-smooth"
        ref={menuRef}
      >
        {menuItems.map((course, index) => (
          <motion.a
            key={course}
            href="#"
            onClick={(event) => handleLinkClick(course, event)}
            className={`${
              activeCourse === course
                ? "text-spoon-red font-medium"
                : "text-spoon-blue font-normal"
            } relative rounded-full pt-1.5 pb-2 text-sm`}
            id={id + "_course_" + index}
            ref={activeCourse === course ? activeLinkRef : null}
          >
            {activeCourse === course && (
              <motion.div
                layoutId={id}
                transition={{
                  type: "spring",
                  duration: 0.25,
                  bounce: 0.35,
                }}
                className="absolute h-0.5 w-full bottom-0 bg-spoon-red"
                style={{
                  borderRadius: 9999,
                }}
              />
            )}
            <span className="relative z-10">{course}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ScrollableNav;
