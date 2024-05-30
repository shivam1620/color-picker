import React, { useState, useEffect } from 'react';

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  useEffect(() => {
    const complementaryColor = getComplementaryColor(color);
    document.body.style.backgroundColor = complementaryColor;
  }, [color]);

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function getComplementaryColor(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Convert hex to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Find the complementary color
    r = (255 - r).toString(16).padStart(2, '0');
    g = (255 - g).toString(16).padStart(2, '0');
    b = (255 - b).toString(16).padStart(2, '0');

    return `#${r}${g}${b}`;
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
