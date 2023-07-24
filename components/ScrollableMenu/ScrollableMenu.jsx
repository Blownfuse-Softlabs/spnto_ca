import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ScrollableMenu = ({ menuItems, id, activeCourseCallback }) => {
  const [activeCourse, setActiveCourse] = useState(menuItems[0]);

  const router = useRouter();

  return (
    <div className="relative flex select-none">
      <div className="absolute flex justify-between items-center h-full w-full pointer-events-none">
        <div className="z-20 h-full w-3 bg-gradient-to-r from-inherit to-transparent" />
        <div className="z-20 h-full w-3 bg-gradient-to-l from-inherit to-transparent" />
      </div>
      <div className="flex whitespace-nowrap gap-6 px-4 overflow-x-auto scrollbar-hide scroll-smooth">
        {menuItems.map((course, index) => (
          <motion.button
            key={course}
            onClick={() => {
              setActiveCourse(course);
              //activeCourseCallback(activeCourse);
              //router.push("/#" + id + "_course_" + index);
            }}
            className={`${
              activeCourse === course
                ? "text-spoon-red font-medium"
                : "text-spoon-blue font-normal"
            } relative rounded-full pt-1.5 pb-2 text-sm`}
            id={id + "_course_" + index}
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
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ScrollableMenu;
