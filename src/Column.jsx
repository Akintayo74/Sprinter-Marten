import { useDroppable } from "@dnd-kit/core";

export default function Column({ id, children, title }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        backgroundColor: isOver ? "#e0f7fa" : "#f4f4f4",
        padding: "1rem",
        borderRadius: "8px",
        minHeight: "300px",
        flex: 1,
        margin: "0 1rem",
        border: isOver ? "2px dashed #00acc1" : "1px solid #ddd",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: "1rem", textAlign: "center" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}
