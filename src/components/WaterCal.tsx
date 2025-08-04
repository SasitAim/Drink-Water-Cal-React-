import React, { useState, useEffect } from "react";
import "../style/WaterCal_style.css";

const DrinkWaterCalculator: React.FC = () => {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // darkMode 
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode-body");
    } else {
      document.body.classList.remove("dark-mode-body");
    }
  }, [darkMode]);

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);
    if (isNaN(weightNum)) {
      setResult("กรุณากรอกน้ำหนักให้ถูกต้อง");
      return;
    }
    const volume = Math.round((weightNum * 2.2 * 30) / 2);
    setResult(`ปริมาณน้ำที่ควรดื่ม ${volume} มล. ต่อวัน`);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div id="MyContainer" className={darkMode ? "dark-mode-container main-container" : "main-container"}>
        <h1 className="heading">ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
        <div className="minor-container">
          <p className="section-title">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2534/2534347.png"
              alt="water"
              className="water-icon"
            />
            คำนวณปริมาณน้ำ (มล.)
          </p>
          <div className="input-area">
            <input
              type="text"
              placeholder="น้ำหนักของคุณ (กิโลกรัม)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <button onClick={handleCalculate} className="add-btn">
              Calculate
            </button>
          </div>
          <br />
          <p className="section-title">
            {result || "ปริมาณน้ำที่ควรดื่ม _____ มล. ต่อวัน"}
          </p>
          <button
            onClick={toggleDarkMode}
            className={darkMode ? "btn-mode02" : "btn-mode"}
          >
            <img
              src="https://png.pngtree.com/png-vector/20210823/ourmid/pngtree-dark-mode-icon-light-png-clipart-png-image_3811921.jpg"
              alt="symbol mode"
              className="mode-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinkWaterCalculator;
