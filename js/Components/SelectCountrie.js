'use strict';
const GameGrid = (state,update) => {
  const stateSelectedCountrie =state.selectedCountrie;
  const row = $('<div class="row"></div>');
  const gameContainer = $('<section class="section-game"></section>');
  const divImagen = $('<div class="div-imagen"></div>');
  const divComparar = $('<div class="div-comparar font-rokkitt">Ingrese su nombre</div>');
  const input = $('<input class="input-name" placeholder= "Nombre">');
  const button = $('<button class="btn ">COMPROBAR</button>');

  divComparar.append(input);
  divComparar.append(button);
  const countrieS= stateSelectedCountrie;
  if(stateSelectedCountrie==null){
    const divNull = $("<div>ESCOGER LA SEDE</div>")
    gameContainer.append(divNull);
  }else{
    console.log(stateSelectedCountrie);
    let max = stateSelectedCountrie.length;
    let min = 0;
    let puntaje = 0;
    let aleatorio = Math.floor(Math.random() * (max - min)) + min;
    console.log(aleatorio);
    const Coder = stateSelectedCountrie[aleatorio];
    //const imgCoder = Coder.imagen;
    let patron = / /g;
    let nuevValor = "%20";
    const imgCoder = Coder.image.replace(patron,nuevValor);
    console.log(imgCoder);
  //  const img = $('<img src="img/peru/'+imgCoder+'"alt = "imgCoder.name">');
    const img = $(`<img class="img-coder" src="img/${state.countries}/`+imgCoder+`"alt="${Coder.name}"/>`);



      button.on('click',(e) => {
        e.preventDefault();
        console.log(input.val());
        if(Coder.name == input.val()){
          alert("vasbien");

        }else{
          alert("error");
        }
      //  update();
      })

      divImagen.append(img);
      gameContainer.append(divImagen);
      gameContainer.append(divComparar);
      row.append(gameContainer);
    return row;
  }





  gameContainer.append(divComparar);
  row.append(gameContainer);
return row;
}

const SelectedCountrie = (update) => {
  const row = $('<div class="row"></div>');
  const p = $('<p>Elige tu sede</p>');
  let select = $('<select></select>');
  const optionMexico = $('<option value="mexico">Mexico</option>');
  const optionPeru = $('<option value="peru">Peru</option>');

  select.append(optionPeru);
  select.append(optionMexico);
  p.append(select);
  row.append(p);

  if($("select").val()=="peru"){
    state.selectedCountrie = peru;
    state.countries = 'peru';
    row.append(GameGrid(state,update));
  //  update();
  }else{
    state.selectedCountrie = mexico;
    state.countries = 'mexico';
    row.append(GameGrid(state,update));
  //  update();
  }



return row;
}
