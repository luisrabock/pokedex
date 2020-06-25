export const checkColorType = (type) => {
  switch (type) {
    case "GRASS":
      return "#22c02a";
    case "POISON":
      return "#9cb820";
    case "FIRE":
      return "#f08030";
    case "FLYING":
      return "#9096f0";
    case "WATER":
      return "#6890f0";
    case "BUG":
      return "#9cb820";
    case "ELECTRIC":
      return "#FAD61D";
    case "GROUND":
      return "#e0b668";
    case "PSYCHIC":
      return "#eb2d77";
    case "FAIRY":
      return "#f09ad9";
    case "FIGHTING":
      return "#c03028";
    case "STEEL":
      return "#6d8f9c";
    case "NORMAL":
      return "#a39f99";
    default:
      return "#a39f99";
  }
};

/*
normal=#f8f7f7
figheter=
flying=
ground=
rock=#b8a038
bug=
ghost=#705898
steel=
fire=
water=
eletric=
psic=
ice=#98d8d8
dragon=#7038f8
dark=#504843
fairy=
unknow=#f8f7f7
shadow=#f8f7f7
*/
