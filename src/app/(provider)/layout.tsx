import Provider from "@/providers/Provider";
import Footer from "./_components/Footer";

const ProviderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <main className="pt-[56px] bg-default">
        <div className="relative min-h-main-height px-5">{children}</div>
      </main>
      <Footer />
    </Provider>
  );
};

export default ProviderLayout;
