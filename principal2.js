kaboom({
    scale:3.5,
    background:[0,0,0],
    width: 448,
    height: 210,
});

loadSpriteAtlas("Sprites/TilesetGround.png", "Sprites/TilesetGround.json");
loadSpriteAtlas("Sprites/WitchAnims.png", "Sprites/WitchAnims.json");
loadSpriteAtlas("Sprites/AmbroisieIdle.png", "Sprites/AmbroisieIdle.json");
loadSpriteAtlas("Sprites/background_layer_1.png","Sprites/background_layer_1.json"); // credit
loadSpriteAtlas("Sprites/background_layer_2.png","Sprites/background_layer_2.json"); // credit
loadSpriteAtlas("Sprites/background_layer_3.png","Sprites/background_layer_3.json"); // credit
loadSpriteAtlas("Sprites/sol1.png", "Sprites/sol1.json");
loadSpriteAtlas("Sprites/sol2.png", "Sprites/sol2.json");
loadSpriteAtlas("Sprites/Hero.png", "Sprites/Hero.json");

loadFont("alagard", "Sprites/alagard.ttf") //Have to credit it. 

const JUMP_FORCE = 600
const SPEED = 200;
setGravity(2500);
const FLOOR_POS = 300; // 2 is added to the height to make the player stay above the floor (CHATGPT) (Solution for a GLITCH THAT MAY NOT EXIST)





// --- Scène de début | accueil ---

scene("accueil", () => {
   
   
   
    // image de fond
    const background = add([
        sprite("background_layer_1"),
        pos(0, -16),
        scale(1),
        z(-3),
    ]);
    const background2 = add([
            sprite("background_layer_2"),
            pos(0, -16),
            scale(1),
            z(-2),
    ]);
    const background3 = add([
            sprite("background_layer_3"),
            pos(0, -16),
            scale(1),
            z(-1),
    ]);
    
    const spriteWidth = 320;
    
        add([                                                                   
            sprite("background_layer_1"),
            pos(spriteWidth, -16),
            scale(1),
            z(-3),
        ]);
        add([                                                                    
            sprite("background_layer_2"),
            pos(spriteWidth, -16),
            scale(1),
            z(-2),
        ]);
        add([   
            sprite("background_layer_3"),
            pos(spriteWidth, -16),
            scale(1),
            z(-1),
        ]);
     
        


    // Texte d'accueil | la répétition des 5 titres est parce que Kaboom n'as pas de outline qui fonctionne avec du texte. 
    const titre = add([
        text("Save the Forest", {
            size: 30,
            align: "center",
            font: "alagard",
            
        }), 
        
        anchor("center"),
        pos(center().x, center().y - 52)

    ]);
    const titreOmbre1 = add([
        text("Save the Forest", {
            size: 30,
            align: "center",
            font: "alagard",
            
        }), 
        color(0, 0, 0),
        anchor("center"),
        z(-1),
        pos(center().x, center().y - 54)

    ]);
    const titreOmbre2 = add([
        text("Save the Forest", {
            size: 30,
            align: "center",
            font: "alagard",
            
        }), 
        color(0, 0, 0),
        anchor("center"),
        z(-1),
        pos(center().x, center().y - 50)

    ]);
    const titreOmbre3 = add([
        text("Save the Forest", {
            size: 30,
            align: "center",
            font: "alagard",
            
        }), 
        color(0, 0, 0),
        anchor("center"),
        z(-1),
        pos(center().x -2, center().y - 52)
    ]);
    const titreOmbre4 = add([
            text("Save the Forest", {
                size: 30,
                align: "center",
                font: "alagard",
               
            }), 
            color(0, 0, 0),
            anchor("center"),
            z(-1),
            pos(center().x +2, center().y - 50)
    
    ]);



    const ProtoRec = add([
        rect(width()/1.2, height()/2, { radius: 4 }),
        pos(center().x, center().y - 27),
        color(255, 255, 255),
        anchor("top"),
        fixed(),
        z(2),
        outline(1)
    ]);
// 
    const ProtoTxtTitre = add([
        text("Prototype par Nicolas VERDES", {
            size: 20,
            align: "center",
            font: "Arial",
            
        }), 
        color(255, 0, 0),
        z(3),
        anchor("center"),
        pos(center().x, center().y + -10)
    ]);

    const ProtoTxt = add([
        text("Vous incarnez une petite sorcière qui part à l'aventure pour défendre sa forêt d'une plante invasive. Dans sa version finale, le jeu mélangera narration et séquence d'action.", {
            size: 15,
            align: "center",
            font: "Arial",
            width: 350,
            
            
        }), 
        scale(1),
        color(0, 0, 0),
        z(3),
        anchor("center"),
        pos(center().x, center().y + height()/5.5)
    ]);

    //Instruction pour commencer le jeu 
    const instru = add([
        text("Appuie sur [wavy]ENTER[/wavy] pour jouer!", {
            size: 15,
            align: "center",
            font: "alagard",
            styles: {
                "wavy": (idx, ch) => ({
                    color: rgb(255, 136, 0),
                    pos: vec2(0, wave(-2, 2, time() * 6 + idx * 0.3)), //prise du Kaboom playground et adapté à mes envies.
                }),
            }

        }),
        z(4),
        anchor("center"),
        pos(center().x, height()-15)

    ]);
    


    // Interaction avec ENTER
    onKeyPress("enter", () => {
        go("Principal");

    })
});










