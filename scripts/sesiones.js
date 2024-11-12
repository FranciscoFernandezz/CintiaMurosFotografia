const sesiones = [
  {
    link: "https://drive.google.com/thumbnail?id=1ha179juxAVJLTvpFtGcJtyrtc5uf0yyH",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1bgCuGSForXorzF7bPb_rTxM5G4eB7yS3",
  },
  {
    link: "https://drive.google.com/thumbnail?id=19blHL1-OfIebmgGLtkMXqWDS7s1EbGRH",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1Lm0MlFtCR9tYr_A4AYYBiEctfkoINjhE",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1FQKGjm1CWcW3kmmPSjq88N02vRdQigGC",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1KXQOSYZzzHGJA8j7uLrLzysscuCMaMSV",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1hMf5k9x2eu73_L_vXEaAM3lHURmqLImA",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1DbaNTzj4XIC8ZpXOARqaxvlSxmccTNh0",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1xDyhNmESFiUglS_x5LDaR8g9KYM-0rDF",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1WfzSFvwMRdojoO-SnaZmN__SaNFXoEYY",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1d-aAgoZG-Jf4JiIjZpfsRa0KckjDARHt",
  },
];

const contenedor = document.querySelector(".fotos");

function dibujarCard(sesiones) {
  sesiones.forEach((sesion) => {
    contenedor.innerHTML += `<a href="${sesion.link}"><img src="${sesion.link}" alt="foto-sesiones" width="20%" height="20%"></a>`;
  });
}

dibujarCard(sesiones);
