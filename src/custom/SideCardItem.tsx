import React from "react";

const SideCardItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full px-4 py-3">
      <div className="bg-white/15 backdrop-blur-sm text-white font-extrabold uppercase tracking-wider p-2 mb-3 text-center rounded-md text-sm border border-white/10">
        {title}
      </div>
      <div className="space-y-3 text-white/90">{children}</div>
    </div>
  );
};

export default SideCardItem;
