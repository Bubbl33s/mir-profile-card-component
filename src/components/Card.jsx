import ProfileStats from "./ProfileStats";

export default function Card() {
  const statsData = [
    {
      type: "Followers",
      quantity: "80K",
    },
    {
      type: "Likes",
      quantity: "803K",
    },
    {
      type: "Photos",
      quantity: "1.4K",
    },
  ];

  return (
    <>
      <div className="text-sm rounded-2xl mx-auto max-w-96 md:max-w-md bg-white text-gray-500 font-normal text-center">
        <header className="">
          <img
            src="/bg-pattern-card.svg"
            alt="Bubbles pattern"
            className="rounded-t-2xl z-0"
          />
          <img
            src="/image-profile.jpg"
            alt="Profile picture"
            className="relative rounded-full border-[6px] z-10 border-white mx-auto mt-[-54px]"
          />
        </header>
        <section className="py-5">
          <div className="flex justify-center text-lg gap-2">
            <p className="text-gray-800 font-bold mb-1">Victor Crest</p>
            <p>26</p>
          </div>
          <p className="">London</p>
        </section>
        <hr className="divide-y divide-gray-300" />
        <footer>
          <ProfileStats statsData={statsData} />
        </footer>
      </div>
    </>
  );
}
