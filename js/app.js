import '../css/style.scss';

const app = () => {
  const $draggableAreas = document.querySelectorAll('.draggable-area');
  const $draggableElements = document.querySelectorAll('.draggable-element');

  $draggableElements.forEach($element => {
    $element.addEventListener('dragstart', () => {
      $element.classList.add('dragging');
    });

    $element.addEventListener('dragend', () => {
      $element.classList.remove('dragging');
    });
  });

  $draggableAreas.forEach($area => {
    $area.addEventListener('dragover', e => {
      e.preventDefault();
    });

    $area.addEventListener('dragenter', () => {
      $area.classList.add('overflying');
    });

    $area.addEventListener('dragleave', () => {
      $area.classList.remove('overflying');
    });
  });

  const init = () => {
    console.log('Start...');
  };

  return {
    init,
  };
};

const { init } = app();

window.onload = init;
