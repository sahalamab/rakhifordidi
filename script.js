function burstConfetti(count = 60) {

  const icons = [
    "❤️",
    "💕",
    "🎀",
    "✨",
    "🌸",
    "😂",
    "🎉",
    "🫶"
  ];


  for (let i = 0; i < count; i++) {

    const confetti =
      document.createElement("div");


    confetti.className =
      "confetti";


    confetti.textContent =
      icons[
        Math.floor(
          Math.random() * icons.length
        )
      ];


    confetti.style.left =
      Math.random() * 100 + "vw";


    confetti.style.animationDuration =
      (2 + Math.random() * 2) + "s";


    confetti.style.animationDelay =
      (Math.random() * 0.7) + "s";


    confetti.style.fontSize =
      (12 + Math.random() * 16) + "px";


    document.body.appendChild(confetti);


    setTimeout(() => {

      confetti.remove();

    }, 5000);

  }

}



const particleContainer =
  document.querySelector(".particles");


if (particleContainer) {

  for (let i = 0; i < 20; i++) {

    const particle =
      document.createElement("span");


    particle.textContent =
      ["·", "✦", "♡"][
        Math.floor(Math.random() * 3)
      ];


    particle.style.position =
      "fixed";


    particle.style.left =
      Math.random() * 100 + "vw";


    particle.style.top =
      Math.random() * 100 + "vh";


    particle.style.opacity =
      .15 + Math.random() * .35;


    particle.style.fontSize =
      10 + Math.random() * 18 + "px";


    particle.style.pointerEvents =
      "none";


    particleContainer.appendChild(
      particle
    );

  }

}