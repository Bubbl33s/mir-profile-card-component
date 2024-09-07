import CardPayment from "./CardPayment";

export default function Card() {
  return (
    <>
      <div className="text-[15px] rounded-lg mx-auto max-w-96 md:max-w-md bg-white text-gray-500 font-medium md:text-base lg:flex lg:max-w-3xl">
        <header className="rounded-t-lg overflow-hidden lg:rounded-t-none lg:rounded-s-lg lg:h-full">
          <img
            src="/image-product-mobile.jpg"
            alt="Gabrielle Essence Eauy De Parfum"
            className="lg:hidden"
          />
          <img
            src="/image-product-desktop.jpg"
            alt="Gabrielle Essence Eauy De Parfum"
            className="hidden h-full lg:block rounded-s-lg"
          />
        </header>
        <div className="px-[25px] py-7 md:px-8 lg:w-3/4 lg:p-10">
          <section>
            <p className="text-sm tracking-wider mb-2 lg:text-lg lg:mb-6">
              P E R F U M E
            </p>
            <h1 className="font-['Fraunces'] font-extrabold text-gray-800 text-3xl md:text-4xl mb-3 lg:text-[42px] lg:mb-9">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="mb-5 lg:text-xl">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </section>
          <CardPayment />
        </div>
      </div>
    </>
  );
}
