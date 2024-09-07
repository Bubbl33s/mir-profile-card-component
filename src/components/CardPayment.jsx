export default function CardPayment() {
  return (
    <>
      <div className="flex items-center gap-4 md:gap-3 lg:gap-6 lg:mt-8">
        <h2 className="font-['Fraunces'] text-3xl font-black text-emerald-700 lg:text-4xl">
          $149.99
        </h2>
        <p className="line-through lg:text-lg">$169.99</p>
      </div>
      <div className="font-black mt-4 lg:mt-8">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          className="bg-emerald-700 rounded-lg text-white py-4 flex items-center justify-center gap-2 hover:bg-emerald-900 lg:text-xl"
        >
          <img src="/icon-cart.svg" alt="Cart icon" />
          Add to Cart
        </a>
      </div>
    </>
  );
}
