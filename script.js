document.addEventListener('DOMContentLoaded', () => {

  // トグル（表示/非表示）
  document.querySelectorAll('.reveal').forEach(el => {
    el.addEventListener('click', function() {
      this.textContent =
        this.textContent === this.dataset.question
          ? this.dataset.answer
          : this.dataset.question;
    });
  });

  // リセットボタン
  const btn = document.getElementById('resetBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.textContent = el.dataset.question;
      });
    });
  }

});
