/* eslint-disable react/prop-types */

const SwitchColor = ({ handleColorChage }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleColorChage();
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default SwitchColor;
