import getLastName from "./getLastName.js";
import getInitials from "./getInitials.js";
import getPubDate from "./getPubDate.js";

const theEconomist = [
  {
    "@context": "http://schema.org",
    "@type": "Article",
    url:
      "https://www.economist.com/finance-and-economics/2021/01/12/commodity-prices-are-surging",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "The Economist",
      logo: {
        "@type": "ImageObject",
        url:
          "https://amp.economist.com//engassets/google-search-logo.f1ea9088.png",
      },
    },
    headline: "Commodity prices are surging",
    mainEntityOfPage:
      "https://www.economist.com/finance-and-economics/2021/01/12/commodity-prices-are-surging",
    datePublished: "2021-01-12T00:00:00Z",
    dateModified: "2021-01-12T18:38:11Z",
    image:
      "https://www.economist.com/sites/default/files/images/2021/01/articles/main/20210116_fnp502.jpg",
    author: ["The Economist"],
    articleSection: "Finance & economics",
    thumbnailUrl:
      "https://www.economist.com/sites/default/files/images/2021/01/articles/main/20210116_fnp502.jpg",
    creator: ["The Economist"],
    keywords: [
      "commodity",
      "pandemic",
      "petroleum",
      "price",
      "Citigroup",
      "Standard &amp; Poor&apos;s",
      "China",
      "oil",
      "Consumer spending",
      "United States dollar",
      "market",
      "dollar",
      "consumption",
      "demand",
      "epidemic",
      "exports",
      "energy and resource",
      "vaccines",
      "prices",
    ],
  },
];

const ABC = [
  {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    author: [{ "@type": "Person", name: "Georgie Burgess" }],
    dateModified: "2017-05-19T22:36:59+00:00",
    datePublished: "2017-05-19T09:06:51+00:00",
    description:
      "Australia's largest salmon producer is told to clean up its act at two leases on Tasmania's west coast or it risks losing its stamp of approval for aquaculture practices.",
    headline:
      "Tassal given three months to clean up Macquarie Harbour salmon-farming leases",
    image: {
      "@type": "ImageObject",
      height: 416,
      url: "https://www.abc.net.au/cm/rimage/8250460-16x9-xlarge.jpg?v=6",
      width: 740,
    },
    keywords: "tassal,salmon,aquaculture,certification,food production,fish",
    mainEntityOfPage:
      "https://www.abc.net.au/news/2017-05-19/tassal-given-three-months-to-clean-up-macquarie-harbour-leases/8542900",
    publisher: {
      "@type": "Organization",
      name: "ABC News",
      logo: {
        "@type": "ImageObject",
        height: 60,
        url: "https://www.abc.net.au/res/abc/logos/amp-news-logo-60x240.png",
        width: 240,
      },
    },
  },
];

const huffPost = [
  {
    "@context": "http://schema.org",
    mainEntityOfPage: {
      "@type": "URL",
      "@id":
        "https://www.huffingtonpost.ca/entry/london-ontario-hospital-ceo_ca_5ffda59fc5b66f3f79615cbd",
    },
    headline:
      "Ontario Hospital CEO Fired For Trips Outside Canada During Pandemic",
    image: {
      "@type": "ImageObject",
      url:
        "https://img.huffingtonpost.com/asset/5ffda5f0260000da687a3e55.png?cache=ZrTrl6len6&ops=1200_630",
      width: 1200,
      height: 630,
    },
    dateCreated: "2021-01-12T09:15:15-05:00",
    datePublished: "2021-01-12T09:15:15-05:00",
    dateModified: "2021-01-12T12:42:26-05:00",
    author: { "@type": "Person", name: "Jon Rumley" },
    creator: { "@type": "Person", name: "Jon Rumley" },
    publisher: {
      "@type": "Organization",
      url: "https://www.huffingtonpost.ca",
      name: "HuffPost Canada",
      logo: {
        "@type": "ImageObject",
        url:
          "https://amp.assets.huffpost.com/assets-7f73dffe64045301aacc2ee3a0f9747e/logos/hp_amp.gif",
        width: 600,
        height: 60,
      },
    },
    keywords: [
      "news",
      "Health",
      "coronavirus",
      "hospitals",
      "controversy",
      "London Health Sciences Centre",
      "@chubwidget",
      "@ncpwidget",
      "@uuid_e9a6b3ed-d040-35a3-bb6d-6e3f72327079",
      "@newsletter-news",
      "@vert_news",
      "@gamp",
      "type: news",
    ],
    inLanguage: "en_CA",
    url:
      "https://www.huffingtonpost.ca/entry/london-ontario-hospital-ceo_ca_5ffda59fc5b66f3f79615cbd",
    "@type": "NewsArticle",
    description:
      "He travelled while a COVID-19 outbreak ravaged his London hospital.",
    articleSection: "News",
    thumbnailUrl:
      "https://img.huffingtonpost.com/asset/5ffda5f0260000da687a3e55.png?cache=ZrTrl6len6&ops=200_150",
  },
];

