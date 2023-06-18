import "./globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { BreakpointIndicator, ClientLoader } from "@/components";
import { siteConfig } from "@/configs/site";
import { GlobalTransitionProvider } from "@/contexts";
import { classNames } from "@/utils/class_names";
import { config } from "@/i18n/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

// export const dynamic = "force-dynamic";
// export const generateStaticParams = async () => {
//   return [config.locales.map((locale) => ({ lang: locale }))];
// };
const RootLayout: React.Layout = ({ children, params }) => {
  return (
    <html lang={params.lang}>
      <body className={classNames(inter.className, "bg-ghost-white")}>
        <GlobalTransitionProvider>
          {children}
          <ClientLoader />
        </GlobalTransitionProvider>
        <BreakpointIndicator />
      </body>
    </html>
  );
};
export default RootLayout;
