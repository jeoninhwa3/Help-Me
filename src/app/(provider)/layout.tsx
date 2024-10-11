import Provider from "@/providers/Provider";
import Footer from "./_components/Footer";
import UserProvider from "@/context/UserContext";
import Header from "./_components/Header";

const ProviderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <UserProvider>
        <div className="relative">
          <Header />
          {children}
          <Footer />
        </div>
      </UserProvider>
    </Provider>
  );
};

export default ProviderLayout;
