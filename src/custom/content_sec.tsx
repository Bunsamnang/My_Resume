import React from "react";

export default function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-primary font-extrabold mb-4 pb-1.5 tracking-tight text-sm uppercase relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-primary to-primary/30 rounded-full" />
      </h2>
      <div className="space-y-1">{children}</div>
    </section>
  );
}
