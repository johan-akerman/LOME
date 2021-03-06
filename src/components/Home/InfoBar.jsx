import { Link } from "react-router-dom";

export function InfoBar() {
  return (
    <div className="bg-coral text-center">
      <div className="py-3 px-5 flex justify-center md:text-lg text-sm text-black">
        <Link
          to="/butiker"
          className="ml-2  font-medium border-b-2 border-primary hover:text-primary"
        >
          Hitta butiker med LOME!
        </Link>
      </div>
    </div>
  );
}
