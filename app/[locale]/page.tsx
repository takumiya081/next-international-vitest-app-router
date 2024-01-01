import { getI18n } from "../../locales/server";
import Client from "./client/page";

export const metadata = {
  title: 'App Router',
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  const t = await getI18n();
  return (
  <>
    <h1>{t('hello')}</h1>
  </>
  );
}
