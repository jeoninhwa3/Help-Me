import Provider from "@/providers/Provider";
import Footer from "./_components/Footer";
import UserProvider from "@/context/UserContext";

const ProviderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <UserProvider>
        <main className="pt-[56px] bg-default">
          <div className="relative min-h-main-height px-5">{children}</div>
        </main>
        <Footer />
      </UserProvider>
    </Provider>
  );
};

export default ProviderLayout;