//NIVEAU 1
scene("Principal", ({levelId} = {levelId: 0}) => {


    const levels = [
        [
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            "  X                       C ",
            "  X                       C ",
            "  X                       C ",
            "  X                       C ",
            "  X                       C ",
            "  X                       C ",
            "XXX                       C ",
            "============================",
            "----------------------------",
            "----------------------------",
        ],
        [
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            " B                          ",
            " B                          ",
            " B                          ",
            " B                          ",
            " B                        C ",
            " B                        C ",
            " B                        C ",
            " B    ===                 C ",
            " B                        C ",
            " B                        C ",
            "BB                        C ",
            "============================",
            "----------------------------",
            "----------------------------",
        ],
        
        [
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            " B                          ",
            " B                          ",
            " B                          ",
            " B                          ",
            " B                        C ",
            " B                        C ",
            " B                        C ",
            " B                        C ",
            " B                        C ",
            " B                        C ",
            "BB                        C ",
            "============================",
            "----------------------------",
            "----------------------------",
        ],

        [
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            "  X                         ",
            "  X                         ",
            "  X                         ",
            "  X                         ",
            "  X                       C ",
            "  X                       C ",
            "  X                       C ",
            "  X                       C ",
            "  X                       C ",
            "  X                       C ",
            "XXX                       C ",
            "============================",
            "----------------------------",
            "----------------------------",
        ],

        [
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            "                            ",
            " B                      B  B",
            " B                      B  B",
            " B                      B  B",
            " B                      B  B",
            " B                      B  B",
            " B                      B  B",
            " B                      BBBB",
            " B                        C ",
            " B                        C ",
            " B                        C ",
            "BB                        C ",
            "============================",
            "----------------------------",
            "----------------------------",
        ],

    ]

    // GRID
    const levelConf = {
            tileWidth: 16,
            tileHeight: 16,
            z :0,
            pos: vec2(0, height() - 16 * 19), // Grid is placed where desired, line from CHATGPT. Explanation : 
                                              // The 16 * 19 is the width and height of the level grid in pixels, which in this case is 24 pixels wide and 19 tiles high.
            
            tiles: {
                "=": () => [
                    sprite("sol1"),
                    body({ isStatic: true }),
                    area(),
                    anchor("bot"),
                    offscreen({ hide: true }),
                    
                ],
                "-": () => [
                    sprite("sol2"),
                    body({ isStatic: true }),
                    area(),
                    anchor("bot"),
                    offscreen({ hide: true }),
                ],
                "X": () => [ // Mur invisible pour par retourner à la limite en arrière
                    sprite("Barrier"),
                    body({ isStatic: true }),
                    area(),
                    anchor("bot"),
                    offscreen({ hide: true }),
                    "not this way"
                ],
                "C": () => [ // Mur invisible pour par retourner à la limite en arrière
                    sprite("Barrier"),
                    body({ isStatic: true }),
                    area(),
                    anchor("bot"),
                    offscreen({ hide: true }),
                    "Change map"
                ],
                "B": () => [ // Mur invisible pour par retourner à la limite en arrière
                sprite("Barrier"),
                body({ isStatic: true }),
                area(),
                anchor("bot"),
                offscreen({ hide: true }),
                "InvisibleWall"
                
            ],
            },
        };
        const level = addLevel(levels[levelId ?? 0], levelConf)
 
        






// --- BACKGROUND ---        
        const backgroundWidth = 448; // Calcul a été 74 (le nombre d'= sur la longueur dans la grid) x 16 (le nombre de pixel de chaque tuile)
        const spriteWidth = 320; // Largeur du sprite de base


        //Le sprite du background
        const background = add([
        sprite("background_layer_1"),
        pos(0, -16),
        scale(1),
        z(-3),
        ]);
        const background2 = add([
            sprite("background_layer_2"),
            pos(0, -16),
            scale(1),
            z(-2),
        ]);
        const background3 = add([
            sprite("background_layer_3"),
            pos(0, -16),
            scale(1),
            z(-1),
        ]);

        // Repète le background horizontalement (proposé par CHATGPT)
        for (let i = 1; i < Math.ceil(backgroundWidth / spriteWidth) + 1; i++) { //La fonction Math.ceil() retourne le plus petit entier supérieur ou égal au nombre donné
        add([                                                                    //+ 1 ajoute une sprite en plus pour s'assurer que le background est rempli même si il devrait il y avoir un gap qui est moins que la largeur du sprite.
            sprite("background_layer_1"),
            pos(spriteWidth * i, -16),
            scale(1),
            z(-3),
        ]);
        add([                                                                    //+ 1 ajoute une sprite en plus pour s'assurer que le background est rempli même si il devrait il y avoir un gap qui est moins que la largeur du sprite.
            sprite("background_layer_2"),
            pos(spriteWidth * i, -16),
            scale(1),
            z(-2),
        ]);
        add([                                                                    //+ 1 ajoute une sprite en plus pour s'assurer que le background est rempli même si il devrait il y avoir un gap qui est moins que la largeur du sprite.
            sprite("background_layer_3"),
            pos(spriteWidth * i, -16),
            scale(1),
            z(-1),
        ]);
        }




// --- Player ---

        const PLAYER_HEALTH = 200;
        const player = add([
            sprite("Witch",{ anims: { idle: 0, run: [1, 2] } }),
            pos(width()/4, height()-64),
            area({ shape: new Rect(vec2(-1, 2), 25, 32) }),
            body(),
            z(1),
            scale(1),
            health(PLAYER_HEALTH),
            anchor("bot"),
            "player",
            {
                dir: RIGHT,
            },
            ]);
            player.play("idle")



            if (levelId == 1 || levelId == 2 || levelId == 4 ) { // Not useful for now, but when it will be, the OR opperator is -->  (levelId == 1 || levelId == 4)
            player.onHurt(() => {
                PlayerHealthbar.set(player.hp())
                shake(10)
            })
            
                const PlayerHealthbar = player.add([
                    rect(30, 3, { radius: 32 }),
                    pos(-16, -15),
                    color(20, 200,0),
                    anchor("left"),
                    fixed(),
                    z(2),
                    outline(1),
                    
                    {
                        max: PLAYER_HEALTH,
                        set(hp) {
                            this.width = 30 * hp / this.max
                        },
                    },
                    
                ])
                const PlayerHealthbarGreyOutline = player.add([
                    rect(30, 3, { radius: 32 }),
                    pos(-16, -15),
                    color(200, 200, 200),
                    anchor("left"),
                    fixed(),
                    z(1),
                    outline(1),
                    {
                        max: PLAYER_HEALTH,
                        set(hp) {
                            this.width = 30 * hp / this.max
                        },
                    },
                ])

            }




let isDialogueActive = false;

onKeyPress("enter", () => {
    // If the game is paused, do nothing
    if (level.paused) return;

    // If dialogue is active
    if (isDialogueActive) {

        if (levelId ===0){
            // If it's the last dialogue
            if (curDialog === dialogs.length - 1) {
                toggleSpeechBubble();  // Call the toggle function
                curDialog = 0; // Reset dialog or do any other behavior you want!
                canMove = true;
                isDialogueActive = false; // Dialogue is no longer active
            } else {
                curDialog++;
                speechText.text = dialogs[curDialog];
            }
        }
        if (levelId ===1){
            // If it's the last dialogue
            if (curDialog2 === dialogs2.length - 1) {
                toggleSpeechBubble2();  // Call the toggle function
                curDialog2 = 0; // Reset dialog or do any other behavior you want!
                canMove = true;
                isDialogueActive = false; // Dialogue is no longer active
            } else {
                curDialog2++;
                speechText2.text = dialogs2[curDialog2];
            }
        }
    }
});



// Define the dialogue data
const dialogs = [
    "Sorcière, la forêt murmure d'un danger...",
    "...une plante envahissante nommée Ambroisie...",
    "Elle ne devrait pas se trouver ici.",
    "Les plantes envahissantes comme Ambroisie nuisent à la forêt...",
    " étouffant la vie de nos espèces natives.",
    "Sorcière, je t'en supplie, débarrasse-nous-en!",
    "Le temps presse et la forêt souffre."
];

let curDialog = 0;

// Speech Bubble
let speechBubble = add([
    rect(200, 36, { radius: 8 }),  // Adjust the size as needed
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    opacity(0.9),
    area(),
    "speechBubble"
]);

let triangleVisible = false;

function drawSpeechBubbleTriangle() {
    if (triangleVisible) {
        drawTriangle({
            p1: vec2(0, 0),
            p2: vec2(20, 12),
            p3: vec2(17, 0),
            pos: vec2(210, height()/2-12), // Adjust as necessary
            color: rgb(0, 0, 0),
            opacity: 0.9,
        });
    }
}

onDraw(() => {
    drawSpeechBubbleTriangle();
});


let speechBubbleInstruction = add([
    text("↵", {
        size: 10, // 48 pixels tall
        font: "sans-serif", // specify any font you loaded or browser built-in
    }),
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    z(3),
    area(),
]);

let speechBubbleInstructionBubble = add([
    rect(10, 10, { radius: 8 }),
    pos(-100, -100),
    anchor("center"),
    color(255, 255, 255),
    z(2),
    area(),
]);




// Text inside the Speech Bubble
const speechText = add([
    text(dialogs[curDialog], { size: 40, width: 700, align: "center",font: "alagard", }),
    pos(speechBubble.pos.x, speechBubble.pos.y),
    anchor("center"),
    color(255, 255, 255),
    scale(0.25)
]);

function toggleSpeechBubble() {
    if (speechBubble.pos.x < 0) {
        speechBubble.pos = vec2(200, height()/2-30);
        speechText.pos = vec2(200, height()/2-30);  // Align text with bubble
        triangleVisible = true;;
        speechBubbleInstructionBubble.pos = vec2(299, height()/2-13);
        speechBubbleInstruction.pos = vec2(299, height()/2-12);
    } else {
        speechBubble.pos = vec2(-100, -100);
        speechText.pos = vec2(-100, -100);  // Hide text with bubble
        triangleVisible = false;
        speechBubbleInstructionBubble.pos = vec2(-100, -100);
        speechBubbleInstruction.pos = vec2(-100, -100);
    }
}



const dialogs2 = [
    "Vous devez agir rapidement! Ambroisie se reproduit à un rythme alarmant.",
    "Si on ne la contrôle pas, la forêt et ses habitants seront en grand danger."
];

let curDialog2 = 0;

let speechBubble2 = add([
    rect(200, 36, { radius: 8 }),  // Adjust the size as needed
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    opacity(0.9),
    area(),
    "speechBubble"
]);

let triangleVisible2 = false;

function drawSpeechBubbleTriangle2() {
    if (triangleVisible) {
        drawTriangle({
            p1: vec2(0, 0),
            p2: vec2(20, 12),
            p3: vec2(17, 0),
            pos: vec2(210, height()/2-12), // Adjust as necessary
            color: rgb(0, 0, 0),
            opacity: 0.9,
        });
    }
}

onDraw(() => {
    drawSpeechBubbleTriangle2();
});


let speechBubbleInstruction2 = add([
    text("↵", {
        size: 10, // 48 pixels tall
        font: "sans-serif", // specify any font you loaded or browser built-in
    }),
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    z(3),
    area(),
]);

let speechBubbleInstructionBubble2 = add([
    rect(10, 10, { radius: 8 }),
    pos(-100, -100),
    anchor("center"),
    color(255, 255, 255),
    z(2),
    area(),
]);


const speechText2 = add([
    text(dialogs2[curDialog2], { size: 40, width: 700, align: "center",font: "alagard", }),
    pos(speechBubble2.pos.x, speechBubble2.pos.y),
    anchor("center"),
    color(255, 255, 255),
    scale(0.25)
]);


function toggleSpeechBubble2() {
    if (speechBubble2.pos.x < 0) {
        speechBubble2.pos = vec2(200, height()/2-30);
        speechText2.pos = vec2(200, height()/2-30);  // Align text with bubble
        triangleVisible2 = true;;
        speechBubbleInstructionBubble2.pos = vec2(299, height()/2-13);
        speechBubbleInstruction2.pos = vec2(299, height()/2-12);
    } else {
        speechBubble2.pos = vec2(-100, -100);
        speechText2.pos = vec2(-100, -100);  // Hide text with bubble
        triangleVisible2 = false;
        speechBubbleInstructionBubble2.pos = vec2(-100, -100);
        speechBubbleInstruction2.pos = vec2(-100, -100);
    }
}





// --- PNJs | Niveau 0 ---      

        if (levelId == 0) {
            
            const hoodedFigure = add([
                sprite("Hero"),
                pos(240, height()-64),
                anchor("bot"), 
                area(), 
                "hoodedFigure"
            ]);
            hoodedFigure.flipX = true;

            


            let exclamationPoint = add([
                rect(10,5),  // for example, a 20x20 square
                pos(-100, -100),  // initially off-screen
                color(255, 255, 255),  // blue color
                anchor("bot"),
                area(),
                outline(1),
                "warningBLUE"
            ]);
            let exclamationPoint2 = add([
                rect(10, 20),  
                pos(-100, -100),  
                color(255, 255, 255), 
                anchor("bot"),
                area(),
                outline(1),
                "warningBLUE"
            ]);

            function toggleExclamationPoint() {
                if (exclamationPoint.pos.x < 0) {
                    exclamationPoint.pos = vec2(240, height()/2);
                    exclamationPoint2.pos = vec2(240, height()/2-8);
                } else {
                    exclamationPoint.pos = vec2(-100, -100);
                    exclamationPoint2.pos = vec2(-100, -100);
                }
            }


























wait(1, () => {
    toggleExclamationPoint();
    wait(1, () => {
        toggleExclamationPoint();
        wait(0.5, () => {
            canMove = false;
            toggleSpeechBubble();
            isDialogueActive = true;
        });
    });
});

















            //const Hero1 = add([
            //    sprite("Hero"),
            //    pos(300, height()-64),
            //    anchor("bot"), 
            //    area(), 
            //    "chara" // Ajout d'un tag commun pour que la fonction createTextBubble fonctionne sur tout ceux qui le partage
            //]);
            //const Hero2 = add([
            //    sprite("Hero"),
            //    pos(300, height()-64), 
            //    anchor("bot"),
            //    area(), 
            //    "chara" // Ajout d'un tag commun pour que la fonction createTextBubble fonctionne sur tout ceux qui le partage
            //]);   
        };
         

        

// --- Bulle de texte | Contact avec PNJ ---

//        function createTextBubble(characterPosX, characterPosY) { //necessary information so that it creates it on top of the character the player collides with.
//            const bubble = add([
//              rect(70, 40,{ radius: 8 }),
//              pos(characterPosX, characterPosY -60),
//              anchor("center"),
//              color(0, 0, 0),
//              opacity(0.8),
//              
//            ]);
//          
//            return bubble;
//          }

          // Attempt at text in bubble.
            //const txt = add([
            //    text("", { size: 9, width: width() - 230 }),
            //    pos(bubble.pos.x, bubble.pos.y), // Position the text relative to the bubble
            //    anchor("center"),
            //  ]);
            //  txt.text = dialogs;
            //return bubble;
        

            canMove = true;
          

//        player.onCollide("chara", (chara) => { // "" are there to focus the onCollide action to the "chara" tag //The parameter (chara) is there so that info is passed into the function - would not work without it.
//            if (!textBubble) { //if textBubble is null - To prevent the bubble to spawn on top of an existing one. 
//              console.log("Yup");
//              const characterPosX = chara.pos.x; //store the data of character posX 
//              const characterPosY = chara.pos.y; //store the data of character posY 
//              textBubble = createTextBubble(characterPosX, characterPosY); //gift the info to the createTextBubble function
//              //chara.children = [textBubble]; //old attempt at using child. Did work at one point but did not manage to change it as I wished. 
//              canMove = false; //Boolean logic to stop the player on its track while a textbubble is on screen
//              wait(2, () => { //seconds before following actions
//                console.log("party");
//                destroy(textBubble); //destroy object
//                textBubble = null; //not as useful anymore. It used to prevent a textbubble to spawn on top of another one (before boolean logic canMove)
//                canMove = true; //Boolean logic to give back to the player the ability to move.
//              });
//            }
//        });


        //debug.inspect = true
        
        
        
//          Ancien fonctionnement de la création du bubble


        //const Hero1 = add([
        //    sprite("Hero"),
        //    pos(300, 112), 
        //    area(),
        ////    "character",
        //    { id: "hero1" }
        //  ]);
          
        //  const Hero2 = add([
          //  sprite("Hero"),
          //  pos(200, 112), 
          //  area(),
          //  "character",
          //  { id: "hero2" }
         // ]);
          
         // function createTextBubble(position) {
           // const textBubble = add([
           //   text("Hello, I'm a character!"),
           //   pos(position),
          //  ]);
          
          //  return textBubble;
         // }
          
         // player.onCollide("character", (character) => {
           // const textBubble = createTextBubble(character.pos);
           // character.add[textBubble];
          
            
              //wait(3, () => {
              //  destroy(textBubble);
            //  });
            
          //});



// --- Pas de retour en arrière | Placeholder textbubble2 | Avancé des niveau ou victoire---

        function createTextBubble1() {
            
            return add([
              text("C'est le moment d'aller de l'avant", {size : 30, font: "alagard"}),
              pos(center().x, center().y - 20),
              scale(0.5),
              anchor("center"),
              lifespan(1),
            ]);
          }



        //Plus particulièrement utile, surtout utile lors de la construction d'un niveau. 
        function createTextBubble2() {
            
            return add([
              text("This will ultimately change maps"),
              pos(center().x, center().y - 20),
              scale(0.5),
              anchor("center"),
              lifespan(1), // Automatically destroy the text bubble after 2 seconds (CHATGPT)
            ]);
          }

        player.onCollide("not this way", () => {
            createTextBubble1();
        });

        player.onCollide("Change map", () => {
            //createTextBubble2();
            if (levelId + 1 < levels.length) {
                go("Principal", {
                    levelId: levelId + 1,
                })
            } else {
                go("Victoire")
            }
        });




        function movePlatforms() {
            for (let p of platforms) {
                p.prevPos = p.pos.clone(); // Store the previous position
                p.pos = vec2(-100, -100);
            }
        }
        
        function restorePlateforms() {
            for (let p of platforms) {
                if (p.prevPos) {
                    p.pos = p.prevPos;
                    p.prevPos = null; // Clear the previous position after restoring
                }
            }
        }








        //---------
        //BOSS ATTACKS FUNCTIONS







//--------PARTICLE ATTACK---------
//No damage but pushes the player - yet to use.
//Adapted the code from the kabooms playground on particles
//--------------------------------



let shouldSpawnParticles = true;
let spawner;
        function spawnParticlesAt(x, y, duration = 1) {
            const particleColor = rgb(255, 198, 98); // Set the particle color to rgb(255,198,98)
        
            // Start the particle spawning loop
            spawner = loop(0.1, () => {
                if (!shouldSpawnParticles) return;
                const item = add([
                    pos(x,y),
                    rect(8, 8), // Create a square of size 8x8 (change as needed)
                    color(particleColor),
                    anchor("center"),
                    scale(rand(0.5, 1)),
                    area({ collisionIgnore: ["particle","enemy","Change map"] }),
                    body(),
                    z(10),
                    lifespan(1, { fade: 0.5 }),
                    opacity(1),
                    move(LEFT, rand(60, 240)),
                    "particle",
                ])
        
                item.jump(rand(320, 640))
            })
        }



// BOSS ATTACK : The Flower Pillar 
//Explanation comes later.
        function createFlowerPillar() {
            return add([
                rect(10, 50),
                pos(vec2(-100, -100)),
                area(),
                anchor("bot"),
                color(127, 127, 255),
                outline(1),
                "flowerPillar",
            ]);
 
        
        }
        // Function to toggle object's position
        function toggleFlowerPillarPosition() {

            if (flowerPillar.pos.x < 0) {
                flowerPillar.pos = vec2(width()/ 3, height()-63);  // Back to visible area
                flowerPillar2.pos = vec2(width()/ 2, height()-63);
                flowerPillar3.pos = vec2(width()/ 6, height()-63);
            } 
            else {
                flowerPillar.pos = vec2(-100, -100);  // Out of playable area
                flowerPillar2.pos = vec2(-100, -100);
                flowerPillar3.pos = vec2(-100, -100);
            }
        }  




    // BOSS ATTACK : The Pollen Cannonball
    // Tried using the tween function but got weirdly interesting and frustrating results due to the duration needed.    
    // ended up getting help from ChatGPT for this one. 
    // Asked the code for a circle to travel from a defined point A to the players location.
        function launchPollenCannonBall() {
            const pointA = vec2(width() / 4 * 3, height() / 2); //Starting point for the launch
            const pointB = player.pos.clone();
        
            const direction = pointB.sub(pointA).unit();  // Calculate direction vector and normalize it || ChatGPT used lerp before, asked it to change and calculate a vector. This way, the ball is aimed at the player and if it misses, it doesn't just disappear. 
            const circleSpeed = 300;  
        
            const pollenCannonBall = add([
                circle(7),
                pos(pointA),
                color(255, 100, 0),
                anchor("bot"),
                area(),
                offscreen({ destroy: true }),
                outline(3),
                "pollenCannonBall",
                {
                    update() {
                        pollenCannonBall.move(direction.scale(circleSpeed ));  // Moves the circle in the direction
                        
                        if (pollenCannonBall.pos.y >= height() - 63) { //destroys the ball if it touches the ground. 
                            destroy(pollenCannonBall);
                        }
                    }
                }
            ]);
        }


    //------------
    //The blue exclamation point to warn of Flower Pillar
    //------------   

    
        let warningBLUE = add([
            rect(10,5),  // for example, a 20x20 square
            pos(-100, -100),  // initially off-screen
            color(127, 127, 255),  // blue color
            anchor("bot"),
            area(),
            outline(1),
            "warningBLUE"
        ]);
        let warningBLUE2 = add([
            rect(10, 20),  
            pos(-100, -100),  
            color(127, 127, 255), 
            anchor("bot"),
            area(),
            outline(1),
            "warningBLUE"
        ]);
        
        function toggleWarningBLUE() {
            if (warningBLUE.pos.x < 0) {
                warningBLUE.pos = vec2(width() / 4 * 3, height()/2-40);
                warningBLUE2.pos = vec2(width() / 4 * 3, height()/2-48);
            } else {
                warningBLUE.pos = vec2(-100, -100);
                warningBLUE2.pos = vec2(-100, -100);
            }
        }
        
    //------------
    //The red exclamation point to warn of Leaf Slap
    //------------   

        let warningRED = add([
            rect(10,5), 
            pos(-100, -100),  
            color(255, 127, 127),  
            anchor("bot"),
            area(),
            outline(1),
            "warningBLUE"
        ]);
        let warningRED2 = add([
            rect(10, 20),  
            pos(-100, -100),  
            color(255, 127, 127),  
            anchor("bot"),
            area(),
            outline(1),
            "warningBLUE"
        ]);
        
        function toggleWarningRED() {
            if (warningRED.pos.x < 0) {
                warningRED.pos = vec2(width() / 4 * 3, height()/2-40);
                warningRED2.pos = vec2(width() / 4 * 3, height()/2-48);
            } else {
                warningRED.pos = vec2(-100, -100);
                warningRED2.pos = vec2(-100, -100);
            }
        }




// --- Boss ---

        let BOSS_HEALTH = 100
        let isBossAlive = true;
        let boss;
        let flowerPillar;
        let flowerPillar2;
        let flowerPillar3;
        let isBossInvulnerable;
        //let flowerPillarLoop;
        //let PollenCannonBallLoop;
        //let leafSlapLoop;












//----------------LEVEL 1----------------------



        if (levelId == 1 ) {
            boss = add([
                sprite("AmbroisieIdle",{ anims: { idle: 0} }),
                area(),
                body({ isStatic: true }),
                pos(width() / 4 * 3, height()-63),
                health(BOSS_HEALTH),
                
                scale(1.5),
                anchor("bot"),
                "enemy","boss"
                
                
            ])
            boss.play("idle")
            
            
            boss.onHurt(() => {
                healthbar.set(boss.hp())
            })

            const healthbar = add([
                rect(width()/2, 7, { radius: 32 }),
                pos(width()/4, center().y - 90),
                color(229, 57, 51),
                fixed(),
                z(2),
                outline(2),
                {
                    max: BOSS_HEALTH,
                    set(hp) {
                        this.width = width()/2 * hp / this.max
                    },
                },
            ])
            const healthbarGreyOutline = add([
                rect(width()/2, 7,{ radius: 32 }),
                pos(width()/4, center().y - 90),
                color(200, 200, 200),
                fixed(),
                z(1),
                outline(2),
                {
                    max: BOSS_HEALTH,
                }
            ])
            const BossName = add([
                text("Ambroisie", {
                    size: 18,
                    align: "center",
                    font: "alagard",}
                    ),
                pos(center().x, center().y - 70),
                anchor("center"),
                fixed(),
                z(2),
            ])
            const BossNameShadow = add([
                text("Ambroisie", {
                    size: 18,
                    align: "center",
                    font: "alagard",}
                    ),
                color(0,0,0),
                pos(center().x, center().y - 68 ),
                anchor("center"),
                fixed(),
                z(1),
            ])





            const hoodedFigure = add([
                sprite("Hero"),
                pos(0, height()-64),
                anchor("bot"),
                area({ collisionIgnore: ["player","bullet","InvisibleWall"] }),
                body(),
                state("idle"),  // Using a state machine
                "hoodedFigure"
            ]);
            hoodedFigure.flipX = false;
            
            //-----------------
            //The following parts are heavily inspired by Kaboom's playground on AI.
            
            hoodedFigure.onStateUpdate("move", () => {
                const dir = vec2(340, height()-64).sub(hoodedFigure.pos).unit();
                hoodedFigure.move(dir.scale(170));  // Replace 120 with desired speed
            
                // Stop moving when close enough to target
                if (hoodedFigure.pos.dist(vec2(340, height()-64)) < 5) {
                    
                    hoodedFigure.pos = vec2(340, height()-64);  // Optional: Set exact position
                    hoodedFigure.enterState("jump");
                }
            });
            
            hoodedFigure.onStateEnter("jump", () => {
                if (hoodedFigure.isGrounded()) {
                    hoodedFigure.jump(JUMP_FORCE);
                    hoodedFigure.enterState("move2");  // Return to "idle" state after the jump
                }
            });
            
            hoodedFigure.onStateUpdate("move2", () => {
                const dir = vec2(320, height()-64).sub(hoodedFigure.pos).unit();
                hoodedFigure.move(dir.scale(170));  // Replace 120 with desired speed
            
                // Stop moving when close enough to target
                if (hoodedFigure.pos.dist(vec2(320, height()-64)) < 5) {
                    
                    hoodedFigure.pos = vec2(320, height()-64);  // Optional: Set exact position
                    hoodedFigure.enterState("jump");
                    wait(0.5, () => {
                        hoodedFigure.flipX = true;
                        hoodedFigure.enterState("move3");
                    })
                }
            });
            
            hoodedFigure.onStateUpdate("move3", () => {
                const dir = vec2(280, height()-64).sub(hoodedFigure.pos).unit();
                hoodedFigure.move(dir.scale(170));  // Replace 120 with desired speed
            
                // Stop moving when close enough to target
                if (hoodedFigure.pos.dist(vec2(280, height()-64)) < 5) {
                    
                    hoodedFigure.pos = vec2(280, height()-64);  // Optional: Set exact position
                    hoodedFigure.enterState("idle");
                    canMove = false;
                    toggleSpeechBubble2();
                    isDialogueActive = true;
                }
            });
            






            // BOSS ATTACK : The Flower Pillar
            //The logic here is to create the object offscreen and move it every three seconds. 
            //This logic comes from discussing the best way to approach this attack pattern with CHATGPT. 
            //Doing this this way, there is no need to constantly create and destroy objects. Thus, allowing for a better management of the allocated ram. Improving performance. 

            flowerPillar = createFlowerPillar();
            flowerPillar2 = createFlowerPillar();
            flowerPillar3 = createFlowerPillar();
            

            // BOSS ATTACK : The Leaf Slap
            //The logic is exactly the same as the Flower Pillars

            let leafSlap = add([
                rect(width()/1.5, 50),
                pos(vec2(-100, -100)),
                area(),
                anchor("botright"),
                color(127, 127, 255),
                outline(1),
                "leafSlap",
                
            ]);


            function toggleLeafSlapPosition() {

                if (leafSlap.pos.x < 0) {
                    leafSlap.pos = vec2(width() / 4 * 3, height()-63);  

                } else {
                    leafSlap.pos = vec2(-100, -100);  

                }
            }



// ---------------------
// ATTACK PATTERN BOSS 1
// For this, I wrote the structure myself and worked with CHATGPT to keep the syntax correct 
// ---------------------



            function bossAttackPattern() {
                
                if (!isBossAlive) return;
                isBossInvulnerable = false;
                // Launch PollenCannonBall 6 times
                launchPollenCannonBall();
                wait(1, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(1, () => {
                        if (!isBossAlive) return;
                        
                        launchPollenCannonBall();
                        wait(1, () => {
                            if (!isBossAlive) return;
                            
                            launchPollenCannonBall();
                            wait(1, () => {
                                if (!isBossAlive) return;
                                
                                launchPollenCannonBall();
                                wait(1, () => {
                                    if (!isBossAlive) return;
            
                                    launchPollenCannonBall();
                                    wait(1, () => {
                                        if (!isBossAlive) return;
                                        isBossInvulnerable = true;
                                        // Blink Warning 4 times
                                        toggleWarningBLUE();
                                        wait(0.5, () => {
                                            if (!isBossAlive) return;
                                            toggleWarningBLUE();
                                            wait(0.5, () => {
                                                if (!isBossAlive) return;
                                                toggleWarningBLUE();
                                                wait(0.5, () => {
                                                    if (!isBossAlive) return;
                                                    toggleWarningBLUE();
                                                    wait(0.5, () => {
                                                        if (!isBossAlive) return;
                                                        isBossInvulnerable = false;
                                                        // Launch FlowerPillar once
                                                        toggleFlowerPillarPosition();
                                                        wait(1, () => {
                                                            if (!isBossAlive) return;
                                                            toggleFlowerPillarPosition();
                                                            
                                                            // Launch PollenCannonBall 4 more times
                                                            launchPollenCannonBall();
                                                            wait(1, () => {
                                                                if (!isBossAlive) return;
                                                                launchPollenCannonBall();
                                                                wait(1, () => {
                                                                    if (!isBossAlive) return;
            
                                                                    launchPollenCannonBall();
                                                                    wait(1, () => {
                                                                        if (!isBossAlive) return;
                                                                        launchPollenCannonBall();
                                                                        wait(1, () => {
                                                                            if (!isBossAlive) return;
                                                                            isBossInvulnerable = true;
                                                                            // Blink Warning 4 times
                                                                            toggleWarningBLUE();
                                                                            wait(0.5, () => {
                                                                                if (!isBossAlive) return;
                                                                                toggleWarningBLUE();
                                                                                wait(0.5, () => {
                                                                                    if (!isBossAlive) return;
                                                                                    toggleWarningBLUE();
                                                                                    wait(0.5, () => {
                                                                                        if (!isBossAlive) return;
                                                                                        toggleWarningBLUE();
                                                                                        wait(0.5, () => {
                                                                                            if (!isBossAlive) return;
                                                                                            isBossInvulnerable = false;
                                                                                            // Launch FlowerPillar again
                                                                                            toggleFlowerPillarPosition();
                                                                                            wait(1, () => {
                                                                                                if (!isBossAlive) return;
                                                                                                toggleFlowerPillarPosition();
                                                                                                // Repeat the entire pattern
                                                                                                bossAttackPattern();
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
            
            //Prevents any action from the player when arriving in a boss battle.
            canMove=false
            wait(2, () => {
                canMove = true;
                //Don't know why but this is necessary to be repeated each time, otherwise, the animation isn't played. 
                ["left", "right", "up", "down"].forEach((key) => {
                    if (canMove) {
                        onKeyPress(key, () => {
                            player.play("run");
                        });
                    }
                });
            });

            isBossInvulnerable = true;
            wait(2, bossAttackPattern);
            
            //All the things happening when Ambroisia dies. 
            on("death", "enemy", (enemy) => {
                isBossAlive = false

                //These lines pauses the player when the enemy dies. 
                
                wait(1.5, () => {
                    canMove=false
                })
                wait(3, () => {
                    destroy(enemy)
                    hoodedFigure.enterState("move");
                    
                    canMove=true
                })
            
                destroy(healthbarGreyOutline)
                destroy(BossName)
                destroy(BossNameShadow)

                const targetPos = vec2(240, height()-64);
                const moveDirection = targetPos.sub(hoodedFigure.pos).unit();
                const moveSpeed = 100; // Adjust the speed as necessary

                


                flowerPillar.pos = vec2(-100, -100); //necessary to make it dissapear instantly, otherwise the timing may be that the flowerPillar stays 3 seconds after the death of boss.
                flowerPillar2.pos = vec2(-100, -100);
                flowerPillar3.pos = vec2(-100, -100);
                leafSlap.pos = vec2(-100, -100);
                
                //if (flowerPillarLoop) {  // Check if flowerPillarLoop is defined - otherwise the game may crash if the boss dies before the 5 second wait.
                //    flowerPillarLoop.cancel();   
                //} 
                //if (PollenCannonBallLoop) {  // Check if flowerPillarLoop is defined - otherwise the game may crash if the boss dies before the 5 second wait.
                //    PollenCannonBallLoop.cancel();   
                //} 
                //if (leafSlapLoop) {  // Check if flowerPillarLoop is defined - otherwise the game may crash if the boss dies before the 5 second wait.
                //    leafSlapLoop.cancel();   
                //} 
            })

        }



        if (levelId == 2 ) {
            boss = add([
                sprite("AmbroisieIdle",{ anims: { idle: 0} }),
                area(),
                body({ isStatic: true }),
                pos(width() / 4 * 3, height()-63),
                health(BOSS_HEALTH),
                z(1),
                scale(1.5),
                anchor("bot"),
                "enemy","boss"
                
                
            ])
            boss.play("idle")
            
            
            boss.onHurt(() => {
                healthbar.set(boss.hp())
            })

            const healthbar = add([
                rect(width()/2, 7, { radius: 32 }),
                pos(width()/4, center().y - 90),
                color(229, 57, 51),
                fixed(),
                z(2),
                outline(2),
                {
                    max: BOSS_HEALTH,
                    set(hp) {
                        this.width = width()/2 * hp / this.max
                    },
                },
            ])
            const healthbarGreyOutline = add([
                rect(width()/2, 7,{ radius: 32 }),
                pos(width()/4, center().y - 90),
                color(200, 200, 200),
                fixed(),
                z(1),
                outline(2),
                {
                    max: BOSS_HEALTH,
                }
            ])
            const BossName = add([
                text("Ambroisie", {
                    size: 18,
                    align: "center",
                    font: "alagard",}
                    ),
                pos(center().x, center().y - 70),
                anchor("center"),
                fixed(),
                z(2),
            ])
            const BossNameShadow = add([
                text("Ambroisie", {
                    size: 18,
                    align: "center",
                    font: "alagard",}
                    ),
                color(0,0,0),
                pos(center().x, center().y - 68 ),
                anchor("center"),
                fixed(),
                z(1),
            ])



            // BOSS ATTACK : The Flower Pillar
            //The logic here is to create the object offscreen and move it every three seconds. 
            //This logic comes from discussing the best way to approach this attack pattern with CHATGPT. 
            //Doing this this way, there is no need to constantly create and destroy objects. Thus, allowing for a better management of the allocated ram. Improving performance. 

            flowerPillar = createFlowerPillar();
            flowerPillar2 = createFlowerPillar();
            flowerPillar3 = createFlowerPillar();
            


            // BOSS ATTACK : The Leaf Slap
            //The logic is exactly the same as the Flower Pillars

            let leafSlap = add([
                rect(width()/1.5, 50),
                pos(vec2(-100, -100)),
                area(),
                anchor("botright"),
                color(255, 127, 127),
                outline(1),
                "leafSlap",
            ]);

            function toggleLeafSlapPosition() {

                if (leafSlap.pos.x < 0) {
                    leafSlap.pos = vec2(width() / 4 * 3, height()-63);  

                } else {
                    leafSlap.pos = vec2(-100, -100);  

                }
            }





            function bossAttackPattern() {
                if (!isBossAlive) return;
                isBossInvulnerable = false;
            
                spawnParticlesAt(width() / 4*2.7, height()-63);
                spawnParticlesAt(width() / 4*2.7, height()-63);
                wait(1, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(1, () => {
                        if (!isBossAlive) return;
                        
                        launchPollenCannonBall();
                        wait(1, () => {
                            if (!isBossAlive) return;
                            
                            launchPollenCannonBall();
                            wait(1, () => {
                                if (!isBossAlive) return;
                                
                                launchPollenCannonBall();
                                wait(1, () => {
                                    if (!isBossAlive) return;
            
                                    launchPollenCannonBall();
                                    wait(1, () => {
                                        if (!isBossAlive) return;
                                        isBossInvulnerable = true;
                                        // Blink Warning 4 times
                                        toggleWarningBLUE();
                                        wait(0.5, () => {
                                            if (!isBossAlive) return;
                                            toggleWarningBLUE();
                                            wait(0.5, () => {
                                                if (!isBossAlive) return;
                                                toggleWarningBLUE();
                                                wait(0.5, () => {
                                                    if (!isBossAlive) return;
                                                    toggleWarningBLUE();
                                                    wait(0.5, () => {
                                                        if (!isBossAlive) return;
                                                        isBossInvulnerable = false;
                                                        // Launch FlowerPillar once
                                                        toggleFlowerPillarPosition();
                                                        wait(1, () => {
                                                            if (!isBossAlive) return;
                                                            toggleFlowerPillarPosition();
                                                            
                                                            // Launch PollenCannonBall 4 more times
                                                            launchPollenCannonBall();
                                                            wait(1, () => {
                                                                if (!isBossAlive) return;
                                                                launchPollenCannonBall();
                                                                wait(1, () => {
                                                                    if (!isBossAlive) return;
            
                                                                    launchPollenCannonBall();
                                                                    wait(1, () => {
                                                                        if (!isBossAlive) return;
                                                                        launchPollenCannonBall();
                                                                        wait(1, () => {
                                                                            if (!isBossAlive) return;
                                                                            isBossInvulnerable = true;
                                                                            // Blink Warning 4 times
                                                                            toggleWarningBLUE();
                                                                            wait(0.5, () => {
                                                                                if (!isBossAlive) return;
                                                                                toggleWarningBLUE();
                                                                                wait(0.5, () => {
                                                                                    if (!isBossAlive) return;
                                                                                    toggleWarningBLUE();
                                                                                    wait(0.5, () => {
                                                                                        if (!isBossAlive) return;
                                                                                        toggleWarningBLUE();
                                                                                        wait(0.5, () => {
                                                                                            if (!isBossAlive) return;
                                                                                            isBossInvulnerable = false;
                                                                                            // Launch FlowerPillar again
                                                                                            toggleFlowerPillarPosition();
                                                                                            wait(1, () => {
                                                                                                if (!isBossAlive) return;
                                                                                                toggleFlowerPillarPosition();
                                                                                                // Repeat the entire pattern
                                                                                                bossAttackPattern();
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }

            canMove=false
            wait(2, () => {
                canMove = true;
                //Don't know why but this is necessary to be repeated each time, otherwise, the animation isn't played. 
                ["left", "right", "up", "down"].forEach((key) => {
                    if (canMove) {
                        onKeyPress(key, () => {
                            player.play("run");
                        });
                    }
                });
            });
            isBossInvulnerable = true;
            wait(2, bossAttackPattern);
            
            
            //All the things happening when Ambroisia dies. 
            on("death", "enemy", (enemy) => {
                isBossAlive = false
                
                wait(1.5, () => {
                    canMove=false
                })
                wait(3, () => {
                    destroy(enemy)
                    canMove=true
                })
                destroy(healthbarGreyOutline)
                destroy(BossName)
                destroy(BossNameShadow)

                flowerPillar.pos = vec2(-100, -100); //necessary to make it dissapear instantly, otherwise the timing may be that the flowerPillar stays 3 seconds after the death of boss.
                flowerPillar2.pos = vec2(-100, -100);
                flowerPillar3.pos = vec2(-100, -100);
                leafSlap.pos = vec2(-100, -100);
                shouldSpawnParticles = false;
            })

        }



        //----------------LEVEL 4----------------------

        if (levelId == 3 ) {
            spawnParticlesAt(width(), height()-63);
        }
        //----------------LEVEL 4----------------------

        let BOSS_HEALTH_FINAL = 2000
        if (levelId == 4 ) {
            boss = add([
                sprite("AmbroisieIdle",{ anims: { idle: 0} }),
                area(),
                body({ isStatic: true }),
                pos(width() / 4 * 3, height()-63),
                health(BOSS_HEALTH_FINAL),
                
                scale(1.5),
                anchor("bot"),
                "enemy","boss"
                
                
            ])
            boss.play("idle")
            
            
            boss.onHurt(() => {
                healthbar.set(boss.hp())
            })

            const healthbar = add([
                rect(width()/2, 7, { radius: 32 }),
                pos(width()/4, center().y - 90),
                color(229, 57, 51),
                fixed(),
                z(2),
                outline(2),
                {
                    max: BOSS_HEALTH_FINAL,
                    set(hp) {
                        this.width = width()/2 * hp / this.max
                    },
                },
            ])
            const healthbarGreyOutline = add([
                rect(width()/2, 7,{ radius: 32 }),
                pos(width()/4, center().y - 90),
                color(200, 200, 200),
                fixed(),
                z(1),
                outline(2),
                {
                    max: BOSS_HEALTH_FINAL,
                }
            ])
            const BossName = add([
                text("Ambroisie", {
                    size: 18,
                    align: "center",
                    font: "alagard",}
                    ),
                pos(center().x, center().y - 70),
                anchor("center"),
                fixed(),
                z(2),
            ])
            const BossNameShadow = add([
                text("Ambroisie", {
                    size: 18,
                    align: "center",
                    font: "alagard",}
                    ),
                color(0,0,0),
                pos(center().x, center().y - 68 ),
                anchor("center"),
                fixed(),
                z(1),
            ])



            //PLATFORM MECANICS
            //The basis of the logic is the same as LeafSlap and FlowerPillar
            //However, ended up changing it to a function that creates and the function destroy.Moving the object out of the playable area seemed to teleport the player sometimes. 
            //Hidding also wasn't effective. The attributes where still very much there making it so the player collided on invisible platforms. 
            function createPlatform(x, y) {
                return add([
                    sprite("sol1"),
                    pos(vec2(x, y)),
                    area(),
                    body({ isStatic: true }),
                    anchor("bot"),
                    "platforms",
                ]);
            }
            
            let platform1 = createPlatform(96, height()-112);
            let platform2 = createPlatform(112, height()-112);
            let platform3 = createPlatform(192, height()-112);
            let platform4 = createPlatform(208, height()-112);
            
            function togglePlatforms() {
                if (platform1) {
                    platform1.destroy();
                    platform1 = null;
            
                    platform2.destroy();
                    platform2 = null;
            
                    platform3.destroy();
                    platform3 = null;
            
                    platform4.destroy();
                    platform4 = null;
                } 
                else {
                    platform1 = createPlatform(96, height()-112);
                    platform2 = createPlatform(112, height()-112);
                    platform3 = createPlatform(192, height()-112);
                    platform4 = createPlatform(208, height()-112);
                }
            }
    
            // BOSS ATTACK : The Flower Pillar
            //The logic here is to create the object offscreen and move it every three seconds. 
            //This logic comes from discussing the best way to approach this attack pattern with CHATGPT. 
            //Doing this this way, there is no need to constantly create and destroy objects. Thus, allowing for a better management of the allocated ram. Improving performance. 

            flowerPillar = createFlowerPillar();
            flowerPillar2 = createFlowerPillar();
            flowerPillar3 = createFlowerPillar();
            


            // BOSS ATTACK : The Leaf Slap
            //The logic is exactly the same as the Flower Pillars

            let leafSlap = add([
                rect(width()/1.5, 50),
                pos(vec2(-100, -100)),
                area(),
                anchor("botright"),
                color(255, 127, 127),
                outline(1),
                "leafSlap",
            ]);

            function toggleLeafSlapPosition() {

                if (leafSlap.pos.x < 0) {
                    leafSlap.pos = vec2(width() / 4 * 3, height()-63);  

                } else {
                    leafSlap.pos = vec2(-100, -100);  

                }
            }






// ---------------------
// ATTACK PATTERN BOSS 3
// For this, I wrote the structure myself and worked with CHATGPT to keep the syntax correct 
// ---------------------
            function bossAttackPattern() {
                if (!isBossAlive) return;
                isBossInvulnerable = false;
                // Launch PollenCannonBall 6 times
                launchPollenCannonBall();
                wait(1, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(1, () => {
                        if (!isBossAlive) return;
                        launchPollenCannonBall();
                        wait(1, () => {
                            if (!isBossAlive) return;
                            launchPollenCannonBall();
                            wait(1, () => {
                                if (!isBossAlive) return;
                                launchPollenCannonBall();
                                wait(1, () => {
                                    if (!isBossAlive) return;
                                    launchPollenCannonBall();
                                    wait(1, () => {
                                        if (!isBossAlive) return;
                                        isBossInvulnerable = true;
                                        // Blink WarningBLUE 4 times
                                        toggleWarningBLUE();
                                        wait(0.5, () => {
                                            if (!isBossAlive) return;
                                            toggleWarningBLUE();
                                            wait(0.5, () => {
                                                if (!isBossAlive) return;
                                                toggleWarningBLUE();
                                                wait(0.5, () => {
                                                    if (!isBossAlive) return;
                                                    toggleWarningBLUE();
                                                    wait(0.5, () => {
                                                        if (!isBossAlive) return;
                                                        isBossInvulnerable = false;
                                                        // Launch FlowerPillar once
                                                        toggleFlowerPillarPosition();
                                                        wait(1, () => {
                                                            if (!isBossAlive) return;
            
                                                            // Hide FlowerPillar
                                                            toggleFlowerPillarPosition();
                                                            wait(0.5, () => {
                                                                if (!isBossAlive) return;
                                                                isBossInvulnerable = true;
                                                                // Blink WarningRED 4 times
                                                                toggleWarningRED();
                                                                wait(0.5, () => {
                                                                    if (!isBossAlive) return;
                                                                    toggleWarningRED();
                                                                    wait(0.5, () => {
                                                                        if (!isBossAlive) return;
                                                                        toggleWarningRED();
                                                                        wait(0.5, () => {
                                                                            if (!isBossAlive) return;
                                                                            toggleWarningRED();
                                                                            wait(0.5, () => {
                                                                                if (!isBossAlive) return;
                                                                                isBossInvulnerable = false;
                                                                                // Launch LeafSlapPosition once
                                                                                toggleLeafSlapPosition();
                                                                                wait(0.5, () => {
                                                                                    if (!isBossAlive) return;
            
                                                                                    // Hide LeafSlapPosition
                                                                                    toggleLeafSlapPosition();
                                                                                    wait(0.5, () => {
                                                                                        if (!isBossAlive) return;
            
                                                                                        // Rest of the attack pattern
                                                                                        secondPartOfPattern();
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
            
            function secondPartOfPattern() {
                togglePlatforms()
                // Launch PollenCannonBall 2 times
                launchPollenCannonBall();
                wait(1, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(1, () => {
                        if (!isBossAlive) return;
                        shouldSpawnParticles = true;
                        spawnParticlesAt(width() / 4*2.7, height()-63);
                        
                        isBossInvulnerable = true;
                        // Blink WarningBLUE 4 times
                        toggleWarningBLUE();
                        wait(0.5, () => {
                            if (!isBossAlive) return;
                            toggleWarningBLUE();
                            wait(0.5, () => {
                                if (!isBossAlive) return;
                                toggleWarningBLUE();
                                wait(0.5, () => {
                                    if (!isBossAlive) return;
                                    toggleWarningBLUE();
                                    wait(0.5, () => {
                                        if (!isBossAlive) return;
                                        isBossInvulnerable = false;
                                        // Launch FlowerPillar once
                                        toggleFlowerPillarPosition();
                                        wait(1, () => {
                                            if (!isBossAlive) return;
            
                                            // Hide FlowerPillar
                                            toggleFlowerPillarPosition();
                                            wait(2, () => {
                                                if (!isBossAlive) return;
                                                
                                                secondPartOfPatternPart2();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
//Cut things out and ended up multiplying the second part of the pattern by 2. It was easier to work with at this stage. 
            function secondPartOfPatternPart2() {
                
                // Launch PollenCannonBall 2 times
                launchPollenCannonBall();
                wait(1, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(1, () => {
                        if (!isBossAlive) return;
                        isBossInvulnerable = true;
                        // Blink WarningBLUE 4 times
                        toggleWarningBLUE();
                        wait(0.5, () => {
                            if (!isBossAlive) return;
                            toggleWarningBLUE();
                            wait(0.5, () => {
                                if (!isBossAlive) return;
                                toggleWarningBLUE();
                                wait(0.5, () => {
                                    if (!isBossAlive) return;
                                    toggleWarningBLUE();
                                    wait(0.5, () => {
                                        if (!isBossAlive) return;
                                        isBossInvulnerable = false;
                                        // Launch FlowerPillar once
                                        toggleFlowerPillarPosition();
                                        wait(1, () => {
                                            if (!isBossAlive) return;
            
                                            // Hide FlowerPillar
                                            toggleFlowerPillarPosition();
                                            wait(2, () => {
                                                if (!isBossAlive) return;
                                                shouldSpawnParticles = false;
                                                togglePlatforms()
                                                thirdPartOfPattern();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
            
            function thirdPartOfPattern() {
                // Launch PollenCannonBall 8 times
                launchPollenCannonBall();
                wait(1, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(1, () => {
                        if (!isBossAlive) return;
                        launchPollenCannonBall();
                        wait(1, () => {
                            if (!isBossAlive) return;
                            launchPollenCannonBall();
                            wait(1, () => {
                                if (!isBossAlive) return;
                                launchPollenCannonBall();
                                wait(1, () => {
                                    if (!isBossAlive) return;
                                    launchPollenCannonBall();
                                    wait(1, () => {
                                        if (!isBossAlive) return;
                                        launchPollenCannonBall();
                                        wait(1, () => {
                                            if (!isBossAlive) return;
                                            launchPollenCannonBall();
                                            wait(1, () => {
                                                if (!isBossAlive) return;
                                                isBossInvulnerable = true;
                                                // Blink WarningBLUE 4 times
                                                toggleWarningBLUE();
                                                wait(0.5, () => {
                                                    if (!isBossAlive) return;
                                                    toggleWarningBLUE();
                                                    wait(0.5, () => {
                                                        if (!isBossAlive) return;
                                                        toggleWarningBLUE();
                                                        wait(0.5, () => {
                                                            if (!isBossAlive) return;
                                                            toggleWarningBLUE();
                                                            wait(0.5, () => {
                                                                if (!isBossAlive) return;
                                                                isBossInvulnerable = false;
                                                                // Launch FlowerPillar once
                                                                toggleFlowerPillarPosition();
                                                                wait(1, () => {
                                                                    if (!isBossAlive) return;
            
                                                                    // Hide FlowerPillar
                                                                    toggleFlowerPillarPosition();
                                                                    wait(2, () => {
                                                                        if (!isBossAlive) return;
                                                                        isBossInvulnerable = true;
                                                                        // Blink WarningBLUE 4 times
                                                                        toggleWarningBLUE();
                                                                        wait(0.5, () => {
                                                                            if (!isBossAlive) return;
                                                                            toggleWarningBLUE();
                                                                            wait(0.5, () => {
                                                                                if (!isBossAlive) return;
                                                                                toggleWarningBLUE();
                                                                                wait(0.5, () => {
                                                                                    if (!isBossAlive) return;
                                                                                    toggleWarningBLUE();
                                                                                    wait(0.5, () => {
                                                                                        if (!isBossAlive) return;
                                                                                        isBossInvulnerable = false;
                                                                                        // Launch FlowerPillar once
                                                                                        toggleFlowerPillarPosition();
                                                                                        wait(1, () => {
                                                                                            if (!isBossAlive) return;
            
                                                                                            // Hide FlowerPillar
                                                                                            toggleFlowerPillarPosition();
                                                                                            wait(2, () => {
                                                                                                if (!isBossAlive) return;
                                                                                                isBossInvulnerable = true;
                                                                                                // Blink WarningRED 4 times
                                                                                                toggleWarningRED();
                                                                                                wait(0.5, () => {
                                                                                                    if (!isBossAlive) return;
                                                                                                    toggleWarningRED();
                                                                                                    wait(0.5, () => {
                                                                                                        if (!isBossAlive) return;
                                                                                                        toggleWarningRED();
                                                                                                        wait(0.5, () => {
                                                                                                            if (!isBossAlive) return;
                                                                                                            toggleWarningRED();
                                                                                                            wait(0.5, () => {
                                                                                                                if (!isBossAlive) return;
                                                                                                                isBossInvulnerable = false;
                                                                                                                // Launch LeafSlapPosition once
                                                                                                                toggleLeafSlapPosition();
                                                                                                                wait(0.5, () => {
                                                                                                                    if (!isBossAlive) return;
            
                                                                                                                    // Hide LeafSlapPosition and Launch PollenCannonBall 4 times
                                                                                                                    toggleLeafSlapPosition();
                                                                                                                    wait(0.5, () => {
                                                                                                                        if (!isBossAlive) return;
                                                                                                                        launchPollenCannonBall();
                                                                                                                        wait(1, () => {
                                                                                                                            if (!isBossAlive) return;
                                                                                                                            launchPollenCannonBall();
                                                                                                                            wait(1, () => {
                                                                                                                                if (!isBossAlive) return;
                                                                                                                                launchPollenCannonBall();
                                                                                                                                wait(1, () => {
                                                                                                                                    if (!isBossAlive) return;
                                                                                                                                    launchPollenCannonBall();
                                                                                                                                    wait(1, () => {
                                                                                                                                        bossAttackPattern();
                                                                                                                                    });
                                                                                                                                });
                                                                                                                            });
                                                                                                                        });
                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
            
            canMove=false
            wait(2, () => {
                canMove = true;
                //Don't know why but this is necessary to be repeated each time, otherwise, the animation isn't played. 
                ["left", "right", "up", "down"].forEach((key) => {
                    if (canMove) {
                        onKeyPress(key, () => {
                            player.play("run");
                        });
                    }
                });
            });
            isBossInvulnerable = true;
            wait(2, bossAttackPattern);
            
            
            //All the things happening when Ambroisia dies. 
            on("death", "enemy", (enemy) => {
                isBossAlive = false
                wait(1.5, () => {
                    canMove=false
                })
                wait(3, () => {
                    destroy(enemy)
                    canMove=true
                })
                destroy(healthbarGreyOutline)
                destroy(BossName)
                destroy(BossNameShadow)

                flowerPillar.pos = vec2(-100, -100); //necessary to make it dissapear instantly, otherwise the timing may be that the flowerPillar stays 3 seconds after the death of boss.
                flowerPillar2.pos = vec2(-100, -100);
                flowerPillar3.pos = vec2(-100, -100);
                leafSlap.pos = vec2(-100, -100);
                
            })

        }


// --- Mécaniques de combat ---  
//                  À ajouter --> fiole de désherbant (dégat sur forêt)     

        onCollide("bullet", "enemy", (bullet, enemy) => {
            destroy(bullet)
            if (!isBossInvulnerable) {
                enemy.hurt(20);
            }
        });

        player.onCollide("enemy", () => {
            player.hurt(20)

        });

        player.onCollide("flowerPillar", () => {
            player.hurt(20);
        });

        player.onCollide("pollenCannonBall", () => {
            player.hurt(20);
        });

        player.onCollide("leafSlap", () => {
            player.hurt(80);
        });

        on("death", "player", (player) => {
            go("Defaite")
        })

        const BULLET_SPEED = 1200;
        function spawnBullet(p) {
            if (canMove) {
                bullet = add([
                    rect(12, 2),
                    area(),
                    pos(p),
                    anchor("center"),
                    color(127, 127, 255),
                    outline(4),
                   move(player.dir, BULLET_SPEED),
                    offscreen({ destroy: true }),
                    "bullet"
                ])
            }
        }

        onKeyPress("space", () => {
            if (player.dir == LEFT) {
                spawnBullet(player.pos.sub(10, 10))
            }
            else {
                spawnBullet(player.pos.sub(-10, 10))
            }
            
            
            
            
        })








// --- Caméra | Mouvement ---

        let camPosOffsetY = height() * 0.4; // La hauteur que je voulais
        camPos(vec2(width() / 2, camPosOffsetY));

        let camPossetX = player.pos.x + width()/4

        player.onUpdate(() => {                 // A VERIFIER SI CE GLITCH EXISTE ENCORE - Je crois bien que non depuis que la taille de la grid est devenue bien plus petite. 
            if (player.pos.y >= FLOOR_POS) {    //correction d'un glitch ou le joueur pouvais tomber bien qu'il soit sur la grid. (Traversant le niveau quoi)
                player.pos.y = 20;
              }

        // Set la position de la camera 
        camPos(vec2(camPossetX, camPosOffsetY));      //Si j'ai envie de le retourner et d'avoir la caméra sur l'autre tiers le code est : camPos(vec2(player.pos.x - width()/4, camPosOffsetY)); 
        camScale(1.05);
        });	

        onKeyPress("up", () => {
            if (canMove) {
                if (player.isGrounded()) {
                    player.jump(JUMP_FORCE)
                }
            }
        });
            
        onKeyDown("left", () => {
            if (canMove) {
            player.flipX = true
            player.move(-SPEED, 0)
            player.dir = LEFT
            }
        })

        onKeyDown("right", () => {
            if (canMove) {
                player.flipX = false
                player.move(SPEED, 0)
                player.dir = RIGHT
            }

        })
        ;["left", "right", "up", "down"].forEach((key) => {
            if (canMove) {
                onKeyPress(key, () => {
                    player.play("run")
            
                })
            }
            
        onKeyRelease(key, () => {
            
                if  (
                    !isKeyDown("left")
                    && !isKeyDown("right")
                    && !isKeyDown("up")
                    
                ) {
                    player.play("idle") //Crucial sinon l'animation ne marche pas.
                }
            
        }) 	
        })







// --- Menu Pause --- 
//                      Vient principalement du playground kaboom modifié à ma convenance - Ajouter les éléments en mouvement si besoin.

let curTween = null;
let bullet = 1; // Valeur nécessaire pour ne pas que ça plante quand on pause avant d'avoir tiré une fois.
onKeyPress("escape", () => {
    level.paused = !level.paused;
    if (curTween) curTween.cancel();
    curTween = tween(
        pauseMenu.pos,
        level.paused ? center() : center().sub(0, 700),
        0.5,
        (p) => {
            pauseMenu.pos = p;
            txtdePause.pos = p.add(0, -70); // Update the position of the text
            txtdePause2.pos = p.add(0, -40);
        },
        easings.easeOutElastic
    );

    if (level.paused) {
        pauseMenu.hidden = false;
        txtdePause.hidden = false;
        txtdePause2.hidden = false;
        pauseMenu.paused = false;
        player.paused = true;
        bullet.paused = true;

        canMove = false;
        //if (levelId == 1) {
        //    
        //    boss.paused = true;

        //}
    } else {
        curTween.onEnd(() => {
            pauseMenu.hidden = true;
            txtdePause.hidden = true;
            txtdePause2.hidden = true;
            pauseMenu.paused = true;
            player.paused = false;
            bullet.paused = false;

            canMove = !isDialogueActive;
            //if (levelId == 1) {
            //    
            //    boss.paused = false;

            //}
        });
    }
});

const pauseMenu = add([
    rect(260, 80,{ radius: 32 }),
    color(255, 247, 209),
    outline(4, rgb( 109 , 7 , 26)),
    anchor("bot"),
    z(5),
    opacity(0.8),
    pos(center().x, center().y),
]);

const txtdePause = add([
    text("Pause", { 
        size: 25,
        font: "alagard", 
        width: width() - 230, 
        align: "center" 
    }),
    
    anchor("top"),
    color(0,0,0),
    z(5)
]);

const txtdePause2 = add([
    text("[black]Pour reprendre le jeu appuie sur la touche[/black][wavy] ESC[/wavy]", { 
        size: 15,
        font: "alagard", 
        width: 300, 
        align: "center",
        styles: {
            "black": (idx, ch) => ({
                color: rgb(0,0,0),
            }),
            "wavy": (idx, ch) => ({
                color: rgb(255, 136, 0),
                pos: vec2(0, wave(-2, 2, time() * 6 + idx * 0.3))
            }),
        } 
    }),
    anchor("top"),
    
    z(5)
]);

pauseMenu.hidden = true;
txtdePause.hidden = true;
txtdePause2.hidden = true;
pauseMenu.paused = true;

});















// --- Scène de fin | Défaite ---

        scene("Defaite", () => {

            // Texte d'accueil
            const TitreDeDefaite = add([
                text("Défaite", {
                    size: 30,
                    align: "center",
                    font: "alagard",
                }), 
                
                anchor("center"),
                pos(center().x, center().y - 52)
        
            ]);
            const ligne = add([
                rect(112, 1),
                anchor("center"),
                pos(center().x, center().y - 40) 
                
            ])

            const DefaiteWitch = add([
                sprite("Witch",{ anims: { idle: 0, run: [1, 2] } }),
                pos(center().x - 32, center().y + 43) ,
                anchor("center"), 
                color(hsl2rgb(0.55, 0.9, 0.6))
            ]);
            DefaiteWitch.play("idle",{ speed: 3})

            const TextDefaite = add([
                text("Malheureusement, Ambroisie a eu raison de toi", {
                    size: 15,
                    align: "center",
                    font: "alagard",
                }), 
                
                anchor("center"),
                pos(center().x, center().y - 22)
        
            ]);
            
            const instru = add([
                text("Appuie sur [wavy]ENTER[/wavy] pour recommencer!", {
                    size: 15,
                    align: "center",
                    font: "alagard",
                    styles: {
                        "wavy": (idx, ch) => ({
                            color: rgb(24, 53, 103),
                            pos: vec2(0, wave(-2, 2, time() * 2 + idx * 0.3)), //prise du Kaboom playground et adapté à mes envies.
                        }),
                    }
        
                }),
                anchor("center"),
                pos(center().x, center().y + 68)
        
            ]);
            // Interaction avec ENTER
            onKeyPress("enter", () => {
                location.reload();
        
            })
        });










// --- Scène de fin | Victoire ---

        scene("Victoire", () => {

            // Texte d'accueil
            const TitreDeFin = add([
                text("The End", {
                    size: 30,
                    align: "center",
                    font: "alagard",
                }), 
                
                anchor("center"),
                pos(center().x, center().y - 52)
        
            ]);
            const ligne = add([
                rect(112, 1),
                anchor("center"),
                pos(center().x, center().y - 40)
            ])

            const FinalWitch = add([
                sprite("Witch",{ anims: { idle: 0, run: [1, 2] } }),
                pos(center().x - 32, center().y + 43) ,
                anchor("center")
                
            ]);
            FinalWitch.play("idle")

            const Credit = add([
                text("Un jeu fait par Nicolas VERDES", {
                    size: 15,
                    align: "center",
                    font: "alagard",
                }), 
                
                anchor("center"),
                pos(center().x, center().y - 22)
        
            ]);
            
            const instru = add([
                text("Appuie sur [wavy]ENTER[/wavy] pour recommencer!", {
                    size: 15,
                    align: "center",
                    font: "alagard",
                    styles: {
                        "wavy": (idx, ch) => ({
                            color: rgb(255, 136, 0),
                            pos: vec2(0, wave(-2, 2, time() * 6 + idx * 0.3)), //prise du Kaboom playground et adapté à mes envies.
                        }),
                    }
        
                }),
                anchor("center"),
                pos(center().x, center().y + 68)
        
            ]);
            // Interaction avec ENTER
            onKeyPress("enter", () => {
                location.reload();
        
            })
        });

go("accueil")