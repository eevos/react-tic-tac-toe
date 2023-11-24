import { useRef, useEffect } from 'react';
import Colors from './colors';
import Rectangle from './rectangle';

export default function Pong(){
  const props = [];
  props.width = 20;
  props.height = 20;
  props.canvasWidth = 300;
  props.canvasHeight = 200;
  props.fillStyle = Colors.COLORS.BLUE;
  props.rect = new Rectangle(0,0,20, Colors.COLORS.RED);

  return (
        <Canvas props = {props}/>
  );
}

function Canvas({props}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    fillBackGround();
    drawRect();

    const clickHandler = () => {
      fillBackGround();
      moveRect();
    };

    canvas.addEventListener('click', clickHandler);
    canvas.addEventListener('mousemove', (event) => {
      props.rect.speedX = getMouseSpeed(canvas, event).mouseSpeedX;
      props.rect.speedY = getMouseSpeed(canvas, event).mouseSpeedY;
    });

    return () => {
      canvas.removeEventListener('click', clickHandler);
    };

    function moveRect(){
      props.rect.posX += props.rect.speedX;      
      props.rect.posY += props.rect.speedY;     

      checkBoundaries();
      drawRect();
      requestAnimationFrame(moveRect); 
    }

    function getMouseSpeed(canvas, event){
      let mouseX = getMousePos(canvas, event).x;
      let mouseY = getMousePos(canvas, event).y;
      return {
        mouseSpeedX : ( mouseX > 0 ? 1 : -1),
        mouseSpeedY : ( mouseY > 0 ? 1 : -1)
      }      
    }

    function getMousePos(canvas, event) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = props.canvasWidth / props.rect.size;
      const scaleY = props.canvasHeight / props.rect.size;

      return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY,
      };
    }
        
    function checkBoundaries(){
      if (props.rect.posX + props.rect.size > props.canvasWidth || props.rect.posX < 0 ){
        props.rect.speedX = -props.rect.speedX;      
      }

      if (props.rect.posY + props.rect.size > props.canvasHeight || props.rect.posY < 0 ){
        props.rect.speedY = -props.rect.speedY;
      }
    }

    function drawRect(){
      fillBackGround();
      context.fillStyle = props.rect.color;
      context.fillRect(
        props.rect.posX, props.rect.posY, props.rect.size, props.rect.size);
    }

    function fillBackGround(){
      context.fillStyle = '#000000';
      context.fillRect(0,0, props.canvasWidth, props.canvasHeight);
    }
  }, []);

  return <canvas ref={canvasRef} width={props.canvasWidth} height={props.canvasHeight} />;
}
