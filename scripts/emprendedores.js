const emprendedores = [
  {
    link: "https://drive.google.com/thumbnail?id=1XqpTQS-vgS5iunn8CMXLbJV74fJUgPkU",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1TjqV1-pEOGHbv8A5xV_swra-Ts_JJVwz",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1wytnhWoKzAb3ukpecyas7pJ6U0DtU7ya",
  },
  {
    link: "https://drive.google.com/thumbnail?id=1IujC_WD3m1fStaczqXkKco9im6P_HB1p",
  },
  {
    link: "https://drive.google.com/thumbnail?id=14L00vwxldn2BxpSKU9UnKQxK0S1MQWDU",
  },
];

const contenedor = document.querySelector(".fotos");

function dibujarCard(emprendedores) {
  emprendedores.forEach((emprendedor) => {
    contenedor.innerHTML += `<a href="${emprendedor.link}"><img src="${emprendedor.link}" alt="foto-emprendedores" width="20%" height="20%"></a>`;
  });
}

dibujarCard(emprendedores);
