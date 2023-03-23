import { useApolloClient } from '@apollo/client';

export default function Home() {
  const client = useApolloClient();
  return (
    <main>
      <h1>remote</h1>
      <p>apollo client version (from shell provider) {client.version}</p>
    </main>
  );
}
