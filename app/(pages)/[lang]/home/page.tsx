import { useTranslation } from "@/app/i18n";
import Link from "next/link";

export async function generateMetadata({ params: { lang } }) {
  const { t } = await useTranslation(lang, "home");
  return {
    title: t("title"),
  };
}

export default async function Home({ params: { lang } }) {
  const { t } = await useTranslation(lang, "home");
  return (
    <main>
      <h1>{t("title")}</h1>
      <ul className="list-disc list-inside">
        <li>
          <Link href={`/${lang}/about`} className="underline">
            {t("about-page")}
          </Link>
        </li>
      </ul>
    </main>
  );
}
