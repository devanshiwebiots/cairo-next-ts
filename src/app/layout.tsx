import NoSsr from "@/utils/NoSsr";
import { Rubik } from "next/font/google";
import type { Metadata } from "next";
import "../../src/index.scss";
import { RootLayoutProps } from "@/Types/LayoutTypes";
import MainProvider from "./MainProvider";
import { I18nProvider } from "./i18n/i18n-context";
import { detectLanguage } from "./i18n/server";
import { getServerSession } from "next-auth";
import { authoption } from "./api/auth/[...nextauth]/authOption";
import SessionWrapper from "@/CommonComponent/SessionWrapper";
import { CustomToaster } from "@/utils/Toaster";

const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--rubik",
});

export const metadata: Metadata = {
  title: "Cairo - Premium Admin Template",
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  const lng = await detectLanguage();
  const session = await getServerSession(authoption);

  return (
    <I18nProvider language={lng}>
      <html>
        <head>
          <link rel='icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <link rel='shortcut icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0'></script>
        </head>
        <body suppressHydrationWarning={true} className={`${rubik.className}`}>
          <SessionWrapper session={session}>
            <NoSsr>
              <MainProvider>{children}</MainProvider>
              <CustomToaster/>
            </NoSsr>
          </SessionWrapper>
        </body>
      </html>
    </I18nProvider>
  );
};

export default RootLayout;
