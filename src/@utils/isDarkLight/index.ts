const RGBAOBJ = (color: string, alpha?: number) => {
  const rgba = color?.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
  const colorR = parseInt(rgba[0]);
  const colorG = parseInt(rgba[1]);
  const colorB = parseInt(rgba[2]);
  const colorA = parseInt(rgba[3]);
  return {
    r: colorR,
    g: colorG,
    b: colorB,
    a: colorA,
    rgba: `rgba(${colorR || 0},${colorG || 0},${colorB || 0},${
      colorA || alpha || 1
    })`,
  };
};

export const HextToRGB = (hex: string, alpha = 1 as number) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) ?? [];

  const colorR = parseInt(result[1], 16);
  const colorG = parseInt(result[2], 16);
  const colorB = parseInt(result[3], 16);

  const isNaN =
    Number.isNaN(colorR) ?? Number.isNaN(colorG) ?? Number.isNaN(colorB);

  return !isNaN
    ? {
        r: colorR,
        g: colorG,
        b: colorB,
        a: alpha,
        rgba: `rgba(${colorR || 0},${colorG || 0},${colorB || 0},${alpha})`,
      }
    : RGBAOBJ(hex, alpha);
};

function isDark(color: string): string {
  const threshold = 150;
  const [r, g, b] = color?.match(/\d+/g)?.map(Number) ?? [0, 0, 0];
  const luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminosity < threshold ? "#f7f8f8" : "#1a1a1a";
}

const isDarkLight = (hex: string) => {
  return isDark(HextToRGB(hex).rgba);
};

export default isDarkLight;
