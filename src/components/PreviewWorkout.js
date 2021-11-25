import "../PreviewWorkout.css";

import WorkoutCard from "./workoutCard";

export default function PreviewWorkout(props) {
  return (
    <div className="workout-page">
      {props.data.map((info) => {
        return <WorkoutCard data={info} />;
      })}
    </div>
  );
}
