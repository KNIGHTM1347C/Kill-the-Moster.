var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["eadda92e-ff27-4f79-b30d-e0d9f80b1633","670ebe45-80d6-46aa-840f-a2995697884e","6d0c516b-16d9-4c90-9f84-5d988793272d","83b14256-d90d-438b-b371-c37f59ca2823","9d2cd492-7603-4763-ad1d-81f77e53b554","05525a31-247c-49aa-b936-4ecf0021c568","13623cf0-cc49-41f1-9db6-c4801a18bb9e","d94879a4-4856-4b1c-98e4-207e549de364"],"propsByKey":{"eadda92e-ff27-4f79-b30d-e0d9f80b1633":{"name":"snail_1","sourceUrl":null,"frameSize":{"x":62,"y":42},"frameCount":2,"looping":true,"frameDelay":30,"version":"AwMiQgFyyn0U7DKvooOugjHVRkst5OsT","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":62,"y":84},"rootRelativePath":"assets/eadda92e-ff27-4f79-b30d-e0d9f80b1633.png"},"670ebe45-80d6-46aa-840f-a2995697884e":{"name":"kid_16_waving_1","sourceUrl":"assets/api/v1/animation-library/gamelab/D5Yf9d61FntZdu8eHOGSu4nWw5G53rXf/category_people/kid_16_waving.png","frameSize":{"x":222,"y":300},"frameCount":1,"looping":true,"frameDelay":1,"version":"D5Yf9d61FntZdu8eHOGSu4nWw5G53rXf","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":222,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/D5Yf9d61FntZdu8eHOGSu4nWw5G53rXf/category_people/kid_16_waving.png"},"6d0c516b-16d9-4c90-9f84-5d988793272d":{"name":"grey_shirt2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/t44eFFNKurL6603QnBdIgqQ0CWopoOaC/category_people/grey_shirt2.png","frameSize":{"x":143,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"t44eFFNKurL6603QnBdIgqQ0CWopoOaC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":143,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/t44eFFNKurL6603QnBdIgqQ0CWopoOaC/category_people/grey_shirt2.png"},"83b14256-d90d-438b-b371-c37f59ca2823":{"name":"monstertruck_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png","frameSize":{"x":394,"y":232},"frameCount":1,"looping":true,"frameDelay":2,"version":"3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":232},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png"},"9d2cd492-7603-4763-ad1d-81f77e53b554":{"name":"ship15_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bwdjv0ZQBnapnKrNVKwYYOX6mKKXCGrj/category_vehicles/ship15.png","frameSize":{"x":398,"y":322},"frameCount":1,"looping":true,"frameDelay":2,"version":"bwdjv0ZQBnapnKrNVKwYYOX6mKKXCGrj","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":322},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bwdjv0ZQBnapnKrNVKwYYOX6mKKXCGrj/category_vehicles/ship15.png"},"05525a31-247c-49aa-b936-4ecf0021c568":{"name":"motorcycle_1","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"gwkGoD8xhxDoJAXXs8nR4EA8X1SENkP4","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/05525a31-247c-49aa-b936-4ecf0021c568.png"},"13623cf0-cc49-41f1-9db6-c4801a18bb9e":{"name":"spike_bot_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8dVkw87zEWjthHxqeMorQVy16Ka4eOYD/category_robots/spike_bot_walk.png","frameSize":{"x":122,"y":161},"frameCount":2,"looping":true,"frameDelay":5,"version":"8dVkw87zEWjthHxqeMorQVy16Ka4eOYD","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":322},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8dVkw87zEWjthHxqeMorQVy16Ka4eOYD/category_robots/spike_bot_walk.png"},"d94879a4-4856-4b1c-98e4-207e549de364":{"name":"HADDI MAN","sourceUrl":"assets/api/v1/animation-library/gamelab/nuGcPmuvycktJ3yt6exTfjxaGLoA1pc_/category_fantasy/rpgcharacter_07.png","frameSize":{"x":282,"y":209},"frameCount":1,"looping":true,"frameDelay":2,"version":"nuGcPmuvycktJ3yt6exTfjxaGLoA1pc_","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":209},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nuGcPmuvycktJ3yt6exTfjxaGLoA1pc_/category_fantasy/rpgcharacter_07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1=createSprite(155,272,300,2);
wall1.shapeColor="red";

var wall2=createSprite(200,390,400,2);
wall2.shapeColor="red";

var gameState = "serve";
var wall3=createSprite(4,196,2,400);
wall3.shapeColor="white";

