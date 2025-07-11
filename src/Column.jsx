import { useDroppable } from "@dnd-kit/core";

export default function Column({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        backgroundColor: isOver ? "#e0f7fa" : "#f4f4f4",
        padding: "1rem",
        borderRadius: "8px",
        minHeight: "200px",
        flex: 1,
        margin: "0 1rem",
      }}
    >
      {children}
    </div>
  );
}
