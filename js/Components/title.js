'use strict';

const Title = () => {
  const row = $('<div class="row"></div>');
  const title = $('<section class="section-title font-rokkitt">Smash Faces</section>');

  row.append(title);

  return row;
};
