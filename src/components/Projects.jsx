/* ---------- PROJECTS ---------- */
import Page from "./Page";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <Page>
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "https://ahmedhassan-ahmed.github.io/Responsive-Landing-Page/",
            "https://ahmedhassan-ahmed.github.io/hospital-project/hospital%20project/homepage/index.html",
            "https://ahmedhassan-ahmed.github.io/React-Tasks-Project/",
            "coming soon",
          ].map((p, index) => (
            <TiltCard key={p}>
              {" "}
              <a href={p}>
                {" "}
                {index <= 2
                  ? index === 1
                    ? "project 2"
                    : index === 2
                      ? "project 3"
                      : "project 1"
                  : p}
              </a>
            </TiltCard>
          ))}
          <div className="text-center col-span-full mt-12">
            <Link to="/My-portfolio/skills">
              <MagneticButton>My Skills →</MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </Page>
  );
}