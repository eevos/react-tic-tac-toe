import { useRef, useEffect } from 'react';
import Colors from './colors';
import Rectangle from './rectangle';

export default function Pong(){
  const props = [];
  props.width = 20;
  props.height = 20;
  props.canvasWidth = 200;
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
      drawRect();
    };

    canvas.addEventListener('click', clickHandler);

    return () => {
      canvas.removeEventListener('click', clickHandler);
    };
    
    function drawRect(){
      context.fillStyle = props.rect.color;
      context.fillRect(
        props.rect.posX, props.rect.posY, props.rect.size, props.rect.size);
    }

    function changeColour(){
      if (context.fillStyle === Colors.COLORS.RED){
        context.fillStyle = Colors.COLORS.BLUE;
      } else {
        context.fillStyle = Colors.COLORS.RED;
      }
    }

    function moveRect(){
      props.rect.posX++;
      props.rect.posY++;
    }

    function fillBackGround(){
      context.fillStyle = '#000000';
      context.fillRect(0,0, props.canvasWidth, props.canvasHeight);
    }
  }, []);

  return <canvas ref={canvasRef} width={props.canvasWidth} height={props.canvasHeight} />;
}
