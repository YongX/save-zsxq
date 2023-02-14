import type { PlasmoCSConfig } from "plasmo";
import {ImageHelper, $} from "~contents/ImageHelper";

export const config: PlasmoCSConfig = {
  matches: ["https://*.zsxq.com/dweb2/index/topic_detail/*"],
  all_frames: true
};


let counter = 0
let timer = null

const ImageInstance = ImageHelper.getInstance()
document.body.addEventListener('click', (e) => {

  // 点击 3 次后执行函数
  clearTimeout(timer);
  counter++;
  timer = setTimeout(async () => {
    if (counter >= 4) {
      console.log("success");

      const title = ($(".talk-content-container .content") as HTMLDivElement)
        .innerText.split("\n")[0];
      const date = ($(".date") as HTMLDivElement).innerText;
      const dataURL = await ImageInstance.getPictureData($(".topic-detail-page"))
      ImageInstance.download(dataURL, title + " " + date);
      clearTimeout(timer)
    }
    counter = 0
  }, 500)
}, true)

// export default CustomButton;
export {};
