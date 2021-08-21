import { useState } from "react";
import chart from "../../images/chart.png";
import cowsVsAirplanes from "../../images/cowsVsAirplanes.png";

const active =
  "px-6 py-3 text-xl text-secondary font-semibold rounded-xl flex items-center bg-primary border-2 border-transparent";

const inactive =
  "px-6 py-3 text-xl text-primary font-semibold rounded-xl flex items-center bg-secondary border-2 border-primary hover:bg-primary hover:text-secondary";

export function Problem() {
  const [cowsVsCountries, setCowsVsCountries] = useState(true);
  return (
    <div className="bg-secondary lg:pb-12 pb-0" id="problem">
      <div className="grid grid-cols-2 lg:w-10/12 w-11/12 mx-auto">
        <div className="mt-12 lg:col-span-1 col-span-2 lg:text-left text-center">
          <h1 className="lg:text-6xl text-4xl font-bold text-white ">
            Vad är problemet med kofisar?
          </h1>
          <p className="lg:text-xl text-lg text-gray-300 mt-5">
            Jo, det finns ungefär en miljard kor på planeten, och tillsammans
            producerar de över 4% av världens växthusgasutsläpp endast genom att
            rapa och prutta metangas (Sverige 5,7%). Det är dubbelt så mycket
            utsläpp som alla världens flygplan står för.
          </p>
          <div className="flex mt-8 flex-wrap lg:justify-start justify-center">
            <button
              className={`md:mr-4 mr-0 md:mb-0 mb-4 ${
                cowsVsCountries ? active : inactive
              }`}
              onClick={() => setCowsVsCountries(true)}
            >
              Kor vs länder
            </button>

            <button
              className={cowsVsCountries ? inactive : active}
              onClick={() => setCowsVsCountries(false)}
            >
              Kor vs flygplan
            </button>
          </div>
        </div>
        <div className="mt-20 text-white  lg:ml-20 ml-6 mx-0 lg:col-span-1 col-span-2">
          <img src={cowsVsCountries ? chart : cowsVsAirplanes} />
        </div>
      </div>
    </div>
  );
}