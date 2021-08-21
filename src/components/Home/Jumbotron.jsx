import { Link } from "react-router-dom";
import pin from "../../images/pin.png";
import bgtest from "../../images/bgtest.png";

export function Jumbotron() {
  return (
    <main className="bg-primary relative">
      <div className="text-center lg:w-8/12 w-11/12 mx-auto lg:pt-20 pt-12 lg:pb-96 pb-16">
        <h1 className="text-secondary lg:text-8xl text-3xl sm:mt-5 font-bold sm:mx-auto lg:mt-5 lg:mx-0">
          Stötta klimatkampen, en fis eller rap i taget.
        </h1>
        <p className="mt-6 lg:text-xl text-lg text-secondary">
          Kor fiser och rapar stora mängder metangas, vilket i sin tur påverkar
          klimatet och höjer planetens temperatur. Med hjälp av ett nytt
          naturligt fodertillskott baserade på alger kan nu svenska bönder
          drastiskt minska deras kors pruttar och rapar. Genom att välja
          produkter märkta Cowfunding kan du som konsument göra ett aktivt val i
          butiken att minska metanutsläpp lokalt från svenska kor!
        </p>
        <div className="w-60 mx-auto lg:my-8 mt-8 md:mb-40 mb-24">
          <Link
            to="/locations"
            className="px-8 py-3 text-xl text-primary font-semibold rounded-xl flex items-center bg-secondary"
          >
            <img src={pin} className="h-6 mr-3" /> Hitta produkter
          </Link>
        </div>
      </div>
      <img src={bgtest} className="absolute right-0 -bottom-2" />
    </main>
  );
}