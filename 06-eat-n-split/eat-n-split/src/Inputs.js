export default function Inputs(props) {
  const { children, onSet, value } = props;

  const handleInputField = (input) => {
    const isNumber = isNaN(+input) ? false : true;
    onSet(isNumber ? +input : input);
  };

  return (
    <>
      <label>{children}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputField(e.target.value)}
      ></input>
    </>
  );
}
