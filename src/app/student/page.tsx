import Material from "./material";
import Schedule from "./schedule";

export default function Student() {
  return (
    <div className="py-4 px-2">
      <Schedule />
      <Material />
    </div>
  );
}
