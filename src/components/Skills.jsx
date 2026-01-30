/* ---------- SKILLS ---------- */
import { useState, useEffect } from "react";
import Page from "./Page";
import CertificatesGrid from "./CertificatesGrid";
import { AnimatePresence } from "framer-motion";
import CertificateModal from "./CertificateModal";
import cert1 from "/src/assets/26acd102-1b23-49a0-9c08-7b888c717c74.png";
import cert2 from "/src/assets/Ahmed Hassan Ahmed_ReactJS Foundations Course_page-0001.jpg";
import cert3 from "/src/assets/Ahmed Hassan Ahmed_SQL Server Foundations Course (1)_page-0001.jpg";
import cert4 from "/src/assets/Linux_Unhatched_certificate_ahmedhassan8754321-gmail-com_2d05e6fc-9f10-46ce-89d8-1b6d8f10cc57_page-0001.jpg";
import cert5 from "/src/assets/AI for Beginners_page-0001.jpg";
import cert6 from "/src/assets/9757613_9629635_1769307917351_page-0001.jpg";
export default function Skills() {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selected]);

  const certificates = [cert1, cert2, cert3, cert4, cert5, cert6];

  return (
    <Page>
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Certificates
        </h3>

        <CertificatesGrid certificates={certificates} onSelect={setSelected} />
      </section>

      <AnimatePresence>
        {selected && (
          <CertificateModal src={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </Page>
  );
}