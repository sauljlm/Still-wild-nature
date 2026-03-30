import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const PLACE_ID = "CQctgiCV2a76EBE";
  const API_KEY = import.meta.env.GOOGLE_PLACES_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return new Response(JSON.stringify(data.result.reviews || []), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch reviews" }), {
      status: 500,
    });
  }
};