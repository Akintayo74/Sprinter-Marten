import { useState } from "react";
import {
  DndContext,
  closestCenter,
  DragOverlay,
} from "@dnd-kit/core";
import Column from "./Column";
import Card from "./Card";
import { initialCards } from "./data";

export default function DnD() {
  const [cards, setCards] = useState(initialCards);
  const [activeId, setActiveId] = useState(null);

  const activeCard = cards.find((card) => card.id === activeId);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (!over) {
      setActiveId(null);
      return;
    }

    const activeCardId = active.id;
    const overId = over.id;

    // Find the active card
    const activeCard = cards.find((card) => card.id === activeCardId);
    
    if (!activeCard) {
      setActiveId(null);
      return;
    }

    // If dropped on a column, move the card to that column
    if (overId.startsWith("column-")) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === activeCardId
            ? { ...card, column: overId }
            : card
        )
      );
    }

    setActiveId(null);
  };

  // Get cards for each column
  const getCardsForColumn = (columnId) => {
    return cards.filter((card) => card.column === columnId);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Drag & Drop Prototype
      </h1>
      
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={(event) => {
          setActiveId(event.active.id);
        }}
        onDragEnd={handleDragEnd}
        onDragCancel={() => setActiveId(null)}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <Column id="column-1" title="To Do">
            {getCardsForColumn("column-1").map((card) => (
              <Card key={card.id} id={card.id} content={card.content} />
            ))}
          </Column>
          
          <Column id="column-2" title="In Progress">
            {getCardsForColumn("column-2").map((card) => (
              <Card key={card.id} id={card.id} content={card.content} />
            ))}
          </Column>
          
          <Column id="column-3" title="Done">
            {getCardsForColumn("column-3").map((card) => (
              <Card key={card.id} id={card.id} content={card.content} />
            ))}
          </Column>
        </div>

        <DragOverlay>
          {activeCard ? (
            <Card id={activeCard.id} content={activeCard.content} />
          ) : null}
        </DragOverlay>
      </DndContext>
      
      <div style={{ 
        marginTop: "2rem", 
        padding: "1rem", 
        backgroundColor: "#f9f9f9", 
        borderRadius: "8px",
        fontSize: "0.9rem",
        color: "#666"
      }}>
        <strong>Instructions:</strong> Drag cards between columns to move them. 
        The cards will automatically update their column assignment.
      </div>
    </div>
  );
}