
const NoData = ({ text }: { text: string }) => {
  return (
    <div className="pt-[var(--padding)] w-full py-12 flex items-center justify-center min-h-screen">
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default NoData;
