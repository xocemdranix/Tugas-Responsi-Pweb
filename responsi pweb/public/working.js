function generatePersona() {
  const nama = document.getElementById('nama').value.toLowerCase();
  const hobi = document.getElementById('hobi').value.toLowerCase();
  const angka = parseInt(document.getElementById('angka').value);

  let persona = "";

  if (hobi.includes("game") || hobi.includes("gaming")) {
    persona = "The Pro Gaymer";
  } else if (hobi.includes("musik")|| hobi.includes("music")) {
    persona = "The Jedag-Jedug Remixer";
  } else if (hobi.includes("coding") || hobi.includes("programming")) {
    persona = "The Sepuh Lambo 10";
  } else {
    persona = "The Human";
  }

  if (angka > 7) {
    persona += " 💵";
  } else if (angka < 4) {
    persona += " ⚛️";
  } else {
    persona += " ☢️";
  }

  if (nama.length >= 20) {
    persona += " (Philosopher Type)";
  } else if (nama.length <= 10) {
    persona += " (Dynamic Type)";
  } else {
    persona += " (Visionary Type)";
  }

  document.getElementById('hasil').innerText = persona;
}