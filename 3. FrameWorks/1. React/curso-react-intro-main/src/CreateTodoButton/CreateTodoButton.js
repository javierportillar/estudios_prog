import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  return (
    <button className="CreateTodoButton" 
    onClick={(event) => {
    event=prompt("Cual es el nombre de la actividad?")
      }}>
      +
    </button>
  );
};
