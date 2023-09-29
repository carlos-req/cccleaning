import ServicesHome from "@components/Home/ServicesHome";

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 max-w-[1440px] mx-auto">
      <div className="min-h-full gradient bg-blend-soft-light"></div>
      <h1 className="mb-4 text-4xl text-slate-950">Services</h1>
      <p className="mb-4 text-lg text-neutral-700">
        At our cleaning service, we are passionate about providing our clients
        with the highest level of cleanliness possible. We understand that a
        clean environment is not only essential for health and safety, but also
        for peace of mind and a sense of comfort within your home, office,
        workplace and rentals.
      </p>
      <ServicesHome />
    </main>
  );
}
