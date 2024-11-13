import { useContext } from "react";
import { DragContext } from "./dragContext";

export default function ProjectTwentyTwo() {
  const dragContext = useContext(DragContext);
  return (
    <div>
      <div
        onMouseDown={(e: React.MouseEvent) => dragContext.handleMouseDown(e)}
        onMouseUp={dragContext.handleMouseUp}
        onMouseMove={(e: React.MouseEvent) => dragContext.handleMouseMove(e)}
        style={{
          top: dragContext.objectPosition.top,
          left: dragContext.objectPosition.left,
          position: "absolute",
        }}
        className="h-20 w-20 cursor-pointer place-content-center rounded-full bg-primary text-center"
      >
        <p className="text-background">Drag Me</p>
      </div>
    </div>
  );
}
