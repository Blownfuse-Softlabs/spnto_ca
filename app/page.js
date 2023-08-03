"use client"

import "@google/model-viewer";

import NavSWR from "@/components/NavSWR"
import DishCardSWR from "@/components/DishCardSWR"
import DishCard from "@/components/DishCard/DishCard";

import useRestaurant from "@/hooks/useRestaurant";
import RestaurantMenu from "@/components/RestaurantMenu/RestaurantMenu";
import Image from "next/image";
import spoonLogo from "/public/logos/SpoontooLogo_Spoon.svg"
import { easeIn, motion } from "framer-motion";
import { letsBakeMuffins } from "./layout";
import PrimaryNav from "@/components/PrimaryNav/PrimaryNav";

//TESTING
const menuList = [
  "Soups",
  "Appetizers",
  "Main Course",
  "Desserts",
  "Aro ache",
  "Tar poreo ache"  
] 

export default function Home() {
  const {restaurant, isLoading, isError} = useRestaurant(1);  

  if (isLoading) {
    return (
      <div className="flex bg-spoon-grey p-8 w-screen h-screen justify-center items-center">
        <h2 className="text-spoon-blue font-normal text-lg">
          Loading Menu Info
        </h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex bg-spoon-grey p-8 w-screen h-screen justify-center items-center">
        <h2 className="text-spoon-blue font-normal text-lg">
          There was an error
        </h2>
      </div>
    );
  }

  return (
    <>
    <main className="bg-spoon-grey portrait:hidden flex min-h-screen flex-col items-center justify-center p-8 pt-12 gap-10">
      <div>
        <h1 className="text-spoon-red font-medium text-3xl">
          Oops!
        </h1>
      </div>
      <div className="bg-spoon-red text-spoon-beige rounded-2xl p-6 w-96 text-justify shadow-2xl">        
        <p>
          This experience is designed to be viewed in portrait. Please rotate your device to view the menu.
        </p>
      </div>      
    </main>

    {/*<main className="landscape:hidden">
      <NavSWR />            

      <div className="flex flex-col p-4 bg-spoon-grey gap-2">        
        <DishCard />
        <DishCardSWR dishIndex={0}/>
        <DishCardSWR dishIndex={1}/>
        <DishCardSWR dishIndex={2}/>
        <DishCardSWR dishIndex={3}/>
        <DishCardSWR dishIndex={4}/>
        <DishCardSWR dishIndex={5}/>
        <DishCardSWR dishIndex={5}/>
        <DishCardSWR dishIndex={5}/>
        <DishCardSWR dishIndex={5}/>
        <DishCardSWR dishIndex={5}/>
        <DishCardSWR dishIndex={5}/>
        <DishCardSWR dishIndex={5}/>
        <DishCardSWR dishIndex={5}/>
      </div>      
    </main>*/}

    <main className="landscape:hidden flex flex-col items-center bg-spoon-grey w-screen h-screen overflow-scroll">
           
         
           
      <PrimaryNav brandInfo={restaurant.brand[0]}/>
      <RestaurantMenu menuItems={restaurant.menu} course={restaurant.brand[0].courses[0]} />
      <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-spoon-grey z-50"/>      
    </main>

    

    {/*<main className="landscape:hidden flex flex-col items-center px-4 bg-gradient-to-b from-spoon-red from-60% to-spoon-orange w-screen h-screen overflow-clip">
      
      <motion.div initial={{y: 1000}} animate={{y:160}} transition={{duration: 0.5, type: "spring"}} className="translate-y-40">
        <Image src={spoonLogo} alt="Spoontoo Logo" className="w-full"/>      
      </motion.div>
  </main>  */} 
    </>
  )
}
