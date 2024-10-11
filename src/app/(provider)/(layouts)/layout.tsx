import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-[56px] bg-default">
      <div className="relative min-h-main-height px-5">{children}</div>
    </main>
  );
};

export default CommonLayout;
