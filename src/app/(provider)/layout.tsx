import Provider from "@/providers/Provider";
import Footer from "./_components/Footer";

const ProviderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <main className="pt-[56px]">
        <div className="min-h-main-height">{children}</div>
      </main>
      <Footer />
    </Provider>
  );
};

export default ProviderLayout;
