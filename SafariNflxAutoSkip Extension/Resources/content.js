const skipButtons = () => {
  const targets = [
    {
      selector: 'button[data-uia="player-skip-intro"]',
      message: '已略過開場！🍿'
    },
    {
      selector: 'button[data-uia="player-skip-recap"]',
      message: '已略過前情提要！🕵️‍♂️'
    }
  ];

  targets.forEach(({ selector, message }) => {
    const btn = document.querySelector(selector);
    if (btn) {
      btn.click();
      console.log(`[Netflix Skipper] ⏩ Clicked: ${selector}`);
      showToast(message);
    }
  });
};

setInterval(skipButtons, 1000);

const observer = new MutationObserver(skipButtons);
observer.observe(document.body, { childList: true, subtree: true });

function showToast(text, type) {
    const backgroundColor = "#36B361"
    const playerContainer = document.querySelector('.watch-video')
    Toastify({
        text: text,
        selector: playerContainer,
        position: "center",
        style: {
            background: backgroundColor
        },
    }).showToast()
}
