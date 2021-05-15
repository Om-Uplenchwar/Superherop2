var canvas = new fabric.Canvas('myCanvas');
var block_image_width = 30;
var block_image_height = 30;
var block_image_object = "";
var playerX = 10;
var playerY = 10;
var player_object = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX
        });
        
        canvas.add(player_object);

    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:playerY,
            left:playerX
            });

            canvas.add(block_image_object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 5;
        block_image_height = block_image_height + 5;
        document.getElementById("Width").innerHTML = block_image_width;
        document.getElementById("Height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        console.log("p and shift pressed together");
        block_image_width = block_image_width - 5;
        block_image_height = block_image_height - 5;
        document.getElementById("Width").innerHTML = block_image_width;
        document.getElementById("Height").innerHTML = block_image_height;
    }

    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }

    if(keyPressed == '66'){
        new_image('ironman_body.png');
        console.log("b");
    }

    if(keyPressed == '76'){
        new_image('ironman_legs.png');
        console.log("l");
    }

    if(keyPressed == '82'){
        new_image('ironman_right_hand.png');
        console.log("r");
    }

    if(keyPressed == '72'){
        new_image('ironman_left_hand.png');
        console.log("h");
    }

    if(keyPressed == '70'){
        new_image('ironman_face.png');
        console.log("f");
    }

}


function up(){
    if(playerY > 0){
        playerY = playerY - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When up arrow key is pressed, X = " + playerX + ", Y = " + playerY);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function down(){
    if(playerY <= 500){
        playerY = playerY + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When up arrow key is pressed, X = " + playerX + ", Y = " + playerY);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function left(){
    if(playerX > 0){
        playerX = playerX - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X = " + playerX + ", Y = " + playerY);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function right(){
    if(playerX <= 850){
        playerX = playerX + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X = " + playerX + ", Y = " + playerY);
        canvas.remove(player_object);
        playerUpdate();
    }
}