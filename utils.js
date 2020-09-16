import axios from "axios";

//////////////////////////////
// Fetch Instagram pictures //
const instagramRegExp = new RegExp(
  /<script type="text\/javascript">window\._sharedData = (.*);<\/script>/
);

export const fetchInstagramPhotos = async (accountUrl) => {
  const response = await axios.get(accountUrl);
  const json = JSON.parse(response.data.match(instagramRegExp)[1]);
  const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
    0,
    12
  );
  const photos = edges.map(({ node }) => {
    return {
      url: `https://www.instagram.com/p/${node.shortcode}/`,
      thumbnailUrl: node.thumbnail_src,
      displayUrl: node.display_url,
      caption:
        node.edge_media_to_caption.edges.length > 0
          ? node.edge_media_to_caption.edges[0].node.text
          : "",
    };
  });
  return photos;
};

////////////////////////////////
// Create HTML email template //
export const renderHTMLEmail = (receiver, food) => {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
  <title>Porudzbina</title>
  </head>
  <body>
  
  <h1>Porudzbina</h1>
  <ul>
    <li>Ime: ${receiver.name}</li>
  </ul>
  <p>This is a paragraph.</p>
  
  </body>
  </html>
  `;

  return html;
};
