import "../..//styles/tailwind.css";
import type { AppProps } from "next/app";
import MainLayout from "@/components/layouts/MainLayout";
import { ApplicationProvider } from "@/contexts/ApplicationContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApplicationProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApplicationProvider>
  );
}
export default MyApp;
