const dialog = document.getElementById('warningDialog');
const closeDialogButton = document.getElementById('close');

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    dialog.showModal();
  }
});

closeDialogButton.addEventListener('click', () =>{
  dialog.close();
});