const WSJ = [
  [
    {
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.wsj.com/articles/republicans-weigh-trump-censure-impeachment-11610460924",
      },
      headline:
        "Pence Says He Won’t Invoke 25th Amendment as Republicans Weigh Actions",
      image: [
        "https://images.wsj.net/im-284444?width=1280&size=1",
        "https://images.wsj.net/im-284444?width=1280&size=1.33333333",
        "https://images.wsj.net/im-284444?width=1280&size=1.77777778",
      ],
      publisher: {
        "@type": "NewsMediaOrganization",
        name: "The Wall Street Journal",
        logo: {
          width: 576,
          height: 60,
          url: "https://s.wsj.net/media/wsj_amp_masthead_lg.png",
          "@type": "ImageObject",
        },
        "@id": "https://www.wsj.com/#publisher",
      },
      articleSection: "Politics",
      isAccessibleForFree: false,
      dateCreated: "2021-01-12T14:15:00.000Z",
      datePublished: "2021-01-12T14:15:00.000Z",
      dateModified: "2021-01-13T02:01:00.000Z",
      description:
        "Some GOP lawmakers say they would vote to impeach President Trump in wake of Capitol riot as he defends his remarks",
      url:
        "https://www.wsj.com/articles/republicans-weigh-trump-censure-impeachment-11610460924",
      hasPart: {
        "@type": "WebPageElement",
        isAccessibleForFree: false,
        cssSelector: ".paywall",
      },
      keywords: [
        "Political/General News",
        "Civil Unrest",
        "National/Public Security",
        "Crime/Legal Action",
        "Impeachment",
        "Politics/International Relations",
        "Domestic Politics",
        "Risk News",
        "Government Bodies",
        "Legislative Branch",
        "Executive Branch",
        "Elections",
        "SYND",
        "WSJ-PRO-WSJ.com",
        "Trump",
        "political",
        "general news",
        "civil unrest",
        "national",
        "public security",
        "crime",
        "legal action",
        "impeachment",
        "politics",
        "international relations",
        "domestic politics",
        "risk news",
        "government bodies",
        "legislative branch",
        "executive branch",
        "elections",
      ],
      author: [
        {
          "@type": "Person",
          name: "Kristina Peterson",
          sameAs: "https://www.wsj.com/news/author/7635",
        },
        {
          "@type": "Person",
          name: "Natalie Andrews",
          sameAs: "https://www.wsj.com/news/author/8271",
        },
        {
          "@type": "Person",
          name: "Rebecca Ballhaus",
          sameAs: "https://www.wsj.com/news/author/7537",
        },
      ],
      thumbnailUrl: "https://images.wsj.net/im-284444?width=1280&size=1",
      commentCount: 2198,
    },
  ],
];

