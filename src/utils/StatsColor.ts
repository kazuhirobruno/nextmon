import { StatColor } from "../interfaces/pokemon";

export function getColorByValue(value: number): StatColor {
  if (value < 30) return { color: "#E53935", text: "Baixo" };
  if (value < 60) return { color: "#FB8C00", text: "Fraco" };
  if (value < 90) return { color: "#FDD835", text: "Regular" };
  if (value <= 110) return { color: "#FBC02D", text: "Bom" };
  return { color: "#43A047", text: "Excelente" };
}