export async function fetchInformation(query: string = '') {
  const basePath = 'https://covid-api.com/api/';

  try {
    const endpoint = `${basePath}${query}`;
    const result = await fetch(endpoint);
    return result.json();
  } catch (e) {
    console.log(e)
  }
}
