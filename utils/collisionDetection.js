export const checkCollision = (spriteA, spriteB) => {
  const rectA = {
    x: spritePositions[spriteA.id].x,
    y: spritePositions[spriteA.id].y,
    width: spriteA.width || 50, 
    height: spriteA.height || 50 
  };

  const rectB = {
    x: spritePositions[spriteB.id].x,
    y: spritePositions[spriteB.id].y,
    width: spriteB.width || 50, 
    height: spriteB.height || 50
  };

  return (
    rectA.x < rectB.x + rectB.width &&
    rectA.x + rectA.width > rectB.x &&
    rectA.y < rectB.y + rectB.height &&
    rectA.y + rectA.height > rectB.y
  );
};

  export const handleCollisions = (sprites, setSprites) => {
    for (let i = 0; i < sprites.length; i++) {
      for (let j = i + 1; j < sprites.length; j++) {
        if (checkCollision(sprites[i], sprites[j])) {
          // Swap animations
          const temp = sprites[i].animations;
          sprites[i].animations = sprites[j].animations;
          sprites[j].animations = temp;
          
          setSprites([...sprites]);
          return true;
        }
      }
    }
    return false;
  };