import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  return (
    <button className="CreateTodoButton" 
    onClick={(event) => {
      console.log("Hola")
      console.log(event.target)
      }}>
      +
    </button>
  );
};
