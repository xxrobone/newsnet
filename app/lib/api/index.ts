const APIKEY = process.env.NEXT_PUBLIC_API_KEY;

/* const GUARDIANKEY = process.env.NEXT_PUBLIC_GUARDIAN_KEY */
/* const THE_GUARDIAN = 'https://content.guardianapis.com/search?api-key=' */

const BASE_URL = 'https://newsapi.org/v2/everything?apiKey=${APIKEY}'

const TOP_NEWS_URL =
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`;

const ENTERTAINMENT = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment'

const TECH = 'https://newsapi.org/v2/top-headlines?country=us&category=technology'

const HEALTH = 'https://newsapi.org/v2/top-headlines?country=us&category=health'

const ROBOT_URL = 'https://newsapi.org/v2/top-headlines?q=robot&' + `apiKey=${APIKEY}`;

const GENERAL_NEWS = 'https://newsapi.org/v2/top-headlines?country=us&category=general&' + `apiKey=${APIKEY}`;



export const getTopNews = async () => {
  const res = await fetch(BASE_URL, {  cache: "no-store" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
};

export const getNewsSearch = async (search: string | null, controller?: AbortController) => {
  const signal = controller ? controller.signal : undefined;
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${APIKEY}&q=${search}&pageSize=15)`, { signal, cache: 'force-cache' });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    if (controller && controller.signal.aborted) {
      // Request was aborted, you can handle this as needed
      console.log('Request aborted:', error.message);
    } else {
      throw error; // Rethrow other errors
    }
  }
};

export const getEntertainment = async () => {
  const res = await fetch(`${ENTERTAINMENT}&apiKey=${APIKEY}`, { cache: "force-cache" })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data
}

export const getTech = async () => {
  const res = await fetch(`${TECH}&apiKey=${APIKEY}`, { cache: "force-cache" })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data
}

export const getHealth = async () => {
  const res = await fetch(`${HEALTH}&apiKey=${APIKEY}`, { cache: "force-cache" })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data
}

export const getRobotNews = async () => {
  const res = await fetch(ROBOT_URL, { cache: "force-cache" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
};

export const getGenNews = async () => {
  const res = await fetch(GENERAL_NEWS, { cache: "force-cache" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
};

