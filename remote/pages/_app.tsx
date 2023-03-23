import dynamic from 'next/dynamic';

const AppProviders = dynamic(
  () => import('shell/AppProviders').then((mod) => mod.AppProviders),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
}
