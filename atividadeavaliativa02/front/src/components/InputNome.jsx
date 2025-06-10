
function InputNome(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        id={props.id}
        name={props.id}
        value={props.valor}
        onChange={props.onChange}
        required={props.required}
      />
      {props.erro && <p>{props.erro}</p>}
    </>
  );
}

export default InputNome;
