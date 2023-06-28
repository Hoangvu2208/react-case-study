import React,{useState} from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  

  const activeStyles =
    isFilterTab && isActiveTab
      ? {
          bachgroundColor: snap.color,
          opacity: 0.5,
        }
      : {
          bachgroundColor: "transparent",
          opacity: 1,
        };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorhism " : "rounded-4"
      }`}
      onClick={handleClick}
      style= {activeStyles}
    >
      <img src={tab.icon} alt="tab-icon" className={`${isActiveTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`} />
    </div>
  );
};

export default Tab;
