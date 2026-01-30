/* ---------- CERTIFICATES GRID ---------- */
import TiltCard from "./TiltCard";
export default function CertificatesGrid({ certificates, onSelect }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((src, i) => (
        <TiltCard
          key={i}
          onClick={() => onSelect(src)}
          className="group hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20"
        >
          <div className="relative">
            <img
              src={src}
              alt="certificate"
              className="w-full h-[220px] object-contain rounded-xl"
            />

            <div
              className="
              pointer-events-none
              absolute inset-0
              bg-black/50
              opacity-0
              group-hover:opacity-100
              transition
              flex items-center justify-center
              rounded-xl
            "
            >
              <span className="text-white font-semibold">Click to view</span>
            </div>
          </div>
        </TiltCard>
      ))}
    </div>
  );
}