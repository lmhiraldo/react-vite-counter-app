import PropTypes from "prop-types";
export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h2>{name}</h2>
    </>
  );
};

FirstApp.PropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
};
FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "No hay substitulo",
  name: "Laura Martinez!!!",
};
