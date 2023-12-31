import React from "react";
import { INTEGRATIONTYPE, INTEGRSTIONS } from "../../../data/all";
import IntegrationCard from "./IntegrationCard";

export default function SettingsIntegration() {
  const [integrations, setIntegratons] = React.useState(INTEGRSTIONS);

  const handleFilter = (id) => {
    if (id === 1) {
      setIntegratons(INTEGRSTIONS);
    } else {
      setIntegratons(INTEGRSTIONS.filter((el) => el.type === id));
    }
  };
  return (
    <div>
      <div className="text-left ">
        <p className="text-3xl">Integrations and connected apps</p>
        <span className="text-xs text-gray-400">
          Supercharge your workflow and connect the tools you use evety day
        </span>
      </div>
      <div className="flex items-center bg-gray-200 rounded mt-4 flex-grow">
        {INTEGRATIONTYPE.map((el) => {
          return (
            <button
              onClick={() => handleFilter(el.id)}
              class="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group "
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-gray-100">
                {el.name}
              </span>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4">
        {integrations.map((el) => {
          return <IntegrationCard data={el} />;
        })}
      </div>
    </div>
  );
}
