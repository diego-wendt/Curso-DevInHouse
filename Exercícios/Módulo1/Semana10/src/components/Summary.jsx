import { SummaryCard } from "./SummaryCard";
import PropTypes from 'prop-types';
import { useAppContext } from "../contexts/app-context";

export const Summary = () => {

  const {categories} = useAppContext();

  return (
    <div className="summary-container">

      {
        categories.map((category, index)=>{
          return(
            <SummaryCard key={index} tipo={category.title} quantidade={category.count}/>
          )
        })
      }

    </div>
  );
};

Summary.propTypes = {
    tipo: PropTypes.string,
    quantidade: PropTypes.number,

}