const agriculture = [
  {
    publisher: {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Successful Farming",
      sameAs: [
        "https://www.facebook.com/SuccessfulFarmingUSA/",
        "https://twitter.com/SuccessfulFarm",
        "https://www.instagram.com/successful_farming/",
        "https://www.youtube.com/user/Agriculturecom",
        "https://www.pinterest.com/successfulfarm/",
      ],
      url: "https://www.agriculture.com",
      logo: {
        "@context": "http://schema.org",
        "@type": "ImageObject",
        url:
          "https://www.agriculture.com/sites/all/themes/custom/sfg/img/logos/successful-farming-ag.png",
        height: 60,
        width: 522,
      },
    },
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Brazil’s soybean crop is getting smaller due to drought",
    url:
      "https://www.agriculture.com/markets/your-world-in-agriculture/brazils-soybean-crop-is-getting-smaller-due-to-drought",
    author: {
      "@context": "http://schema.org",
      "@type": "Person",
      name: "Luis Vieira",
    },
    headline: "Brazil’s soybean crop is getting smaller due to drought",
    datePublished: "2020-03-18T08:37:06-0500",
    dateModified: "2020-03-18T15:37:56-0500",
    description:
      "As several farmers individually have reported that losses in their own region could overcome 50% of production.",
    mainEntityOfPage: {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "@id":
        "https://www.agriculture.com/markets/your-world-in-agriculture/brazils-soybean-crop-is-getting-smaller-due-to-drought",
    },
    image: {
      "@context": "http://schema.org",
      "@type": "ImageObject",
      representativeOfPage: "true",
      url:
        "https://static.agriculture.com/s3fs-public/image/2019/02/06/iStock-492132580.jpg",
      height: "",
      width: "",
    },
  },
];


