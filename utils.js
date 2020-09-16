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
  const {
    name,
    phone,
    email,
    opstina,
    street,
    number,
    objectType,
    interfon,
    sprat,
    notes,
  } = receiver;

  const totalOrderPrice = food.cart.reduce((a, b) => {
    return a + parseInt(b.totalPrice);
  }, 0);

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
  <title>Order</title>
  <style>
  * {
      
          margin: 0;
          padding: 0;
          box-sizing: border-box;
  }
      body {
          background-color: #eee;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-transform: uppercase;
      }
      header {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          border-bottom: 1px solid gray;
          
      }
      main {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          flex-direction: column;
      }
      h3 {
          margin: 10px;
      }
      ul {
          margin: 5px;
          width: 310px;
          border: 1px solid gray;
          border-radius: 5px;
          padding: 10px;
          background-color: white;
      }
      li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 280px;
          border-bottom: 1px solid gray;
      }
      span {
        width: 50%;
      }
      .food {
        display: block;
      }
  </style>
</head>
<body>
    <header>
      <h1>Porudzbina</h1>
  </header>
  <main>
      <h3>Podaci o dostavi</h3>
      <ul>
          <li>
              <span>Ime:</span><span>${name}</span>
          </li>
          <li>
              <span>Telefon:</span><span>${phone}</span>
          </li>
          <li>
              <span>Email:</span><span>${email}</span>
          </li>
          <li>
              <span>Opština:</span><span>${opstina}</span>
          </li>
          <li>
              <span>Ulica:</span>:</span><span>${street}</span>
          </li>
          <li>
              <span>Broj:</span><span>${number}</span>
          </li>
          <li>
              <span>Tip objekta:</span><span>${objectType}</span>
          </li>
          <li>
              <span>Interfon:</span><span>${interfon}</span>
          </li>
          
          <li>
              <span>Sprat:</span><span>${sprat}</span>
          </li>
          <li>
              <span>Napomena:</span><span>${notes}</span>
          </li>
    </ul>
    
    <h3>Hrana</h3>
    
    <ul>
        ${food.cart.map((item) => {
          const listItem = `<li class="food" >
          <p>${item.title}</p>
          <p>${item.selectedMeat === null ? "---" : "Meso: " + item.selectedMeat}</p>
          <p>${
            item.orderSize.name === null ? "---" : "Veličina porcije: " + item.orderSize.name
          }</p>
          <p>${
            item.dodaciJelu.length > 0 ? "Dodaci: " + item.dodaciJelu.map((i) => i.name) : "----"
          }</p>
          <p>Cena: ${item.totalPrice}din</p>

          </li>`;
          return listItem;
        })}
        <li>Ukupna cena: ${totalOrderPrice}din</li>
    </ul>
  </main>
</body>
  </html>
  `;

  return html;
};
