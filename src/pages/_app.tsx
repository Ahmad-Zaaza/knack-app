import "../../styles/tailwind.css";
import type { AppProps } from "next/app";
import MainLayout from "@/components/layouts/MainLayout";
import { ApplicationProvider } from "@/contexts/ApplicationContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ApplicationProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
