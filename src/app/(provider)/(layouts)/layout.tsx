import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-[56px] bg-default md:pt-[60px]">
      <div className="relative max-w-container min-h-main-mobile-height mx-auto px-5 md:px-10 md:min-h-main-web-height">
        {children}
      </div>
    </main>
  );
};

export default CommonLayout;
