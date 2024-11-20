

// import Fetch from "@11ty/eleventy-fetch";

// export default async function () {
// 	let url = "https://ucar.fr/__custom__/agency/list";

// 	let json = await Fetch(url, {
// 		duration: "1d", // save for 1 day
// 		type: "json", // we’ll parse JSON for you
// 	});

// 	return json;
// };

// Fetch l'URL et permet d'utiliser le résultat du fetch avec la variable = nom du fichier
// Par exemple cms_fetch_links.js est utilisable dans les templates avec la variable cms_fetch_links
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url = "https://ucar.fr/__custom__/agency/list";

  /* This returns a promise */
  return EleventyFetch(url, {
      duration: "1d", // save for 1 day
      type: "json"    // we’ll parse JSON for you
  });
};