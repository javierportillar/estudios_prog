export const Item = (props) => {
    const {item}=props;
    return (
        <div>
            <h3>{item.subtitle}</h3> 
            <p style={{color:item.color}}>{item.text}</p>
        </div>
    )
}
