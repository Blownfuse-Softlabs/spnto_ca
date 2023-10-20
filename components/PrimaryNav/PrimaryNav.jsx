import Image from "next/image";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import ScrollableMenu from "../ScrollableMenu/ScrollableMenu";

const PrimaryNav = ({ brandInfo, activeNavCallback }) => {
  const handleNavChange = (newActiveNav) => {
    activeNavCallback(newActiveNav);
  };

  return (
    <div className="sticky top-0 flex flex-col justify-center items-center w-full gap-4 px-4 py-4 bg-gradient-to-b from-spoon-grey from-[92%] z-30">
      {/*Brand Section*/}
      <section className="flex gap-2 w-full items-center">
        {/*Logo Div*/}
        <div className="rounded-xl overflow-clip aspect-square h-14 relative shadow-inner border-[1px] border-white">
          <Image
            src={brandInfo.brandLogo}
            alt="Restaurant Logo"
            //width={60}
            //height={60}
            quality={100}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/*Message & Name Div*/}
        <div className="text-spoon-blue">
          <h2 className="font-normal text-base">Welcome to</h2>
          <h1 className="font-medium text-lg">{brandInfo.name}</h1>
        </div>
      </section>

      {/*Dropdown Section*/}
      {/*<section className="flex gap-2 w-full justify-center items-center">
        {Dropdown Div}
        <div className="w-full">
          <FilterDropdown showBorder={false} />
        </div>
      </section>*/}

      {/*Courses Section*/}
      <section className="flex gap-2 w-full justify-start items-center">
        {/*Scrollable Nav Div*/}
        <div className="w-full">
          <ScrollableMenu
            menuItems={brandInfo.courses}
            id={"course-nav"}
            activeCourseCallback={handleNavChange}
          />
        </div>
      </section>
    </div>
  );
};

export default PrimaryNav;
