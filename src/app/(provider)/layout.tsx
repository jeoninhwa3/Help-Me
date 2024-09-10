import Provider from "@/providers/Provider";

const ProviderLayout = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

export default ProviderLayout;
