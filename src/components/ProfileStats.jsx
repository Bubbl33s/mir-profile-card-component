export default function ProfileStats({ statsData }) {
  return (
    <div className="flex items-center justify-evenly p-6">
      {statsData.map((stat) => {
        return (
          <div key={stat.type} className="flex flex-col items-center">
            <p className="text-lg text-gray-800 font-bold">{stat.quantity}</p>
            <p className="text-[10px] tracking-widest">{stat.type}</p>
          </div>
        );
      })}
    </div>
  );
}
