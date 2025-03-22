import ClientComponent from "@/components/ClientComponent";
import { fetchAccessToken } from "@humeai/voice";

export default async function Page() {
  const accessToken = await fetchAccessToken({
    apiKey:  process.env.API_KEY,
    secretKey: process.env.SECRET_KEY,
  });
  if (!accessToken) {
    throw new Error();
  }
  const configId = process.env.MAJOR_CONFIG_ID;
  return <ClientComponent accessToken={accessToken} configId={configId}/>;
}