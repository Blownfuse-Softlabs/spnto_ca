const Nav = ({ brandName, categoryList }) => {
  return (
    <div className="flex flex-col bg-spoon-grey p-8 pt-12 gap-4">
      {/*Restaurant Name section*/}
      <div className="flex flex-col">
        <h2 className="text-spoon-blue font-normal text-lg">Welcome to</h2>
        <h1 className="text-spoon-blue font-medium text-xl">
          {brandName ? brandName : "Restaurant Name"}
        </h1>
      </div>
      {/*Filter Dropdown Section*/}
      <div className="flex justify-center items-center">
        <button className="bg-spoon-red text-spoon-beige font-light text-sm w-full py-2 rounded-none shadow-xl text-center">
          Choose what's shown
        </button>
      </div>
      {/*Menu Categories Section*/}
      <div className="flex flex-col">
        <ul>
          {categoryList.map((category) => (
            <li key={category} className="inline-block">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
