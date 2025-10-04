export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  try {
    // Smart headers based on the URL
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
    };

    // Add specific headers for problematic domains
    if (url.includes("wikia.nocookie.net") || url.includes("fandom.com")) {
      headers["Referer"] = "https://dofus.fandom.com/";
    }

    // Fetch the image with proper headers
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get("content-type") || "image/png";

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=31536000"); // Cache for 1 year
    res.send(Buffer.from(imageBuffer));
  } catch (error) {
    console.error("Image proxy error:", error);
    res.status(500).json({ error: "Failed to fetch image" });
  }
}
