import { getProfile } from "@/sanity/sanity-utils";
import HeroSvg from "./icons/HeroSvg";
import Jobs from "./components/Jobs";

export default async function Home() {
  const profile = await getProfile();

  return (
    <main className="dark:bg-black max-w-7xl mx-auto  lg:px-16 px-6">
      <section className="flex dark:bg-black xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 ">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="dark:text-white text-3xl mt-10 font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {data.headline}
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                {data.shortBio}
              </p>
              <ul className="flex items-center gap-x-6 my-5">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        rel="noreferer noopener"
                        className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                      >
                        {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        <HeroSvg />
      </section>
      <Jobs />
    </main>
  );
}
