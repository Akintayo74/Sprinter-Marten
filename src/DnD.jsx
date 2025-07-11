import { useState } from "react";
import {
  DndContext,
  closestCenter,
  DragOverlay,
} from "@dnd-kit/core";
import Column from "./Column";
import Card from "./Card";
import { initialCards } from "./data";

export default function App() {
  const [cards, setCards] = useState(initialCards);
  const [activeId, setActiveId] = useState(null);

  const activeCard = cards.find((card) => card.id === activeId);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={(event) => {
        setActiveId(event.active.id);
      }}
      onDragEnd={(event) => {
        // In a real app, you'd update card location here
        setActiveId(null);
      }}
      onDragCancel={() => setActiveId(null)}
    >
      <div style={{ display: "flex", padding: "2rem" }}>
        <Column id="column-1">
          {cards.map((card) => (
            <Card key={card.id} id={card.id} content={card.content} />
          ))}
        </Column>
        <Column id="column-2" />
      </div>

      <DragOverlay>
        {activeCard ? (
          <Card id={activeCard.id} content={activeCard.content} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}


