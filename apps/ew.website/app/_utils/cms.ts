import type { AllInputTypes, PossibleInputTypes } from "@/types";

/**
 *
 * We use populate=deep from a contentful plugin so we can get nested objects
 *
 * @param searchString - a string for fetching data from the cms, must be of the
 * format shown in the usage below.
 * @returns JS object of the data from the CMS
 * @example
 * // get page data
 * await getData("home-page?populate=deep");
 * await getData("about-page?populate=deep");
 * await getData("skills-page?populate=deep");
 * await getData("portfolio-page?populate=deep");
 * await getData("blog-page?populate=deep");
 * // get list of all blogs
 * await getData("blogs?populate=deep");
 * // search for a blog by slug
 * await getData(`blogs?filters[slug][$eq]=${string}&populate=deep`);
 *
 */

export const getData = async <T extends AllInputTypes>(
  searchString: T,
): Promise<PossibleInputTypes<T>> => {
  const requestUrl = `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337"
  }/api/${searchString}`;

  // Force the fetches to the CMS to be always cached, and add a tag to these
  // requests so we can post to the cache endpoint to revalidate all the content.
  // This can be improved further down the line by adding custom tags per section
  // of the site.
  const response = await fetch(requestUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CMS_KEY}`,
    },
    cache: "force-cache",
    next: { tags: ["all-content"] },
  });

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }

  try {
    const result = JSON.parse(await response.text());

    const { data } = result;

    return data;
  } catch (err) {
    console.error("Error formating results:", err);
    throw err;
  }
};
