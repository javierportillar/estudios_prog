import PropTypes from 'prop-types'; // ES6

export const Item = (props) => {
    const {item,indice}=props;
    return (
        <div>
            <h3>{indice+1}.{item.subtitle}</h3> 
            <p style={{color:item.color}}>{item.text}</p>
        </div>
    )
}

Item.propTypes = {
    // item: PropTypes.object.isRequired,
    item: PropTypes.shape({
        subtitle: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        color: PropTypes.string,
    }),
    indice: PropTypes.number.isRequired,
}