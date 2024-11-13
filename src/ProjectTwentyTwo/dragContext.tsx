import { createContext, ReactNode, useState } from "react";

type DragContext = {
  objectPosition: { top: number; left: number };
  isDragging: boolean;
  initialX: number;
  initialY: number;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  handleMouseMove: (e: React.MouseEvent) => void;
};

type DragContextProviderProps = {
  children: ReactNode;
};

const DragContext = createContext<DragContext>({
  objectPosition: { top: 0, left: 0 },
  isDragging: false,
  initialX: 0,
  initialY: 0,

  handleMouseDown: () => {},
  handleMouseUp: () => {},
  handleMouseMove: () => {},
});

const DragContextProvider = ({ children }: DragContextProviderProps) => {
  const [objectPosition, setObjectPosition] = useState({ top: 0, left: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  let left = 0;
  let top = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setInitialX(e.clientX - objectPosition.left);
    setInitialY(e.clientY - objectPosition.top);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setObjectPosition({
        top: e.clientY - initialY,
        left: e.clientX - initialX,
      });
    }
  };
  return (
    <DragContext.Provider
      value={{
        objectPosition,
        isDragging,
        initialX,
        initialY,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
      }}
    >
      {children}
    </DragContext.Provider>
  );
};

export { DragContext, DragContextProvider };
