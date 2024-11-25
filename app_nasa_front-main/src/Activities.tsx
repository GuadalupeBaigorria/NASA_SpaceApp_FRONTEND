import React, { useState } from 'react';
import NavBar from './NavBar';

const Activities: React.FC = () => {
  const [availableActivities, setAvailableActivities] = useState([
    'Lateral derecho',
    'Lateral izquierdo',
    'Triceps',
    'Bicicleta'
  ]);
  
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [draggedActivity, setDraggedActivity] = useState<string | null>(null);

  const handleDragStart = (activity: string) => {
    setDraggedActivity(activity);
  };

  const handleDropOnAvailable = () => {
    if (draggedActivity && !availableActivities.includes(draggedActivity)) {
      setAvailableActivities([...availableActivities, draggedActivity]);
      setSelectedActivities(selectedActivities.filter(act => act !== draggedActivity));
    }
    setDraggedActivity(null);
  };

  const handleDropOnSelected = () => {
    if (draggedActivity && !selectedActivities.includes(draggedActivity)) {
      setSelectedActivities([...selectedActivities, draggedActivity]);
      setAvailableActivities(availableActivities.filter(act => act !== draggedActivity));
    }
    setDraggedActivity(null);
  };

  const handleClickAvailable = (activity: string) => {
    if (!selectedActivities.includes(activity)) {
      setSelectedActivities([...selectedActivities, activity]);
      setAvailableActivities(availableActivities.filter(act => act !== activity));
    }
  };

  const handleClickSelected = (activity: string) => {
    setSelectedActivities(selectedActivities.filter(act => act !== activity));
    setAvailableActivities([...availableActivities, activity]);
  };

  return (
    <div>
      <NavBar></NavBar>

    <div className="activities-container">
      <div className="available-activities">
        <h2>Actividades Disponibles</h2>
        <ul>
          {availableActivities.map(activity => (
            <li
              key={activity}
              draggable
              onDragStart={() => handleDragStart(activity)}
              onClick={() => handleClickAvailable(activity)}
            >
              {activity}
            </li>
          ))}
        </ul>
      </div>

      <div 
        className="selected-activities" 
        onDragOver={(e) => e.preventDefault()} 
        onDrop={handleDropOnSelected}
      >
        <h2>Actividades Seleccionadas</h2>
        <ul>
          {selectedActivities.map(activity => (
            <li
              key={activity}
              draggable
              onDragStart={() => handleDragStart(activity)}
              onClick={() => handleClickSelected(activity)} 
              onDrop={handleDropOnAvailable}
            >
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Activities;
