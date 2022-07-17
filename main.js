var selectedRow = null

function onFormSubmit() {
        var formInfo = data();
        if (selectedRow == null){
            insertFilm(formInfo);
        }else{
            updateFilm(formInfo);
            resetForm();
    }
}

/**Funcion para obtener el valor de los input */
function data() {
    var formInfo = {};
    formInfo["name"] = document.getElementById("name").value;
    formInfo["gender"] = document.getElementById("gender").value;
    return formInfo;
}

/**Funcion para insertar datos en la tabla junto a sus respectivos botones de cambios */
function insertFilm(data) {
    var table = document.getElementById("ListFilms");
    var newRow = table.insertRow();
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.gender;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<button type="button" class="btn btn-warning" onClick="editFilm(this)">Editar</button>
    <button type="button" class="btn btn-danger" onClick="deleteFilm(this)">Borrar</button>`;
    resetForm();

}

/**Funcion para devolver el formulario a blanco */
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    selectedRow = null;
}

/**Funcion para editar los datos ingresados en la tabla */
function editFilm(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[1].innerHTML;
}

/**Funcion para indicar si realizamos la actualizacion de datos*/
function updateFilm(formInfo) {
    selectedRow.cells[0].innerHTML = formInfo.name;
    selectedRow.cells[1].innerHTML = formInfo.gender;
}

/**Funcion para eliminar una fila de la tabla */
function deleteFilm(td) {
        row = td.parentElement.parentElement;
        document.getElementById("ListFilms").deleteRow(row.rowIndex);
        resetForm();
}