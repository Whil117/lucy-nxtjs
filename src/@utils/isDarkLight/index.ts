type Input = {
  r: number;
  g: number;
  b: number;
};
const TrainedNet = (input: Input) => {
  const convert = new Float32Array([input["r"], input["g"], input["b"]]);
  return {
    white:
      1 /
      (1 +
        1 /
          Math.exp(
            -10.37766170501709 +
              (12.204835891723633 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      6.169667720794678 -
                        4.042087078094482 * (convert[0] || 0) -
                        19.438833236694336 * (convert[1] || 0) +
                        14.434931755065918 * (convert[2] || 0)
                    )) +
              (11.918014526367188 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      2.6512327194213867 -
                        3.513329029083252 * (convert[0] || 0) -
                        17.795860290527344 * (convert[1] || 0) +
                        17.435640335083008 * (convert[2] || 0)
                    )) +
              (9.877058982849121 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      5.760010242462158 -
                        3.2945780754089355 * (convert[0] || 0) -
                        8.6066312789917 * (convert[1] || 0) -
                        7.926300525665283 * (convert[2] || 0)
                    ))
          )),
    black:
      1 /
      (1 +
        1 /
          Math.exp(
            10.386853218078613 -
              (12.263668060302734 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      6.169667720794678 -
                        4.042087078094482 * (convert[0] || 0) -
                        19.438833236694336 * (convert[1] || 0) +
                        14.434931755065918 * (convert[2] || 0)
                    )) -
              (11.879143714904785 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      2.6512327194213867 -
                        3.513329029083252 * (convert[0] || 0) -
                        17.795860290527344 * (convert[1] || 0) +
                        17.435640335083008 * (convert[2] || 0)
                    )) -
              (9.865546226501465 * 1) /
                (1 +
                  1 /
                    Math.exp(
                      5.760010242462158 -
                        3.2945780754089355 * (convert[0] || 0) -
                        8.6066312789917 * (convert[1] || 0) -
                        7.926300525665283 * (convert[2] || 0)
                    ))
          )),
  };
};

const RGBATOHEX = (color: string) => {
  const rgba = color.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
  return {
    r: parseInt(rgba[0]),
    g: parseInt(rgba[1], 16),
    b: parseInt(rgba[2], 16),
    a: parseInt(rgba[3], 16),
  };
};

export const HextToRGB = (hex: string, alpha?: number) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) ?? [];
  const isNaN =
    Number.isNaN(parseInt(result[1], 16)) ??
    Number.isNaN(parseInt(result[2], 16)) ??
    Number.isNaN(parseInt(result[3], 16));

  return !isNaN
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: alpha,
      }
    : RGBATOHEX(hex);
};

const isDarkLight = (hex: string) => {
  return TrainedNet(HextToRGB(hex)).black > TrainedNet(HextToRGB(hex)).white
    ? "#1a1a1a"
    : "#f7f8f8";
};

export default isDarkLight;
