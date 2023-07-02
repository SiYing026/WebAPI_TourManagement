import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 400,
    address: 'Somewhere',
    price: 2000,
    maxGroupSize: 50,
    desc: "Westminster Bridge is a road-and-foot-traffic bridge over the River Thames in London, linking Westminster on the west side and Lambeth on the east side.The bridge is painted predominantly green, the same colour as the leather seats in the House of Commons which is on the side of the Palace of Westminster nearest to the bridge, but a natural shade similar to verdigris. This is in contrast to Lambeth Bridge, which is red, the same colour as the seats in the House of Lords and is on the opposite side of the Houses of Parliament.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 800,
    address: 'Somewhere',
    price: 700,
    maxGroupSize: 8,
    desc: "Bali is unique, Bali is unmatched. There is no other place like Bali in this world. A magical blend of culture, people, nature, activities, weather, culinary delights, nightlife, and beautiful accommodation. Bali is rated as one of the best travel destinations in the world by countless websites, review portals, and travel magazines each year – for very good reasons. Whatever your age, background, budget or interest, there is something great for everyone to explore and discover. And that’s a promise.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'Somewhere',
    price: 739,
    maxGroupSize: 8,
    desc: "The Thai highlands or Hills of northern Thailand is a mountainous natural region in the north of Thailand. Its mountain ranges are part of the system of hills extending through Laos, Burma, and China and linking to the Himalayas, of which they may be considered foothills.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'Somewhere',
    price: 850,
    maxGroupSize: 8,
    desc: "efore Bangkok was even on the map, the capital of Siam was Ayutthaya. It was once enormously prosperous and thriving as one of the largest trading centers in Asia. Even though it exists in ruins today, the magnificence of its past remains. As one of the most impressive ruined cities, it was designated as a UNESCO World Heritage Site. Ayutthaya is absolutely the best historic site, which boasts several Buddhist temples, monasteries, and ancient statues. Particularly, when the sunset covers the whole place, it turns into a true work of art. T",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: 'Somewhere',
    price: 500,
    maxGroupSize: 8,
    desc: "The island can be visited on a day trip from Bali (same day return), but I think it’s better to stay and spend at least a few days sightseeing. There are so many good photo spots, hikes, and other things to do in Nusa Penida!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 20000,
    address: 'Somewhere',
    price: 1009,
    maxGroupSize: 8,
    desc: "A cherry blossom is the flower from a Prunus tree, of which there are many different kinds. Species cherry blossoms are found throughout the world being especially common in regions in the Northern Hemisphere with temperate climates, including Japan, China, and Korea, as well as Nepal, India, Pakistan, Iran, and Afghanistan, and several areas across northern Europe.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address: 'Somewhere',
    price: 9119,
    maxGroupSize: 8,
    desc: "Holmen Lofoten is a small, family run hotel and seasonal restaurant set above the Arctic Circle, open mid February to mid December. We are also home to the events Kitchen On The Edge Of The World. ",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Chiang Mai, Thailand",
    city: "Thailand",
    distance: 52300,
    address: 'Somewhere',
    price: 1009,
    maxGroupSize: 8,
    desc: "With beautiful nature blended with Lanna Culture and colours of contemporary perfectly Chiang Mai is, therefore, a province that has many tourists, both Thai and foreigners, come in many millions each year. Popular tourist activities in Chiang Mai include worshipping the Phra That doi suthep, which is an important Landmark of Chiang Mai people. Experience the Local way of life and shop for stylish handmade products at Thapae Walking Street. Visit various species of plants at the Queen Sirikit botanical Garden and Rajapruek Royal Park. Do not miss to shop art products, taste local CUISINE and see Cultures on Nimmanhaemin Road. In addition, nature and mountain tours are another activity that should not be missed when visiting Chiang Mai, whether stepping on the highest point of Thailand at the top of doi inthanon. Absorb the beauty of the rice fields, feel the Cool breeze while watching the giant tiger flower at Doi Ang Khang. Experience Ecotourism HomeStay in Mae Kampong and visit Hmong villages in Doi Pui and many more.",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
