// components/layout/Footer.tsx

import FooterBrand from "./FooterBrand";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterServices from "./FooterServices";
import FooterContact from "./FooterContact";
// import FooterNewsletter from "./FooterNewsletter";
import FooterBottomBar from "./FooterBottomBar";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#020817] to-[#010314] border-slate-800 text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 border-t lg:grid-cols-4 lg:px-8">
        <FooterBrand />
        <FooterQuickLinks />
        <FooterServices />
        <FooterContact />
        {/* <FooterNewsletter /> */}
      </div>
      <FooterBottomBar />
    </footer>
  );
}
