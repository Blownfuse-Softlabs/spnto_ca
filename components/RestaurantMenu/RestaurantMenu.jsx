import DishCard from "../DishCard/DishCard";

const RestaurantMenu = ({ menuItems, course }) => {
  const fullMenu = menuItems;
  const courseFilteredMenu = fullMenu.filter((dish) => dish.course === course);

  return (
    <div className="flex flex-col items-center w-full gap-2">
      {courseFilteredMenu.map((dish, index) => (
        <DishCard key={index} dishInfo={dish} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
