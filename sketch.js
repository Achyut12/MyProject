var box, box2;
var edge1, edge2, edge3, edge4;
var wepon, wepon2
var boxhp = 50
var box2hp = 50
function setup()
{
  createCanvas(1270,620);
  box = createSprite(1000, 320, 40, 40)
  box2 = createSprite(200,320,40,40)
  edge1 = createSprite(635,4,1270,10)
  edge2 = createSprite(4,310,10,620)
  edge3 = createSprite(635,620,1270,20)
  edge4 = createSprite(1265,310,10,620)
  wepon = createSprite(600,120,70,5)
  wepon2 = createSprite(600,500,5,70)
  box.shapeColor=("red")
  box2.shapeColor=("blue")
  edge1.shapeColor=(rgb(52, 73, 94))
  edge2.shapeColor=(rgb(52, 73, 94))
  edge3.shapeColor=(rgb(52, 73, 94))
  edge4.shapeColor=(rgb(52, 73, 94))
  wepon.shapeColor=(rgb(146, 43, 33))
  wepon2.shapeColor=(rgb(46, 134, 193))
  background("black")
  
  drawSprites();
}

function draw()  
{
  box.collide(box2)
  box2.collide(box)
  box.collide(edge1)
  box2.collide(edge1)
  box.collide(edge2)
  box2.collide(edge2)
  box.collide(edge3)
  box2.collide(edge3)
  box.collide(edge4)
  box2.collide(edge4)

  background("black")
  textSize(20)
  stroke("green")
  text("Health = "+ boxhp,box.x - 50, box.y - 30)
  text("Health = "+ box2hp,box2.x - 50, box2.y - 30)

  if (keyIsDown(RIGHT_ARROW))  
 {
   box.x = box.x + 3
  }

  if (keyIsDown(LEFT_ARROW))  
  {
   box.x = box.x - 3
 }

   if (keyIsDown(UP_ARROW))  
   {
     box.y = box.y -3
    }

    if (keyIsDown(DOWN_ARROW))  
    {
    box.y = box.y + 3
   }

     if (keyIsDown("68"))  
     {
       box2.x = box2.x + 3
      }
    
      if (keyIsDown("65"))  
      {
       box2.x = box2.x - 3
       }
    
       if (keyIsDown("87"))  
       {
         box2.y = box2.y -3
        }
    
        if (keyIsDown("83"))  
        {
        box2.y = box2.y + 3
         }

         if (keyIsDown("68"))  
     {
       box2.x = box2.x + 3
      }

      if (keyIsDown("68") && keyIsDown("81"))  
     {
       box2.x = box2.x + 6
      }
    
      if (keyIsDown("65") && keyIsDown("81"))  
      {
       box2.x = box2.x - 6
       }
    
       if (keyIsDown("87") && keyIsDown("81"))  
       {
         box2.y = box2.y - 6
        }
    
        if (keyIsDown("83") && keyIsDown("81"))  
        {
        box2.y = box2.y + 6
         }

         if (keyIsDown(RIGHT_ARROW))  
         {
           box.x = box.x + 3
          }
        
          if (keyIsDown(LEFT_ARROW) && keyIsDown("16"))  
          {
           box.x = box.x - 6
         }
        
           if (keyIsDown(UP_ARROW) && keyIsDown("16"))  
           {
             box.y = box.y -6
            }
        
            if (keyIsDown(DOWN_ARROW) && keyIsDown("16"))  
            {
            box.y = box.y + 6
            }

         if(box.isTouching(wepon))
         {
           wepon.x = box.x
           wepon.y = box.y
         }

         if(box2.isTouching(wepon2))
         {
           wepon2.x = box2.x
           wepon2.y = box2.y
         }

         if(box2.isTouching(wepon))
         {
           box2hp = box2hp - 1
         }

         if(box.isTouching(wepon2))
         {
           boxhp = boxhp - 1
         }

         if(boxhp == 0)
         {
           box.destroy()
          text("Blue wins!!",635,310)
         }

         if(box2hp == 0)
         {
           box2.destroy()
          text("Red wins!!",635,310)
         }

  drawSprites();
}