const biobiochile = [
  [
    {
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      publisher: {
        "@type": "Organization",
        name: "BioBioChile",
        logo: {
          "@type": "ImageObject",
          url: "https://www.biobiochile.cl/assets/img/newBbcl.png",
          width: 296,
          height: 54,
        },
        sameAs: [
          "https://www.facebook.com/RadioBioBio",
          "https://twitter.com/biobio",
          "https://www.instagram.com/biobiochile",
        ],
      },
      url:
        "https://www.biobiochile.cl/noticias/economia/negocios-y-empresas/2020/08/21/ex-marine-harvest-recibe-multa-de-5-300-millones-por-fuga-de-mas-690-mil-salmones-en-calbuco.shtml",
      video_rudo_destacado: "",
      url_banner_falabella: "",
      barra_falabella: "",
      headline:
        "Ex Marine Harvest pagará multa superior a &#36;5.300 millones por fuga de 690 mil salmones en Calbuco",
      datePublished: "2020-08-21T11:55:05-04:00",
      dateModified: "2020-08-21T13:02:21-04:00",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.biobiochile.cl",
        name: "BioBioChile",
        alternateName: "BBCL",
        description: "La Red de Prensa Más Grande de Chile",
        url: "https://www.biobiochile.cl/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.biobiochile.cl/lista/buscador?s={search_term}",
          "query-input": "required name=search_term",
        },
        inLanguage: "es-ES",
      },
      thumbnailUrl:
        "https://media.biobiochile.cl/wp-content/uploads/2020/08/salmones-750x400.jpg",
      image: {
        "@type": "ImageObject",
        url:
          "https://media.biobiochile.cl/wp-content/uploads/2020/08/salmones-750x400.jpg",
        caption: "Contexto | Agencia UNO",
        description: "Contexto | Agencia UNO",
        width: 730,
        height: 350,
      },
      keywords: [
        "Calbuco",
        "Empresas",
        "exmarine harvest",
        "Puerto Montt",
        "Región de los Lagos",
      ],
      author: { "@type": "Person", name: "Manuel Stuardo" },
      creator: ["Manuel Stuardo"],
      articleBody:
        '<p>La empresa Mowi, ex Marine Harvest, recibió una multa que <strong>supera los &#36;5 mil millones</strong> por la fuga de más de 690 mil salmones en Calbuco, región de Los Lagos, en 2018. </p>\n<p>La sanción fue interpuesta por la <strong>Superintendencia de Medio Ambiente</strong> (SMA), y es la más alta que ha otorgado el organismo. </p>\n<p>A través de un comunicado, el SMA señaló que sancionaron dos cargos:</p>\n<p>&#8220;Uno calificado como gravísimo por 8.909 Unidad Tributaria Anual (UTA), lo que equivale a <strong>&#36;5 mil 300 millones</strong> y uno leve por 4.5 UTA, esto es <strong>&#36;2 millones 700 mil</strong>, contra la empresa Mowi Chile S.A., ex Marine Harvest Chile S.A., en la región de los Lagos, comuna de Calbuco, tras el escape de más de 690 mil ejemplares de Salmón del Atlántico en julio de 2018, luego de un evento climático ocurrido en la zona&#8221;, indica el documento.</p>\n<div class="lee-tambien-bbcl">\n\t<div class="lee-tambien-titulo">Lee también...</div>\n\t<div class="lee-tambien-caja">\n\t\t<a href="https://www.biobiochile.cl/noticias/nacional/region-de-los-lagos/2018/08/19/fiscalia-investiga-masiva-fuga-de-salmones-de-empresa-marine-harvest-en-calbuco.shtml">\n\t\t\t<div class="lee-tambien-img lazy" style="background-image: url(https://media.biobiochile.cl/wp-content/uploads/2018/08/salmones-por-fuga-320x190.jpg);"></div>\n\t\t</a>\n\t\t<a href="https://www.biobiochile.cl/noticias/nacional/region-de-los-lagos/2018/08/19/fiscalia-investiga-masiva-fuga-de-salmones-de-empresa-marine-harvest-en-calbuco.shtml" class="lee-tambien-titular">Fiscalía investiga masiva fuga de salmones de empresa Marine Harvest en Calbuco</a>\n\t</div>\n</div>\n<p>Sobre el primer cargo, la SMA indicó que es porque no se mantuvo en el Centro de Cultivo Punta Redonda las <strong>condiciones de seguridad apropiadas</strong>, ni elementos de cultivo de óptima calidad y resistencia según la RCA N° 2040/2001 y RCA N° 539/2011.</p>\n<p>Respecto a la sanción leve, la Superintendencia de Medio Ambiente indicó que &#8220;tiene relación con &#8216;mantener y operar instalaciones de apoyo en tierra para el cultivo de Salmones del Centro Punta Redonda, <strong>no destinadas a la operación del sistema de ensilaje</strong>, para el tratamiento de la mortalidad del salmón"&#8221;.</p>\n<div class="lee-tambien-bbcl">\n\t<div class="lee-tambien-titulo">Lee también...</div>\n\t<div class="lee-tambien-caja">\n\t\t<a href="https://www.biobiochile.cl/noticias/nacional/region-de-los-lagos/2018/07/26/presentan-querella-criminal-contra-marine-harvest-por-masiva-fuga-de-salmones.shtml">\n\t\t\t<div class="lee-tambien-img lazy" style="background-image: url(https://media.biobiochile.cl/wp-content/uploads/2018/07/salmn-de-los-lagos-750x400-1-1-320x190.jpg);"></div>\n\t\t</a>\n\t\t<a href="https://www.biobiochile.cl/noticias/nacional/region-de-los-lagos/2018/07/26/presentan-querella-criminal-contra-marine-harvest-por-masiva-fuga-de-salmones.shtml" class="lee-tambien-titular">Presentan querella criminal contra Marine Harvest por masiva fuga de salmones</a>\n\t</div>\n</div>\n<p>El superintendente del Medio Ambiente, Cristóbal De La Maza, esta resolución &#8220;cierra un largo y completo proceso de investigación por nuestra parte. Queremos dar la señal que todas aquellas empresas que no respeten la normativa y, además, la infrinjan provocando daño ambiental, como en este caso, <strong>serán sancionadas de manera proporcional&#8221;</strong>.</p>\n<h2>Riesgos asociados</h2>\n<p>La SMA enfatizó en que además del daño que produjo la fuga, hubo riesgo asociado a los salmones que no lograron sobrevivir, generando depósitos de materia orgánica, lo que causa &#8220;alteraciones en los <strong>ciclos biogeoquímicos del hábitat marino&#8221;</strong>.</p>\n<p>Otro riesgo asociado que arrojó la investigación fue la <strong>transmisión de patógenos y enfermedades</strong> por la interacción entre los salmones que escaparon y la fauna silvestre. </p>\n<p>La empresa Mowi podrá presentar voluntariamente ante la SMA una propuesta de reparación avalada por un estudio técnico ambiental. Además podrá acceder a <strong>un recurso de reposición</strong> en el plazo de cinco días hábiles, desde el día siguiente de la notificación de la resolución. </p>\n<p>Finalmente la SMA indicó que la salmonera tiene derecho a<strong> reclamar la sanción </strong>ante el Tribunal Ambiental, en un plazo de 15 días hábiles, también desde la notificación. </p>\n',
      articleSection: "economia",
      inLanguage: "es-ES",
    },
  ],
];


