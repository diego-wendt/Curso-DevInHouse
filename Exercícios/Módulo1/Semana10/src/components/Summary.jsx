import { SummaryCard } from "./SummaryCard";
import PropTypes from 'prop-types';

export const Summary = () => {
  return (
    <div className="summary-container">
      <SummaryCard tipo='Front-end' quantidade={20}/>
      <SummaryCard tipo='Back-end' quantidade={10}/>
    </div>
  );
};

Summary.propTypes = {
    tipo: PropTypes.string,
    quantidade: PropTypes.number,

}