export const SummaryCard = ({tipo, quantidade}) => {
  return (
    <div className="summary-container__card">
      <span className="title">{tipo}</span>
      <span className="value">{quantidade}</span>
    </div>
  );
};
