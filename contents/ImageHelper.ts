import html2canvas from "html2canvas";

export const $ = document.querySelector.bind(document);

export class ImageHelper {
  private static Instance: ImageHelper;

  private constructor() {
  }

  static getInstance(): ImageHelper {
    if (!ImageHelper.Instance) {
      ImageHelper.Instance = new ImageHelper();
    }
    return ImageHelper.Instance;
  }

  async getPictureData(element) {
    return html2canvas(element, {
      useCORS: true
      // ignoreElements: (element) => {
      //   return element === ignoreElement;
      // }
    }).then(canvas => {
      return canvas.toDataURL("image/png");
    });
  };

  download(dataURL, title) {
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = title;
    link.click();
  }
}

