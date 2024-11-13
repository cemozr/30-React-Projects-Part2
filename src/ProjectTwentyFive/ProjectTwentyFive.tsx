import { useState } from "react";

type MultipleState = {
  count: number;
  text: string;
  active: boolean;
};

export default function ProjectTwentyFive() {
  const [multipleState, setMultipleState] = useState<MultipleState>({
    count: 0,
    text: "Hello World",
    active: false,
  });
  return (
    <div className="flex flex-col gap-2 rounded bg-secondaryLight p-5">
      <h1 className="text-xl font-bold">Multiple States Example</h1>
      <p>Count Value: {multipleState.count}</p>
      <p>Text Value: {multipleState.text}</p>
      <p>Active Status: {multipleState.active ? "Active" : "Deactive"}</p>
      <div className="flex gap-2">
        <button
          onClick={() =>
            setMultipleState({
              ...multipleState,
              count: multipleState.count + 1,
            })
          }
          className="w-1/3 rounded bg-primary text-background"
        >
          Increment
        </button>
        <button
          onClick={() =>
            setMultipleState({ ...multipleState, text: "Text Updated" })
          }
          className="w-1/3 rounded bg-primary text-background"
        >
          Change Text
        </button>
        <button
          onClick={() =>
            setMultipleState({
              ...multipleState,
              active: !multipleState.active,
            })
          }
          className="w-1/3 rounded bg-primary text-background"
        >
          Toggle Active
        </button>
      </div>
    </div>
  );
}
