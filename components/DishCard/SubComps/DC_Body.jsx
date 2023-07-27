import { useState } from "react";
import "@google/model-viewer";
import ScrollableMenu from "@/components/ScrollableMenu/ScrollableMenu";

const dishInfos = ["Info", "Ingredients", "Allergens"];

const DC_Body = ({ isCollapsed }) => {
  //const [activeCourseData, setActiveCourseData] = useState("");
  const childToParent = (childData) => {};

  return (
    /*Header Container*/
    <div
      className={`${
        isCollapsed ? "hidden" : "flex flex-col"
      } rounded-full pt-1.5 pb-2 text-sm`}
    >
      <div id="card" className="p-6">
        {
          <model-viewer
            src="https://dishmodels.s3.amazonaws.com/dumpukht_peshawar_food.glb"
            ios-src="https://dishmodels.s3.amazonaws.com/Dumpukht_Peshawar_food.usdz"
            poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
            alt="A 3D model of an astronaut"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            auto-rotate
            ar
            ar-scale="fixed"
            //ar-modes="webxr scene-viewer quick-look"
            ar-modes="webxr"
          >
            <button
              slot="ar-button"
              id="ar-button"
              className="bg-spoon-blue p-2 text-spoon-beige text-xs"
              onClick={console.log("WebXR button clicked")}
            >
              View in your space Test 3
            </button>
          </model-viewer>
        }
      </div>

      <div className="bg-gradient-to-r from-white from-40% to-white w-full">
        <ScrollableMenu
          menuItems={dishInfos}
          id={"dish-info-nav"}
          activeCourseCallback={childToParent}
        />
      </div>

      <div className="flex p-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ab
          consequuntur eos sed molestias velit fugiat sapiente illum magni enim,
          earum quaerat impedit sit? Praesentium hic maiores quisquam nihil
          iure!
        </p>
      </div>
    </div>
  );
};

export default DC_Body;
