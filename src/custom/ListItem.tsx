const ListItem = ({ title }: { title: string }) => {
  return (
    <>
      <div className="flex gap-2 items-start">
        <span className=" text-[#1e56a0] font-extrabold">.</span>
        <span className="font-semibold">{title}</span>
      </div>
    </>
  );
};

export default ListItem;
