import { useDraggable } from "@dnd-kit/core";

export default function Card({ id, content }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    opacity: isDragging ? 0.3 : 1,
    padding: "1rem",
    margin: "0.5rem 0",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {content}
    </div>
  );
}
