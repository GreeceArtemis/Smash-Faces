'use strict';
//Render crea toda la pagina cada vez que realiza su
const render = (root) =>{
  root.eempty();
  const conatinerAll = $('<div class="container-fluid"></div>');
  //Append los componentes
  containerAll.append(Title());
  containerAll.append(Description());



  root.append(containerAll);
};
//Estados para selecionar el pais
const state={
  countries:countries,
  selectedCountrie:null
}
//Esperando que cargue document
$( _ =>{

  const root = $('.root');
  render (root);
});
