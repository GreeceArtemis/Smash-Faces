'use strict';
//Render crea toda la pagina cada vez que realiza su
const render = (root) =>{
  root.empty();
  const containerAll = $('<div class="container-fluid"></div>');
  //Append los componentes
  containerAll.append(Title());
  containerAll.append(Description());

  if (state.selectedCountrie == "peru") {
    containerAll.append(SelectedCountrie( _ => {

      render(root);
    }));
  } else {
    containerAll.append(SelectedCountrie( _ => {

      render(root);
    }));
  }
  //Adjunta el container a root
  root.append(containerAll);
};
//Estados para selecionar el pais
const state={
  countries:null,
  selectedCountrie:null
}
//Esperando que cargue document
$( _ =>{

  const root = $('.root');
  render (root);
});
