export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  return (
    <div>
      <h1>Current API URL: {apiUrl}</h1>
      <p>API Key: {apiKey}</p>
    </div>
  );
}
