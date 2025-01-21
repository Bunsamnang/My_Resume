import React from "react";

export default function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="text-primary font-extrabold mb-4 pb-1 border-b-2 border-primary tracking-tight text-sm uppercase">
        {title}
      </h2>
      <div className="space-y-1">{children}</div>
    </>
  );
}
