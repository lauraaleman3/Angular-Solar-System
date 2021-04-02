import {Planet} from "./planet"
export const PLANETS:Planet[]= [
  { id: 1, name: 'Mercury', sunDistance: "35.98 million miles",orbitalPeriod:"88 days",moonNum:0,
   img:"https://cdn.mos.cms.futurecdn.net/MTEiJvP99DScN3vkAsE9LA.jpg",detail:"Mercury is the smallest and closest planet to the Sun in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek God Hermes. ",link:"https://en.wikipedia.org/wiki/Mercury_(planet)"
  },
  { id: 2, name: 'Venus', sunDistance: "67.24 million miles", orbitalPeriod:"225 days", moonNum:0,
   img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg/220px-PIA23791-Venus-NewlyProcessedView-20200608.jpg",detail:"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.Venus lies within Earth's orbit, and so never appears to venture far from the Sun.",link:"https://en.wikipedia.org/wiki/Venus"},
  
   { id: 3, name: 'Earth', sunDistance: "92.96 million miles", orbitalPeriod:"365 days",moonNum:1, img:"https://www.technewsworld.com/article_images/story_graphics_xlarge/xl-2020-earth-1.jpg",detail:"Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans, seas, gulfs, and other salt water bodies, but also by lakes, rivers, and other fresh water, which together constitute the hydrosphere.",link:"https://en.wikipedia.org/wiki/Earth"},
  { id: 4, name: 'Mars', sunDistance: "151.12 million miles",orbitalPeriod:"687 days",moonNum:2, img:"https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",detail:"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet' The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.",link:"https://en.wikipedia.org/wiki/Mars"},
  { id: 5, name: 'Jupiter', sunDistance: "483.8 million miles", orbitalPeriod: "12 years",moonNum:79, img:"https://cdn.britannica.com/66/155966-131-17B5B518/Jupiter.jpg",detail:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. Jupiter is the third-brightest natural object in the Earth's night sky after the Moon and Venus. It has been observed since pre-historic times and is named after the Roman god Jupiter.",link:"https://en.wikipedia.org/wiki/Jupiter"},
  { id: 6, name: 'Saturn', sunDistance: "890.8 million miles", orbitalPeriod:"29 years", moonNum:82, img:"https://www.nasa.gov/sites/default/files/thumbnails/image/edu_ring_a-round_the_saturn.jpg",detail:"aturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth., It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.It's named after the Roman god of wealth and agriculture;its astronomical symbol (♄) represents the god's sickle.",link:"https://en.wikipedia.org/wiki/Saturn"},
  { id: 7, name: 'Uranus', sunDistance: "1.784 billion miles", orbitalPeriod:"84 years",  moonNum:27, img:"https://images.immediate.co.uk/production/volatile/sites/25/2020/05/should-we-send-a-spacecraft-to-explore-uranus-4ec2cb4.jpg?quality=90&resize=768,574",detail:"Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions.",link:"https://en.wikipedia.org/wiki/Uranus"},
  { id: 8, name: 'Neptune', sunDistance: "2.793 billion miles",orbitalPeriod:"165 years", moonNum:14, img:"https://cdn.mos.cms.futurecdn.net/eNTJrysq4A6DqXncBtsRrB.jpg",detail:"Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.",link:"https://en.wikipedia.org/wiki/Neptune"},
];