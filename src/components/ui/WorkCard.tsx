function WorkCard({
  Step,
  icon,
  Title,
  Description,
}: {
  Step: string;
  icon: React.ReactNode;
  Title: string;
  Description: string;
}) {
  return (
    <div>
      <div className="p-5 rounded-lg text-xl font-semibold text-white border border-white/[0.5] shadow-lg">
        <h2 className="text-center">{Step}</h2>
        <div className="flex justify-center items-center bg-white rounded-full my-3 w-16 h-16 ml-auto mr-auto">
          <div className="text-black">{icon}</div>
        </div>
        <h4 className="text-center text-xl text-white mt-2 font-bold">
          {Title}
        </h4>
        <p className="text-base text-center text-white mt-2 font-normal">
          {Description}
        </p>
      </div>
    </div>
  );
}

export default WorkCard;
