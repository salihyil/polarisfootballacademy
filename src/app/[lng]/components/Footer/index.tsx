import Link from "next/link";
import EntypoSocialInstagram from "../../../../../public/assets/icons/EntypoSocialInstagram";
import MaterialSymbolsLocationOnRounded from "../../../../../public/assets/icons/MaterialSymbolsLocationOnRounded";
import RiPhoneFill from "../../../../../public/assets/icons/RiPhoneFill";
import SimpleIconsYoutube from "../../../../../public/assets/icons/SimpleIconsYoutube";
import TablerMailFilled from "../../../../../public/assets/icons/TablerMailFilled";
import UiwFacebook from "../../../../../public/assets/icons/UiwFacebook";

export const Footer = async ({ lng, path }: { lng: string; path?: string }) => {
  return (
    <footer className="  mt-14 px-32  pb-12 bg-black ">
      <div className=" container mx-auto grid grid-cols-3 text-white  ">
        <aside className="pt-[30px] pb-[40px] ">
          <section>
            <h4 className="pt-[25px] pb-[10px] mb-[10px] text-xl uppercase font-oswald">
              Follow Us!
            </h4>
            <ul>
              <li>
                <Link
                  className="flex gap-2 items-center hover:text-blue-300"
                  href={"https://www.facebook.com/polarisfootballacademy"}>
                  <span>
                    <UiwFacebook />
                  </span>
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-2 items-center hover:text-orange-400"
                  href={"https://www.instagram.com/polarisfootballacademy"}>
                  <span>
                    <EntypoSocialInstagram />
                  </span>
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-2 items-center hover:text-red-500"
                  href={"https://www.youtube.com/@PolarisFootballAcademyTaiwan"}>
                  <span>
                    <SimpleIconsYoutube />
                  </span>
                  <span>Youtube</span>
                </Link>
              </li>
            </ul>
          </section>
        </aside>
        <aside className="pt-[30px] pb-[40px] pe-3">
          <section>
            <h4 className="pt-[25px] pb-[10px] mb-[10px] text-xl uppercase font-oswald">
              POLARIS MAIN OFFICE
            </h4>
            <ul>
              <li>
                <Link
                  className="flex gap-2 items-center hover:text-red-500"
                  href={"https://line.me/R/ti/p/@748qooio"}>
                  <span>
                    <RiPhoneFill />
                  </span>
                  <span>LINE ID :@748qooio </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-2 items-center hover:text-red-500"
                  href={"mailto:polarisfootballacademy@gmail.com"}>
                  <span>
                    <TablerMailFilled />
                  </span>
                  <span className="min-w-[175px] break-words">
                    polarisfootballacademy@gmail.com
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-2 items-center hover:text-red-500"
                  href={
                    "https://www.google.com.tw/maps/place/PFA+Polaris+%E8%B6%B3%E7%90%83%E9%AB%94%E8%82%B2%E5%AD%B8%E9%99%A2+(PolarisFootballAcademy)/@25.000694,121.5147292,15z/data=!4m6!3m5!1s0x3442a92f0c71d415:0x5d0e9999c6afa97f!8m2!3d25.000694!4d121.5147292!16s%2Fg%2F11txvp7g_r?entry=ttu"
                  }>
                  <span>
                    <MaterialSymbolsLocationOnRounded />
                  </span>
                  <span>No. 2, Dehe Rd, Yonghe District, New Taipei City, Taiwan 234 </span>
                </Link>
              </li>
            </ul>
          </section>
        </aside>
        <aside className="pt-[30px] pb-[40px]">
          <section>
            <h4 className="pt-[25px] pb-[10px] mb-[10px] text-xl uppercase font-oswald">
              OUR MISSION
            </h4>
            <p>
              Polaris strives to enhance the quality of life of our next generation, by providing
              them with healthy, positive, fun, and professional sports and recreational programs at
              an early age. We believe the proven physical, emotional, and mental benefits gained
              from sports go hand-in-hand in building a lifetime of balanced, successful, confident
              and happy individuals.
            </p>
          </section>
        </aside>
      </div>
    </footer>
  );
};