const bbc = [
  {
    "@context": "http://schema.org",
    "@type": "ReportageNewsArticle",
    url: "https://www.bbc.com/news/uk-scotland-48334029",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "BBC News",
      publishingPrinciples: "http://www.bbc.co.uk/news/help-41670342",
      logo: {
        "@type": "ImageObject",
        url:
          "https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1",
      },
    },
    datePublished: "2019-05-20T15:40:42.000Z",
    dateModified: "2019-05-20T15:40:42.000Z",
    headline: "Salmon farming giant Mowi probed over chemical use",
    image: {
      "@type": "ImageObject",
      width: 976,
      height: 549,
      url:
        "https://ichef.bbci.co.uk/news/1024/branded_news/007B/production/_107032100_salmon1.png",
    },
    thumbnailUrl:
      "https://ichef.bbci.co.uk/news/1024/branded_news/007B/production/_107032100_salmon1.png",
    mainEntityOfPage: "https://www.bbc.com/news/uk-scotland-48334029",
    author: { "@type": "Person", name: "By Lucy Adams" },
  },
];

export default function extractData(arr, arr2) {
  let LastName = "";
  let Initials = "";
  let pubDate = "";
  let publisher = "";
  let title = "";
  let url = "";


  if(arr[0][0] !== undefined && arr[0][0]["@context"] === 'http://schema.org') {
    LastName = getLastName(arr[0][0]);
    Initials = getInitials(arr[0][0]) || "";
    pubDate = getPubDate(arr[0][0]);
    title = arr[0][0].headline;
    publisher = arr[0][0].publisher.name;
    url = (arr2) => {
      if (arr[0][0].url) {
        return arr[0][0].url;
      } else {
        return "root link";
      }
    };
  } else if (!Array.isArray(arr)) {
    LastName = getLastName(arr);
    Initials = getInitials(arr) || "";
    pubDate = getPubDate(arr) || "";
    title = arr[0].headline;
    publisher = arr[0].publisher.name || "";
    url = (arr2) => {
      if (arr[0].url) {
        return arr[0].url;
      } else {
        return arr2[0];
      }
    };
  } else {
    LastName = getLastName(arr[0]);
    Initials = getInitials(arr[0]) || "";
    pubDate = getPubDate(arr[0]);
    title = arr[0].headline;
    publisher = arr[0].publisher.name || "";
    url = (arr2) => {
      if (arr[0].url) {
        return arr[0].url;
      } else {
        return "root link";
      }
    };
  }

  // return `${LastName}, ${Initials}${pubDate}, ${title}, ${publisher}, ${url(arr2)}`;

  return (
    <>
      {LastName} {Initials} {pubDate}. {title}. <i>{publisher}</i>. <br />{" "}
      {url(arr2)}
    </>
  );
}

// console.log("the economist", 
// extractData(theEconomist, ["the url"]));

// console.log("ABC", 
// extractData(ABC, ["the url"]));

// console.log("huffPost", 
// extractData(huffPost, ["the url"]));

// console.log("WSJ",
// extractData(WSJ));

// console.log("agriculture",
// extractData(agriculture));


// console.log("bbc",
// extractData(bbc));

// console.log("biobiochile",
// extractData(biobiochile));



