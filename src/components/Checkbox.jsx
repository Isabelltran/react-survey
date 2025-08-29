/* eslint-disable react/prop-types */

function CheckBox({selected, setSelected}) {
    const options = ["swimmming", "bathing", "chatting", "no time to waste"];

    const handleChange = (event) => {
        const value = event.target.value;

        if (selected.includes(value)) {
            setSelected(selected.filter((item) => item !== value));
        }
        else {
            setSelected([...selected, value]);
        }
    };

    return (
    <ul>
      {options.map((option) => (
        <li key={option}>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value={option}
              checked={selected.includes(option)}
              onChange={handleChange}
            />
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default CheckBox;
