import { useTranslation } from "@/app/i18n";

export async function generateMetadata({ params: { lang } }) {
  const { t } = await useTranslation(lang, "about");
  return {
    title: t("title"),
  };
}

export default async function About({ params: { lang } }) {
  const { t } = await useTranslation(lang, "about");
  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
}
