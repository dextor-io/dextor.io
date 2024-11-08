import LiveClock from "./LiveClock.jsx";
import React from "react";

const ClockCard = ({item, inputTime}) => {
    return (<div className="flex flex-col items-center justify-center space-y-6 p-4">
        <div className="flex justify-between items-center w-full">
            <LiveClock inputTime={inputTime}/>
            <div
                className="basis-1/4 px-2 py-1 text-xs text-primary-700 bg-primary-100 border-[1px] border-primary-400 rounded-md">
                {item.utcOffset}
            </div>
        </div>
        <div className="space-y-4 w-full max-w-xl">
            {item.cities.map((city) => (<div
                key={city.city}
                className="flex items-center space-x-4 border-t border-gray-300 pt-2"
            >
            <span className="text-3xl" role="img" aria-label={`${city.city} flag`}>
              {city.flag}
            </span>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">{city.city}</h3>
                    <p className="text-sm text-gray-500">{city.country}</p>
                </div>
            </div>))}
        </div>
    </div>);
};

export default ClockCard;
