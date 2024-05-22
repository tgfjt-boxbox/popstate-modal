const dialog = document.getElementById('warningDialog');
const closeDialogButton = document.getElementById('close');
const externalLinks = document.querySelectorAll('a[href^="http"]')

// 仮に、外部リンクには表示。内部リンクには非表示とする場合。
externalLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    dialog.showModal();
  });
});

// popstateイベントの設定
window.addEventListener('popstate', (event) => {
  dialog.showModal();

  // 状態を戻して戻るボタンを無効化
  history.pushState(null, null, location.href);
});

// 初期状態の履歴を追加
history.pushState(null, null, location.href);

closeDialogButton.addEventListener('click', () =>{
  dialog.close();
});
