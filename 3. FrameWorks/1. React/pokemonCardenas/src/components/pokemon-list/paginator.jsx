import { PropTypes } from "prop-types";

export const Paginator = (props) => {
    const {offset, handleOffset} = props;
  return (
    <div className='list-actions'>
    <button disabled={offset === 0} className='list-actions-prev'
    onClick={()=>handleOffset(-1)}>{"<"}</button>
    <button className='list-actions-next' 
    onClick={()=>handleOffset(1)}>{">"}</button>
</div>
  )
}

Paginator.propTypes = {
    offset: PropTypes.number.isRequired,
    handleOffset: PropTypes.func.isRequired
}
