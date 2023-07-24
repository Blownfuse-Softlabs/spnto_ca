"use client"

import "@google/model-viewer";

import NavSWR from "@/components/NavSWR"
import DishCardSWR from "@/components/DishCardSWR"

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

    <main className="landscape:hidden">
      <NavSWR />

      <div id="card" className="p-6">
        <model-viewer
          src="https://dishmodels.s3.amazonaws.com/dumpukht_peshawar_food.glb"
          ios-src="https://dishmodels.s3.amazonaws.com/Dumpukht_Peshawar_food.usdz"
          poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
          alt="A 3D model of an astronaut"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
          //auto-rotate
          ar
          ar-scale="fixed"
          ar-modes="webxr"
        >
          <button slot="ar-button" id="ar-button" className="bg-spoon-blue p-2 text-spoon-beige text-xs">
            View in your space
          </button>

          Pode Mulo Dakha
        </model-viewer>
      </div>

      <div className="flex flex-col p-4 bg-spoon-grey gap-2">        
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
    </main>    
    </>
  )
}
