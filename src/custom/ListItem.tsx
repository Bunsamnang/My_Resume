const ListItem = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-2.5 items-start group">
      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-current opacity-60 flex-shrink-0 transition-transform duration-200 group-hover:scale-150 group-hover:opacity-100" />
      <span className="font-medium text-sm">{title}</span>
    </div>
  );
};

export default ListItem;
