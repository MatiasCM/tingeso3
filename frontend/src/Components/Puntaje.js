const add_to_puntaje = (puntaje) => {
  let currentScore = localStorage.getItem("puntaje");
  let remaining = localStorage.getItem("restantes");

  if (!currentScore) {
    localStorage.setItem("puntaje", puntaje);
  } else {
    let score = parseInt(currentScore) + puntaje;
    localStorage.setItem("puntaje", score);

    if (remaining > 0) {
      localStorage.setItem("restantes", remaining - 1);
    }

    if (remaining == 1) {
      localStorage.setItem("puntaje", Math.round(score / 4));
    }
  }

  return localStorage.getItem("puntaje");
};

export default add_to_puntaje;
