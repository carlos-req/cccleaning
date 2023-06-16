import Image from "next/image";
import Link from "next/link";
import HeroIMG from "../public/HeroIMG.png";
export default function Home() {
  return (
    <main className="h-screen w-full m-0">
      <div className="gradient mx-auto"></div>
      <div className="max-w-[1400px] mx-auto flex flex-row mt-10 px-12 md: gap-">
        <section className="mb-4 flex flex-col justify-center">
          <p className="text-lg my-5 text-black">
            HIGHLY PROFESSIONAL CLEANING
          </p>
          <h1 className="text-5xl text-primary font-bold">
            STRESS-FREE CLEAN
            <br />
            <span className="text-dgray">HOUSE AND OFFICE</span>
          </h1>
          <p className="text-sm my-5 text-black md:w-[80%]">
            Are you tired of spending your precious time scrubbing, dusting, and
            mopping? Look no further! At CC Cleaning, we specialize in providing
            top-notch cleaning solutions that will leave your home or office
            sparkling from floor to ceiling.
          </p>
          <button className="max-w-[250px] rounded-full bg-primary px-3.5 py-2.5 shadow-sm text-sm text-pwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Link href="/contact">Get A Quote</Link>
          </button>
        </section>

        <section className=" hidden md:block mx-auto w-full min-w-max">
          <Image
            src={HeroIMG}
            alt="Lady Holding Cleaning supplies"
            width={500}
          />
        </section>
      </div>
    </main>
  );
}
