'use strict';

const Description = () => {
  const row = $('<div class="row"></div>');
  const description = $('<section class="section-description"></section>');
  const text = $('<p>Bienvenida al juego de Samsh Faces , tu mision es poder indentificar a todas tus compaaneras de clase ingresando para elllos su nombre . Tinenes 5 oportunidades antes de perder 1 punto y pasar a la siguiente.</p>');

  description.append(text);
  row.append(description);

  return row;
};
