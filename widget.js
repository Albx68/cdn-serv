(function () {
  console.log("Custom API widget loaded!");

  // Step 1: Get Config (API URL, optional token)
  const config = window.MyWidgetConfig || {};
  const apiUrl =
    config.apiUrl || "https://jsonplaceholder.typicode.com/posts/1";
  const apiKey = config.apiKey || "";

  // Step 2: Call API
  fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(apiKey && { Authorization: `Bearer ${apiKey}` }),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("API Response:", data);

      // Show response in floating div
      const div = document.createElement("div");
      div.innerHTML = `<main class="flex flex-col gap-8 row-start-2 items-center "><h1 class="text-5xl font-bold text-center" contenteditable="true">I'm just a&nbsp;<a href="https://emojipedia.org/loudly-crying-face" aria-label="Loudly Crying Face" aria-describedby="loudly-crying-face" class="Link_link-wrapper__0xpcE Emoji_emoji__vbZHi __variable_e5a5aa Emoji_emoji-large__GG4kj" target="_self" data-src="" style="border-color: initial; border-image: initial; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; --tw-contain-size: ; --tw-contain-layout: ; --tw-contain-paint: ; --tw-contain-style: ; color: rgb(167, 196, 244); --tw-text-opacity: 1; background-color: rgb(122, 146, 177); transform: translateZ(0px); position: relative; z-index: 99999999; height: 67px; min-width: 67px; cursor: pointer; align-items: center; justify-content: center; border-radius: 5px; padding: 0.25rem; font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Android Emoji", EmojiSymbols, "EmojiOne Mozilla", "Twemoji Mozilla", "Segoe UI Symbol", "Noto Color Emoji Compat", emoji, notoEmoji, "notoEmoji Fallback"; font-size: 57px; --font-noto-emojipedia-fallback: "notoEmoji","notoEmoji Fallback"; --tw-bg-opacity: 1; font-weight: 400; display: inline !important;">😭</a><span style="font-size: 3rem;">&nbsp;Guy</span><br></h1><img alt="Chill Guy" width="180" height="38" decoding="async" data-nimg="1" class="" style="color:transparent" srcset="/_next/image?url=%2FchillGuy.webp&amp;w=256&amp;q=75 1x, /_next/image?url=%2FchillGuy.webp&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2FchillGuy.webp&amp;w=384&amp;q=75"><div class="flex flex-col items-center gap-4 text-center" contenteditable="true"><p class="text-center" contenteditable="true">My github 👇</p><a href="https://github.com/Albx68"><img alt="Alby's github" width="40" height="20" decoding="async" data-nimg="1" class="cursor-pointer" style="color:transparent" src="/githubWhite.svg"></a></div><div contenteditable="true"><a class=" hover:text-emerald-600 text-center" href="https://albert-yumnam.vercel.app/"><p class="text-center text-[10px]" contenteditable="true">My less loved portfolio (haven't worked on it for a while) 👈</p></a></div></main>`;
      document.body.appendChild(div);
    })
    .catch((error) => {
      console.error("API Error:", error);
    });
})();

function sayHello() {
  console.log("Hello from the widget!");
}
