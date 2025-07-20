/**
 * Fetches JSON data from a given URL
 *
 * @param url The URL to fetch JSON data from.
 */
export async function fetchJson(url: string): Promise<unknown> {
  const response = await fetch(url);
  if (!response.ok) {
    const text = await response.text();
    console.log(`Raw response: ${text}`);
    throw new Error(
      `Got unexpected status code fetching ${url}: ${response.statusText}`
    );
  }
  return response.json();
}