var wall4=createSprite(299,170,2,200);
wall4.shapeColor="white";

var wall5=createSprite(185,73,230,2);
wall5.shapeColor="yellow";

var wall6=createSprite(395,190,2,400);
wall6.shapeColor="skyblue";

var wall7=createSprite(190,2,400,2);
wall7.shapeColor="purple";

var wall8=createSprite(72,137,2,130);
wall8.shapeColor="darkgreen";

var wall9=createSprite(150,200,150,2);
wall9.shapeColor="red";

var wall10=createSprite(222,170,2,60);
wall10.shapeColor="orange";

var target=createSprite(131,129,100,100);
target.shapeColor="yellow";

var player=createSprite(40,326,20,20);
player.shapeColor="blue";
player.setAnimation("spike_bot_walk_1");
player.scale = 0.2;


var enemy1=createSprite(112,282,10,10);
enemy1.shapeColor="red";
enemy1.velocityY=6;

var enemy2=createSprite(166,369,10,10);
enemy2.shapeColor="red";
enemy2.velocityY=-6;

var enemy3=createSprite(228,282,10,10);
enemy3.shapeColor="red";
enemy3.velocityY=6;

var enemy4=createSprite(289,369,10,10);
enemy4.shapeColor="red";
enemy4.velocityY=-6;

var enemy5=createSprite(313,120,10,10);
enemy5.shapeColor="red";
enemy5.velocityX=5;

var enemy6=createSprite(384,195,10,10);
enemy6.shapeColor="red";
enemy6.velocityX=-5;

var enemy7=createSprite(246,8,10,10);
enemy7.shapeColor="red";
enemy7.velocityY=7;

var enemy8=createSprite(120,60,10,10);
enemy8.shapeColor="red";
enemy8.velocityY=6;

var enemy9=createSprite(14,134,10,10);
enemy9.shapeColor="red";
enemy9.velocityX=-6;

var enemy10=createSprite(155,227,10,10);
enemy10.shapeColor="red";
enemy10.velocityX=-8;
enemy10.setAnimation("HADDI MAN");
enemy10.scale=0.2;


var death=0;






function draw() {
  background("black");
 player.bounceOff(wall1);
 player.bounceOff(wall2);
 player.bounceOff(wall3);
 player.bounceOff(wall4);
 player.bounceOff(wall5);
 player.bounceOff(wall6);
 player.bounceOff(wall7);
 player.bounceOff(wall8);
 player.bounceOff(wall9);
 player.bounceOff(wall10);
 player.bounceOff(target);
enemy1.bounceOff(wall1);
enemy1.bounceOff(wall2);
enemy2.bounceOff(wall1);
enemy2.bounceOff(wall2);
enemy3.bounceOff(wall1);
enemy3.bounceOff(wall2);
enemy4.bounceOff(wall1);
enemy4.bounceOff(wall2);
enemy5.bounceOff(wall4);
enemy5.bounceOff(wall6);
enemy6.bounceOff(wall4);
enemy6.bounceOff(wall6);
enemy7.bounceOff(wall7);
enemy7.bounceOff(wall5);
enemy8.bounceOff(wall7);
enemy8.bounceOff(wall5);
enemy9.bounceOff(wall3);
enemy9.bounceOff(wall8);
enemy10.bounceOff(wall3);
enemy10.bounceOff(wall4);

  if (gameState=="serve") {
    textSize(18);
    fill("green");
    text("Press! Right arrow key to start", 40, 230);
    if (keyDown("right")) {
      playSound("assets/category_music/island_point_tally_2.mp3", true);
      gameState = "";
    }
  }




if (keyDown("left")) {
 player.x=player.x-3;
 
}

if (keyDown("right")) {
  player.x=player.x+3;
 
  
}

if (keyDown("up")) {
  player.y=player.y-3;
  
}

if (keyDown("DOWN")) {
  player.y=player.y+3;
  
}

if (player.isTouching(target)) {
  textSize(45);
  text("you won",200,200);
}
stroke("blue");
textSize(15);
text("DEATH:"+death,217,100);

if (player.isTouching(enemy1)||player.isTouching(enemy2)||player.isTouching(enemy3)||player.isTouching(enemy4)||player.isTouching(enemy5)||player.isTouching(enemy6)||player.isTouching(enemy7)||player.isTouching(enemy8)||player.isTouching(enemy9)||player.isTouching(enemy10)) {
  player.x=40;
  player.y=326;
  death=death+1;
}
stroke("white");
textFont("ITALIC");
textSize(20);
text("TARGET",129,196);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
