"use client"

import NavSWR from "@/components/NavSWR"
import DishCardSWR from "@/components/DishCardSWR"

export default function Home() {
  return (
    <>
    <main className="bg-spoon-grey portrait:hidden flex min-h-screen flex-col items-center justify-center p-8 pt-12 gap-10">
      <div className>
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
      <div className="flex flex-col p-8 bg-spoon-grey gap-4 h-full">        
        <DishCardSWR dishIndex={0}/>
        <DishCardSWR dishIndex={1}/>
        <DishCardSWR dishIndex={2}/>
        <DishCardSWR dishIndex={3}/>
        <DishCardSWR dishIndex={4}/>                
      </div>      
    </main>    
    </>
  )
}
