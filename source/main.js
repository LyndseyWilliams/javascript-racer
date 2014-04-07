document.onreadystatechange = function() {
  if (document.readyState == 'complete')
  for (index=0; index<20;index++){
    console.log('done this many times', index)
    var blank_table_data = document.createElement("TD")
    document.getElementById("player1_row").appendChild(blank_table_data);
    var blank_table_data = document.createElement("TD")
    document.getElementById("player2_row").appendChild(blank_table_data);
  }
}
