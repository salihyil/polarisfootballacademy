import { Footer } from "../Footer";
import { Header } from "../Header";

const PublicComponent = ({ child, lang }: { child: React.ReactNode; lang: string }) => {
  return (
    <>
      <Header lng={lang} />
      <main className="container mx-auto relative max-lg:static">{child}</main>
      <Footer lng={lang} />
    </>
  );
};

export default PublicComponent;
