import type { PlasmoCSConfig } from "plasmo";
import { $ } from "~contents/ImageHelper";

export const config: PlasmoCSConfig = {
  matches: ["https://*.zsxq.com/dweb2/index/group/*"],
  all_frames: true
};


document.body.addEventListener('dblclick', (e) => {
  if ((e.target as HTMLDivElement).classList.contains('icon')) {
    (e.target as HTMLDivElement).click();
    setTimeout(() => {
      $('.topic-operation-container .item').click();
    }, 100)
  }
});

document.addEventListener('copy', async (e) => {
  const text = await window.navigator.clipboard.readText()
  window.open(text, '_blank')
})


export {};
