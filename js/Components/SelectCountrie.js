'use strict';
const GameGrid = (state,update) => {
  let stateSelectedCountrie =state.selectedCountrie;
  const row = $('<div class="row"></div>');
  const gameContainer = $('<section class="section-game"></section>');
  const divImagen = $('<div class="div-imagen"></div>');
  const divComparar = $('<div class="div-comparar font-rokkitt"></div>');
  const p = $('<p>Ingrese su nombre :</p>');
  let input = $('<input class="input-name" placeholder= "Nombre">');
  const button = $('<button class="btn ">COMPROBAR</button>');
  let imgCoder;
  let Coder;
  let img ;
  let puntaje = 0;
  let errores = 0;
  let aleatorio ;
  console.log(aleatorio);
  divComparar.append(p);
  divComparar.append(input);
  divComparar.append(button);
  let countrieS= stateSelectedCountrie;
  if(state.selectedCountrie==null){
    const divNull = $("<div>ESCOGER LA SEDE</div>")
    gameContainer.append(divNull);
  }else{
    console.log(stateSelectedCountrie);
    let max = state.selectedCountrie.length;
    let min = 0;
    aleatorio= Math.floor(Math.random() * (max - min)) + min;
    Coder= state.selectedCountrie[aleatorio];
    //const imgCoder = Coder.imagen;
    let patron = / /g;
    let nuevValor = "%20";
    imgCoder = Coder.image.replace(patron,nuevValor);
    console.log(imgCoder);
  //  const img = $('<img src="img/peru/'+imgCoder+'"alt = "imgCoder.name">');
    img = $(`<img class="img-coder" src="img/${state.countries}/`+imgCoder+`"alt="${Coder.name}">`);

    divImagen.append(img);
    gameContainer.append(divImagen);
    gameContainer.append(divComparar);
    row.append(gameContainer);

      button.on('click',(e) => {
        e.preventDefault();
        console.log(input.val());
        if(Coder.name.toLowerCase() == input.val().toLowerCase()){
          alert("Correcto-5puntos");
          $("input").val("");
          $(".img-coder").attr
          puntaje++;
          console.log(puntaje);
        }else{
          alert("Incorrecto 1/5");
          $("input").val("");
          errores++;
          console.log(errores);
        }
      //  divImagen.empty();
      const reRender = (state,row) =>{
      //divImagen.empty();

      };

      reRender(state,row);
      GameGrid(state);
      })


    return row;
  }





  gameContainer.append(divComparar);
  row.append(gameContainer);
return row;
}

const SelectedCountrie = (state,update) => {
  const row = $('<div class="row"></div>');
  const p = $('<p>Elige tu sede</p>');
  const select = $('<select id="seleccionador "class="select-countrie"></select>');
  const escoger = $("<option>Elige la sede</option>");
  const optionMexico = $('<option value="mexico">Mexico</option>');
  const optionPeru = $('<option value="peru">Peru</option>');
  const span = $('<span>Puntaje:</span>');
  const mostrarPuntaje = $('<span class="puntaje"></span>');
  span.append(mostrarPuntaje);
  p.append(span);
  select.append(escoger);
  select.append(optionPeru);
  select.append(optionMexico);
  p.append(select);
  row.append(p);

  select.on('change',(e) => {

    e.preventDefault();

    if($("select").val()=="peru"){
        alert("hola");
      state.selectedCountrie = peru;
      state.countries = 'peru';
      row.append(GameGrid(state,update));


    }else if($("select").val()=="mexico") {
        alert("chau");
      state.selectedCountrie = mexico;
      state.countries = 'mexico';
      row.append(GameGrid(state,update));
    }


  });

return row;
}
