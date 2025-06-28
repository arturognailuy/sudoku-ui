import React, { useState } from 'react';
import './Settings.css';

interface SettingsProps {
  maxWrongAttempts: number;
  setMaxWrongAttempts: React.Dispatch<React.SetStateAction<number>>;
  maxHints: number;
  setMaxHints: React.Dispatch<React.SetStateAction<number>>;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({
  maxWrongAttempts,
  setMaxWrongAttempts,
  maxHints,
  setMaxHints,
  onClose,
}) => {
  const [tempMaxWrongAttempts, setTempMaxWrongAttempts] = useState(maxWrongAttempts);
  const [tempMaxHints, setTempMaxHints] = useState(maxHints);

  const handleSave = () => {
    setMaxWrongAttempts(tempMaxWrongAttempts);
    setMaxHints(tempMaxHints);
    onClose();
  };

  return (
    <div className="settings-overlay">
      <div className="settings-modal">
        <h2>Settings</h2>
        <div className="setting-item">
          <label>Max Wrong Attempts:</label>
          <input
            type="number"
            min="0"
            value={tempMaxWrongAttempts}
            onChange={(e) => setTempMaxWrongAttempts(parseInt(e.target.value, 10) || 0)}
          />
        </div>
        <div className="setting-item">
          <label>Max Hints:</label>
          <input
            type="number"
            min="0"
            value={tempMaxHints}
            onChange={(e) => setTempMaxHints(parseInt(e.target.value, 10) || 0)}
          />
        </div>
        <div className="settings-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
