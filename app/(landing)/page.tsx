import Link from "next/link";
import Image from "next/image";

export default function Landing() {
  return (
    <main className="bg-landing-page bg-cover h-screen w-full">
      <div className="backdrop-blur-[5px] w-full h-full flex flex-col justify-center items-center">
        <div className="bg-white min-h-min p-5 rounded-sm">
          <Image
            src="/logo-large.svg"
            alt="Government of Canada"
            className="w-full min-h-[2rem] mb-5"
            width={0}
            height={0}
          />
          <div className="flex gap-5 p-5 justify-center md:gap-10">
            <Link
              href="/en/home"
              className="p-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-900 offset-border grow text-center"
            >
              English
            </Link>
            <Link
              href="/fr/home"
              lang="fr"
              className="p-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-900 offset-border grow text-center"
            >
              Français
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
