import { useTranslation } from "@/app/i18n";

export async function generateMetadata({ params: { lang } }) {
  const { t } = await useTranslation(lang, "learn");
  return {
    title: t("title"),
  };
}

export default async function Learn({ params: { lang } }) {
  const { t } = await useTranslation(lang, "learn");
  return (
    <>
      <h1>{t("title")}</h1>
    </>
  );
}
