export function TechCard({
  cardInfo,
}: {
  cardInfo: {
    title: string;
    description: string;
    imageUrl: string;
    bgColor: string;
  };
}) {
  const { title, description, imageUrl, bgColor } = cardInfo;

  return (
    <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[#FAFAFA] dark:border-dark-200 bg-[#FAFAFA] dark:bg-dark-200 hover:bg-[#F2F2F2] dark:hover:bg-dark-300 hover:border-[#E0E0E0] dark:hover:border-dark-700 transition-colors duration-200">
      <div className={`p-3 ${bgColor} rounded-lg w-fit`}>
        <img src={imageUrl} className="size-8" alt={`${title} image`} />
      </div>
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-dark-200/70 dark:text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
}
