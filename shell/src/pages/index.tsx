import { useApolloClient } from '@apollo/client';

export default function Home() {
  const client = useApolloClient();
  return (
    <main className={styles.main}>
      <h1>shell</h1>
      <p>client version: {client.version}</p>
    </main>
  );
}
