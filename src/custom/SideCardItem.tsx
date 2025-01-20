import React from "react";

const SideCardItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full p-2">
      <div className="bg-[#1e56a0] text-white font-extrabold uppercase p-2 text-center rounded-sm">
        {title}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
};

export default SideCardItem;
