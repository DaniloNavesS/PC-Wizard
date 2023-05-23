import './input.css'

function InputBusca() {
  return(
    <div id='divInputs'>
      <form id='formInput'>
      <label>
          Filtro:
          <input type="text" name="name" />
      </label>
    <input type="submit" value="enviar" />
    <label>
          Filtro:
          <input type="text" name="name" />
      </label>
    <input type="submit" value="enviar" />
    <label>
          Filtro:
          <input type="text" name="name" />
      </label>
    <input type="submit" value="enviar" />
    </form>
  </div>
  
  );
  
}
export default InputBusca;
