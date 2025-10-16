export function getHexaCode(name) {
  switch (name) {
    case "primary":
      return "#00D0EF";
      break;
    case "secondary":
      return "#FF8904";
      break;
    case "accent":
      return "#0082CE";
      break;
    case "neutral":
      return "#101828";
      break;
    case "info":
      return "#B8E6FE";
      break;
    case "success":
      return "#01DF72";
      break;
    case "warning":
      return "#FCB700";
      break;
    case "error":
      return "#E50006";
      break;
    default:
      return "#FFFFFF";
      break;
  }
}
