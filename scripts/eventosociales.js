const eventosociales = [
  {
    link: "https://drive.google.com/thumbnail?id=1wdIlR31rem7-MRRPRkJbTju3tYV5b3AC",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1w5CQq3uSTzrsOa-3SIObAEuuVKOpqYXf",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1xt8eX15u8GI19t8PChCT1kl-7VpXX6IF",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1itInDL5V3i0JZGvGUUmxQ6XjvLpx1O5V",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1H4CrkAItQWV4hCxe0HCOb6NycOzkOaZA",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1vcErklUJmIYnCIkp7jhfdpfAcaBwiNI6",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1LzykhvsasKFUWmtto64L7Z1MvuLfrKMF",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1EdaJqY_Vup6uvZq-yScBJZlXGixby2v5",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1HZyqV45i9MwN9dbQpVlXcxrgB63Ka5Ss",
  },
  {
    link: "https://drive.google.com/thumbnail?id=19x2I5IJsvv8B3ZN1d_9lnPdYMTZwM2H1",
  },
  {
    link: "https://drive.google.com/thumbnail?id=13OCrHE2Chnt6s0qTlmouxZsozf0R22nQ",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1AyPzgZPPJ_iJ1ou_6cfNx-l1OxZW5R_6",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1xLX_u5iB9xfi4pjQx-Kov1AEBYLSUVaQ",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1maHUTzJLB5_Ejf02reG6BXceWKBH74E9",
  },
];

const contenedor = document.querySelector(".fotos");

function dibujarCard(eventos) {
  eventos.forEach((evento) => {
    contenedor.innerHTML += `<a href="${evento.link}"><img src="${evento.link}" alt="foto-eventossociales" width="20%" height="20%"></a>`;
  });
}

dibujarCard(eventosociales);
