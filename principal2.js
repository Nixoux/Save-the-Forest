
kaboom({
    scale:3.5,
    background:[0,0,0],
    backgroundAudio: true,
    width: 448,
    height: 210,
});



//LOAD DE CHAQUE SPRITE.
loadSpriteAtlas("Sprites/TilesetGround.png", "Sprites/TilesetGround.json");
loadSpriteAtlas("Sprites/WitchAnims.png", "Sprites/WitchAnims.json");
loadSpriteAtlas("Sprites/AmbroisieIdle.png", "Sprites/AmbroisieIdle.json");
loadSpriteAtlas("Sprites/background_layer_1.png","Sprites/background_layer_1.json"); // credit
loadSpriteAtlas("Sprites/background_layer_2.png","Sprites/background_layer_2.json"); // credit
loadSpriteAtlas("Sprites/background_layer_3.png","Sprites/background_layer_3.json"); // credit
loadSpriteAtlas("Sprites/sol1.png", "Sprites/sol1.json");
loadSpriteAtlas("Sprites/sol2.png", "Sprites/sol2.json");
loadSpriteAtlas("Sprites/Hero.png", "Sprites/Hero.json");


loadSpriteAtlas("Sprites/Ambroisie1.png", "Sprites/Ambroisie1.json");
loadSpriteAtlas("Sprites/Ambroisie2.png", "Sprites/Ambroisie2.json");
loadSpriteAtlas("Sprites/Ambroisie3.png", "Sprites/Ambroisie3.json");
//LOAD DE FONT
loadFont("alagard", "Sprites/alagard.ttf") //Have to credit it. 


loadShader("redTint", null, `
    vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
        vec4 texColor = texture2D(tex, uv);
        
        // Increase intensity by 5%
        texColor.rgb *= 1.05;  // this brightens the color by 5%
        
        return texColor;
    }
`);


//LOAD DE CHAQUE MUSIQUE.
loadSound("Ambient2", "Music/Ambient 2.mp3")
loadSound("Ambient3", "Music/Ambient 3.mp3")
loadSound("Ambient9", "Music/Ambient 9.mp3")
loadSound("Action1", "Music/Action 1.mp3")
loadSound("Action2", "Music/Action 2.mp3")
loadSound("Action3", "Music/Action 3.mp3")
loadSound("Action4", "Music/Action 4.mp3")
loadSound("Fx2", "Music/Fx 2.mp3")


//LOAD DE CHAQUE EFFET SONORE.
loadSound("PauseClackClunk", "SoundEffects/PauseClackClunk.wav")
loadSound("Catchball", "SoundEffects/catch ball 1.wav")
loadSound("HitDamage", "SoundEffects/Hit damage 1.wav")

loadSound("BossHit", "SoundEffects/Boss hit 1.wav")
loadSound("jumpSound", "SoundEffects/Jump 1.wav")
loadSound("PollenAttack", "SoundEffects/Balloon Pop 1.wav")
loadSound("FlowerPillar", "SoundEffects/Suck 1V2.wav")
loadSound("LeafSlap", "SoundEffects/Bubble heavy 2.wav")

loadSound("PlatformBreak", "SoundEffects/Block Break 2.wav")
loadSound("StepSound", "SoundEffects/footstep grass and leaves 1.wav")

loadSound("CapeSound", "SoundEffects/swoosh 1.wav")

loadSound("BulletSound", "SoundEffects/Shoot_2.wav")


//Sound the character makes when going forward
const CapeSound = play("CapeSound", {
	loop: true,
    paused: true,
    volume: 0.5
    
})


//Music Title Screen
const music = play("Ambient2", {
	loop: true,
    paused: false,
    
})

//Cycle of action music 
const fightMusic1 = play("Action1", {
	loop: false,
    paused: true,
    
})

const fightMusic2 = play("Action2", {
	loop: false,
    paused: true,
    
})
const fightMusic3 = play("Action3", {
	loop: false,
    paused: true,
    
})
const fightMusic4 = play("Action4", {
	loop: false,
    paused: true,
    
})

fightMusic1.onEnd(() =>{
    fightMusic2.seek(0);
    fightMusic2.paused = false;
})

fightMusic2.onEnd(() =>{
    fightMusic3.seek(0);
    fightMusic3.paused = false;
})
fightMusic3.onEnd(() =>{
    fightMusic4.seek(0);
    fightMusic4.paused = false;
})
fightMusic4.onEnd(() =>{
    fightMusic1.seek(0);
    fightMusic1.paused = false;
})


//MUSIC WHEN PAUSED
const musicPause = play("Ambient9", {
	loop: true,
    paused: true,
    
})

//MUSIC WHEN LAST BOSS IS BEATEN
const musicFin = play("Ambient3", {
	loop: true,
    paused: true,
    
})

//MUSIC/FX WHEN THE PLAYER LOSES
const musicDefaite = play("Fx2", {
	loop: false,
    paused: true,
    
})

//GENERAL VOLUME
volume(0.5)


//SOUND WHEN HOODED FIGURE WALKS
const StepSound = play("StepSound", {
	loop: true,
    paused: true,
    speed: 2,
})





const JUMP_FORCE = 600
const SPEED = 200;
setGravity(2500);
const FLOOR_POS = 300; // 2 is added to the height to make the player stay above the floor (CHATGPT) (Solution for a GLITCH THAT MAY NOT EXIST)
canMove = true;
const FOREST_HEALTH = 300;



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
            "background3"
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
    
    
    
    //COMMAND INSTRUCTIONS
    
    
    
    
    
    const InstruRec = add([
        rect(123, 78, { radius: 4 }),
        pos(center().x+95, center().y-25),
        color(255,255,255),
        anchor("topleft"),
        fixed(),
        z(2),
        outline(3),
        opacity(0.3)
    ]);

    const Instruction1 = add([
        text("Attaquer : ESPACE ", {
            size: 40,
            align: "left",
            
        }), 
        color(0, 0, 0),
        z(3),
        anchor("left"),
        pos(center().x+100, center().y -15),
        scale(0.3),

        opacity(0.9)
    ]);
    const Instruction2 = add([
        text("Bouger   : ←↑→", {
            size: 40,
            align: "left",

            
        }), 
        color(0, 0, 0),
        z(3),
        anchor("left"),
        pos(center().x+100, center().y +5),
        scale(0.3)
    ]);
    const Instruction3 = add([
        text("Pause    : ESC", {
            size: 40,
            align: "left",

            
        }), 
        color(0, 0, 0),
        z(3),
        anchor("left"),
        pos(center().x+100, center().y + 25),
        scale(0.3)
    ]);
    const Instruction4 = add([
        text("Valider  : ↵ ", {
            size: 40,
            align: "left",

            
        }), 
        color(0, 0, 0),
        z(3),
        anchor("left"),
        pos(center().x+100, center().y + 45), 
        scale(0.3)
    ]);

    //const ProtoRec = add([
    //    rect(width()/1.2, height()/2, { radius: 4 }),
    //    pos(center().x, center().y - 27),
    //    color(255, 255, 255),
    //    anchor("top"),
    //    fixed(),
    //    z(2),
    //    outline(1)
    //]);
// //
    //const ProtoTxtTitre = add([
    //    text("Prototype par Nicolas VERDES", {
    //        size: 20,
    //        align: "center",
    //        font: "Arial",
    //        
    //    }), 
    //    color(255, 0, 0),
    //    z(3),
    //    anchor("center"),
    //    pos(center().x, center().y + -10)
    //]);
//
    //const ProtoTxt = add([
    //    text("Vous incarnez une petite sorcière qui part à l'aventure pour défendre sa forêt d'une plante invasive. Dans sa version finale, le jeu mélangera narration et séquence d'action.", {
    //        size: 15,
    //        align: "center",
    //        font: "Arial",
    //        width: 350,
    //        
    //        
    //    }), 
    //    scale(1),
    //    color(0, 0, 0),
    //    z(3),
    //    anchor("center"),
    //    pos(center().x, center().y + height()/5.5)
    //]);

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
        pos(center().x, height()-24)

    ]);
    


    // Interaction avec ENTER
    onKeyPress("enter", () => {
        const PauseSound = play("PauseClackClunk", {
            loop: false,
            paused: false,
            volume: 0.5,
        })
        go("Principal");

    })
});






//let remainingTime = "01:11";
let timeLeft = 180;


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
            "I X            I          C ",
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
                    area({ collisionIgnore: ["hoodedFigure"] }),
                    anchor("bot"),
                    offscreen({ hide: true }),
                    "Change map"
                ],
                "B": () => [ // Mur invisible pour par retourner à la limite en arrière
                    sprite("Barrier"),
                    body({ isStatic: true }),
                    area({ collisionIgnore: ["hoodedFigure"] }),
                    anchor("bot"),
                    offscreen({ hide: true }),
                    "InvisibleWall"
                
                ],
                "I": () => [ // Mur invisible pour par retourner à la limite en arrière
                    sprite("Barrier"),
                    body({ isStatic: true }),
                    area({ collisionIgnore: ["player","hoodedFigure"] }),
                    anchor("bot"),
                    offscreen({ hide: true }),
                    "StructureI"
                
                ],
            },
        };
        const level = addLevel(levels[levelId ?? 0], levelConf)
 
        






// --- BACKGROUND ---        
        const backgroundWidth = 448; // Calcul a été 74 (le nombre d'= sur la longueur dans la grid) x 16 (le nombre de pixel de chaque tuile)
        const spriteWidth = 320; // Largeur du sprite de base

        //let destroyBackground3 = false;
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
        //if (!destroyBackground3) {
        const background3 = add([
            sprite("background_layer_3"),
            pos(0, -16),
            scale(1),
            z(-1),
            "background3"
        ]);
        //}
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
            "background3"
        ]);
        }




        const tint = add([
            rect(width(), height()+50),
            pos(-300,-300),
            color(0,0,0),
            opacity(0.1),
            area(),
            z(0),
            anchor("topleft"),
        ])


        function toggleTint() {
            if (tint.pos.y < 0) {
                tint.pos = vec2(0,-50); 

            } else {
            
                tint.pos = vec2(-300, -300); 

            }
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
                const HitSound = play("HitDamage", {
                    loop: false,
                    paused: false,
                    
                })
                PlayerHealthbar.set(player.hp())
                shake(10)
                
                
                if (player.hp() === 180) {
                    toggleTint();
                    tint.color = rgb(235, 60, 80); // Starting point
                }
                if (player.hp() === 160) {
                    tint.color = rgb(235, 40, 60); // 20 units decrease in G and B channels
                }
                if (player.hp() === 140) {
                    tint.color = rgb(155, 20, 40); // 20 units decrease in G and B channels
                    tint.opacity = 0.2
                }
                if (player.hp() === 120) {
                    tint.color = rgb(155, 10, 30); // 20 units decrease in G and B channels
                }
                if (player.hp() === 100) {
                    tint.color = rgb(135, 0, 20);   // 20 units decrease in Red channel
                    tint.opacity = 0.3
                }
                if (player.hp() === 80) {
                    tint.color = rgb(115, 0, 20);   // 20 units decrease in Red channel
                }
                if (player.hp() === 60) {
                    tint.color = rgb(95, 0, 20);   // 20 units decrease in Red channel
                    tint.opacity = 0.4
                }
                if (player.hp() === 40) {
                    tint.color = rgb(75, 0, 20);   // 20 units decrease in Red channel
                }
                if (player.hp() === 20) {
                    tint.color = rgb(55, 0, 20);   // Darkest red
                }
            
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








//-------------------------------
//Dialog related functions. Inspired by the kaboom playground, this tutorial : https://www.youtube.com/watch?v=8i2K7uwh124&list=LL&index=2 and with the help of CHATGPT.
//-------------------------------


let isDialogueActive = false;


//NPC related dialogue 
onKeyPress("enter", () => {
    // If the game is paused, do nothing
    if (level.paused) return;

    // If dialogue is active
    if (isDialogueActive) {
        const PauseSound = play("PauseClackClunk", {
            loop: false,
            paused: false,
            volume: 0.5,
        })
        if (levelId ===0){
            // If it's the last dialogue
            if (curDialog === dialogs.length - 1) {
                toggleSpeechBubble();  // Call the toggle function
                curDialog = 0; // Reset dialog
                canMove = true;
                isDialogueActive = false; // Dialogue is no longer active
                //initializeTimer()
                timerPaused = !timerPaused;
                timer.hidden = false;
                borderOut()
            } else {
                curDialog++;
                speechText.text = dialogs[curDialog];
            }
        }
        if (levelId ===1){
            // If it's the last dialogue
            if (curDialog2 === dialogs2.length - 1) {
                toggleSpeechBubble2();  // Call the toggle function
                curDialog2 = 0; // Reset dialog
                canMove = true;
                isDialogueActive = false; // Dialogue is no longer active
                timerPaused = !timerPaused;
                borderOut()
            } else {
                curDialog2++;
                speechText2.text = dialogs2[curDialog2];
            }
        }
        if (levelId ===3){
            // If it's the last dialogue
            if (curDialog3 === dialogs3.length - 1) {
                toggleSpeechBubble3();  // Call the toggle function
                curDialog3 = 0; // Reset dialog
                canMove = true;
                isDialogueActive = false; // Dialogue is no longer active
                timerPaused = !timerPaused;
                borderOut2();
                wait(0.1, () => {
                    timer.hidden = false;
                    })

            } else {
                curDialog3++;
                speechText3.text = dialogs3[curDialog3];
            }
        }
        if (levelId ===4){
            // If it's the last dialogue
            if (curDialog4 === dialogs4.length - 1) {
                toggleSpeechBubble4();  // Call the toggle function
                curDialog4 = 0; // Reset dialog
                canMove = true;
                isDialogueActive = false; // Dialogue is no longer active
                wait(1, go("Victoire"))
            } else {
                curDialog4++;
                speechText4.text = dialogs4[curDialog4];
            }
        }
    }
});


//Boss related dialogue 
let AmbrosiaNoise = false;
function SpeechBubbleSoundProgression() {
    // Check if the game is paused or AmbrosiaNoise is true
    if (level.paused || AmbrosiaNoise) return;

    // Determine the dialog based on the levelId
    if (levelId === 1) {
        curDialogSound = 0;
    } else if (levelId === 2) {
        curDialogSound = 1;
    } else if (levelId === 4) {
        curDialogSound = 2;
    } else {
        return;  //  Exit the function if the levelId is not 1, 2, or 4.
    }

    // Update the speech text
    speechTextSound.text = dialogsSound[curDialogSound];

    // prevent further triggers
    AmbrosiaNoise = true;

    // Call toggleSpeechBubbleSound to show the speech bubble
    toggleSpeechBubbleSound();

    // Wait for 3 seconds
    wait(3, () => {
        // Call toggleSpeechBubbleSound again to make it disappear
        toggleSpeechBubbleSound();

        // Reset AmbrosiaNoise to false to call it back each time the boss dies.
        AmbrosiaNoise = false;
    });
}





//Boss related dialogue 
function SpeechBubblePauseProgression() {
    if (levelId !== 1 && levelId !== 2 && levelId !== 4) return;

    if (!level.paused) return;
    if (!isBossAlive) return;
    
    // Toggle the speech bubble
    toggleSpeechBubblePause();
    
    // Update the speech text
    speechTextPause.text = dialogsPause[curDialogPause];
    
    // Wait for 3 seconds
    wait(3, () => {
        curDialogPause++; 

        if (curDialogPause >= dialogsPause.length) {
            curDialogPause = 0; 
            // Wait for 3 seconds before restarting the dialogues
            wait(3, () => {
                SpeechBubblePauseProgression();
            });
        } else {
            // Continue with the next dialogue
            SpeechBubblePauseProgression();
        }
    });
}




function FightCountdownProgression() {
    // If the game is paused, do nothing

    if (levelId === 1 || levelId === 2 || levelId === 4) {
        // Update the fight count text to the current value
        fightCountText.text = fightCount[curfightCount];
        fightCountTextShadow.text = fightCount[curfightCount];
        console.log("Current Countdown Value:", fightCountText.text);  // Logging the current value for debugging

        // Increment the current fight count
        curfightCount++;

        // If it's the last dialogue
        if (curfightCount >= fightCount.length) {
            togglefightCount();  // Call the toggle function to hide
            curfightCount = 0;  // Reset dialog
        }
    }
}




//-----------------------------------------
//DIALOGS LEVELID 0
//-----------------------------------------
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
    rect(200, 36, { radius: 8 }),  
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    opacity(0.9),
    area(),
    "speechBubble"
]);

//speech bubble triangle
let triangleVisible = false;

function drawSpeechBubbleTriangle() {
    if (triangleVisible) {
        drawTriangle({
            p1: vec2(0, 0),
            p2: vec2(20, 12),
            p3: vec2(17, 0),
            pos: vec2(210, height()/2-12), 
            color: rgb(0, 0, 0),
            opacity: 0.9,
        });
    }
}

onDraw(() => {
    drawSpeechBubbleTriangle();
});



//speech bubble ↵ instruction
let speechBubbleInstruction = add([
    text("↵", {
        size: 10, 
        font: "sans-serif",
    }),
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    z(3),
    area(),
]);

//speech bubble ↵ instruction bubble
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


//function that displays or hides the elements.
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











//-----------------------------------------
//DIALOGS LEVELID 1
//-----------------------------------------
const dialogs2 = [
    "Vous devez agir rapidement! Ambroisie se reproduit à un rythme alarmant.",
    "Si on ne la contrôle pas, la forêt et ses habitants seront en grand danger.",
];

let curDialog2 = 0;

let speechBubble2 = add([
    rect(200, 36, { radius: 8 }),
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    opacity(0.9),
    area(),
    "speechBubble"
]);

let triangleVisible2 = false;

function drawSpeechBubbleTriangle2() {
    if (triangleVisible2) {
        drawTriangle({
            p1: vec2(0, 0),
            p2: vec2(20, 12),
            p3: vec2(17, 0),
            pos: vec2(250, height()/2-12),
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
        size: 10, 
        font: "sans-serif", 
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
        speechBubble2.pos = vec2(240, height()/2-30);
        speechText2.pos = vec2(240, height()/2-30); 
        triangleVisible2 = true;;
        speechBubbleInstructionBubble2.pos = vec2(339, height()/2-13);
        speechBubbleInstruction2.pos = vec2(339, height()/2-12);
    } else {
        speechBubble2.pos = vec2(-100, -100);
        speechText2.pos = vec2(-100, -100);
        triangleVisible2 = false;
        speechBubbleInstructionBubble2.pos = vec2(-100, -100);
        speechBubbleInstruction2.pos = vec2(-100, -100);
    }
}



//exclamation point to catch the eye. Called in level id 0
function toggleExclamationPoint() {
    if (exclamationPoint.pos.x < 0) {
        exclamationPoint.pos = vec2(240, height()/2);
        exclamationPointShadow .pos = vec2(242, height()/2);
        exclamationPoint.enterState("jump");
    } else {
        exclamationPoint.pos = vec2(-1, -100);
        exclamationPointShadow.pos = vec2(-100, -100);
    }
}
//exclamation point to catch the eye. Called in level id 1
function toggleExclamationPoint2() {
    if (exclamationPoint.pos.x < 0) {
        exclamationPoint.pos = vec2(340, height()/2);
        exclamationPointShadow .pos = vec2(342, height()/2);
        exclamationPoint.enterState("jump");
    } else {
        exclamationPoint.pos = vec2(-1, height()/2);
        exclamationPointShadow.pos = vec2(-100, -100);
    }
}



//The famous exclamation point
let exclamationPoint = add([
    text("!", {
        size: 30, 
        font: "sans-serif", 
    }),
    pos(-1, height()/2-5),
    anchor("center"),
    color(255, 255, 255),
    z(3),
    area(({ collisionIgnore: ["exclamation","player","hoodedFigure"] })),
    body(), 
    state("idle"),
    "exclamation" 
]);

let exclamationPointShadow = add([
    text("!", {
        size: 30, 
        font: "sans-serif", 
    }),
    pos(-1, height()/2-5),
    anchor("center"),
    color(0, 0, 0),
    z(2),
    area(({ collisionIgnore: ["exclamation","player","hoodedFigure"] })),
    body(), 
    "exclamation" 
]);



//exclamation point jump (animation)
exclamationPoint.onStateEnter("jump", () => {
    if (exclamationPoint.isGrounded()) {
        exclamationPoint.jump(JUMP_FORCE);
        exclamationPointShadow.jump(JUMP_FORCE);
        exclamationPoint.enterState("idle");  
        
    }
});




//exclamation point move (animation). Called in level id 1.
exclamationPoint.onStateUpdate("move", () => {
    const dir = vec2(320, height()/2).sub(exclamationPoint.pos).unit();
    exclamationPoint.move(dir.scale(170));  
    exclamationPointShadow.move(dir.scale(170)); 
    
    // Stop moving when close enough to target
    if (exclamationPoint.pos.dist(vec2(320, height()/2)) < 5) {
        
        exclamationPoint.pos = vec2(320, height()/2);  
        exclamationPoint.enterState("jump");

        exclamationPointShadow.pos = vec2(320, height()/2);  
        exclamationPointShadow.enterState("jump");

    }
});











//-----------------------------------------
//DIALOGS LEVELID 3
//-----------------------------------------
const dialogs3 = [
    "Poursuivez, l'air m'étouffe un peu... Je vais prendre une pause."
];

let curDialog3 = 0;

let speechBubble3 = add([
    rect(200, 36, { radius: 8 }),  
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    opacity(0.9),
    area(),
    "speechBubble"
]);

let triangleVisible3 = false;

function drawSpeechBubbleTriangle3() {
    if (triangleVisible3) {
        drawTriangle({
            p1: vec2(-80, 0),
            p2: vec2(-83, 12),
            p3: vec2(-63, 0),
            pos: vec2(250, height()/2-12), 
            color: rgb(0, 0, 0),
            opacity: 0.9,
        });
    }
}

onDraw(() => {
    drawSpeechBubbleTriangle3();
});


let speechBubbleInstruction3 = add([
    text("↵", {
        size: 10, 
        font: "sans-serif", 
    }),
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    z(3),
    area(),
]);

let speechBubbleInstructionBubble3 = add([
    rect(10, 10, { radius: 8 }),
    pos(-100, -100),
    anchor("center"),
    color(255, 255, 255),
    z(2),
    area(),
]);


const speechText3 = add([
    text(dialogs3[curDialog3], { size: 40, width: 700, align: "center",font: "alagard", }),
    pos(speechBubble3.pos.x, speechBubble3.pos.y),
    anchor("center"),
    color(255, 255, 255),
    scale(0.25)
]);


function toggleSpeechBubble3() {
    if (speechBubble3.pos.x < 0) {
        speechBubble3.pos = vec2(240, height()/2-30);
        speechText3.pos = vec2(240, height()/2-30); 
        triangleVisible3 = true;;
        speechBubbleInstructionBubble3.pos = vec2(339, height()/2-13);
        speechBubbleInstruction3.pos = vec2(339, height()/2-12);
    } else {
        speechBubble3.pos = vec2(-100, -100);
        speechText3.pos = vec2(-100, -100); 
        triangleVisible3 = false;
        speechBubbleInstructionBubble3.pos = vec2(-100, -100);
        speechBubbleInstruction3.pos = vec2(-100, -100);
    }
}











//-----------------------------------------
//DIALOGS LEVELID 4
//-----------------------------------------

const dialogs4 = [
    "Vous l'avez terrassé? Merci beaucoup!!!",
    "En plus d'asphyxier notre forêt, Ambroisie est hautement allergène pour les humains.",
    "Son absence sera bénéfique pour tous!",
    " La forêt et moi-même vous sommes profondément reconnaissants."
];

let curDialog4 = 0;

let speechBubble4 = add([
    rect(200, 36, { radius: 8 }),  
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    opacity(0.9),
    area(),
    "speechBubble"
]);

let triangleVisible4 = false;

function drawSpeechBubbleTriangle4() {
    if (triangleVisible4) {
        drawTriangle({
            p1: vec2(-180, 0),
            p2: vec2(-183, 12),
            p3: vec2(-163, 0),
            pos: vec2(250, height()/2-12), 
            color: rgb(0, 0, 0),
            opacity: 0.9,
        });
    }
}

onDraw(() => {
    drawSpeechBubbleTriangle4();
});


let speechBubbleInstruction4 = add([
    text("↵", {
        size: 10, 
        font: "sans-serif", 
    }),
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    z(3),
    area(),
]);

let speechBubbleInstructionBubble4 = add([
    rect(10, 10, { radius: 8 }),
    pos(-100, -100),
    anchor("center"),
    color(255, 255, 255),
    z(2),
    area(),
]);


const speechText4 = add([
    text(dialogs4[curDialog4], { size: 40, width: 700, align: "center",font: "alagard", }),
    pos(speechBubble4.pos.x, speechBubble4.pos.y),
    anchor("center"),
    color(255, 255, 255),
    scale(0.25)
]);

let platformsPresent = true;
function toggleSpeechBubble4() {
    if (speechBubble4.pos.x < 0) {
        if (platformsPresent) {
            togglePlatforms()
        }
        speechBubble4.pos = vec2(140, height()/2-30);
        speechText4.pos = vec2(140, height()/2-30); 
        triangleVisible4 = true;;
        speechBubbleInstructionBubble4.pos = vec2(239, height()/2-13);
        speechBubbleInstruction4.pos = vec2(239, height()/2-12);
    } else {
        speechBubble4.pos = vec2(-100, -100);
        speechText4.pos = vec2(-100, -100); 
        triangleVisible4 = false;
        speechBubbleInstructionBubble4.pos = vec2(-100, -100);
        speechBubbleInstruction4.pos = vec2(-100, -100);
        
        
    }
}





















//--------------------------------------------
//The text Ambrosia says when she dies
//-------------------------------------------

const dialogsSound = [
    "Grrrrlgl",
    "Grrlgl....Aïe",
    "Je reviendrai!"
];

let curDialogSound = 0;

let speechBubbleSound = add([
    rect(100, 20, { radius: 8 }),  
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    opacity(0.9),
    area(),
    "speechBubble"
]);

let triangleVisibleSound = false;

function drawSpeechBubbleTriangleSound() {
    if (triangleVisibleSound) {
        drawTriangle({
            p1: vec2(35, -5),
            p2: vec2(47, 7),
            p3: vec2(44, -5),
            pos: vec2(width() / 4 * 3-90, height()/2-45),
            color: rgb(0, 0, 0),
            opacity: 0.9,
        });
    }
}

onDraw(() => {
    drawSpeechBubbleTriangleSound();
});



const speechTextSound = add([
    text(dialogsSound[curDialogSound], { size: 40, width: 700, align: "center",font: "alagard", }),
    pos(speechBubbleSound.pos.x, speechBubbleSound.pos.y),
    anchor("center"),
    color(255, 255, 255),
    scale(0.25)
]);


function toggleSpeechBubbleSound() {
    if (speechBubbleSound.pos.x < 0) {
        speechBubbleSound.pos = vec2(width() / 4 * 3-90, height()/2-60);
        speechTextSound.pos = vec2(width() / 4 * 3-90, height()/2-60);  
        triangleVisibleSound = true;;

    } else {
        speechBubbleSound.pos = vec2(-100, -100);
        speechTextSound.pos = vec2(-100, -100);  
        triangleVisibleSound = false;
    }
}














//--------------------------------------------
//The dialogue of Ambrosia when the menu pause is called. 
//--------------------------------------------

const dialogsPause = [
    "Qu'est-ce qui se passe ici ?",

    "C'est quoi cette musique ?",

    "Tu ne peux pas être blessé?",

    "Tout a changé si rapidement. ",

    "Que s'est-il passé ?",

    "Allo, y a-t-il quelqu'un ?",

    "Est-ce que quelqu'un peut m'entendre ?",

    "Es-tu même réel?",

    "Rien ne te touche?",

    "C'est trop calme",

    "J'aime pas quand c'est trop calme",

    "Toujours aucune égratignure?",

    "Invincible, vraiment?",

    "Ton pouvoir est-il sans fin ?",


];

let curDialogPause = 0;

let speechBubblePause = add([
    rect(160, 26, { radius: 8 }),  
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    opacity(0.9),
    area(),
    "speechBubble"
]);

let triangleVisiblePause = false;

function drawSpeechBubbleTrianglePause() {
    if (triangleVisiblePause) {
        drawTriangle({
            p1: vec2(35, -5),
            p2: vec2(32, 7),
            p3: vec2(44, -5),
            pos: vec2(width() / 4 * 3, height()/2-42), 
            color: rgb(0, 0, 0),
            opacity: 0.9,
        });
    }
}

onDraw(() => {
    drawSpeechBubbleTrianglePause();
});



const speechTextPause = add([
    text(dialogsPause[curDialogPause], { size: 40, width: 700, align: "center",font: "alagard", }),
    pos(speechBubblePause.pos.x, speechBubblePause.pos.y),
    anchor("center"),
    color(255, 255, 255),
    scale(0.25)
]);


function toggleSpeechBubblePause() {
    if (level.paused) {
        speechBubblePause.pos = vec2(width() / 4 * 3+30, height()/2-60);
        speechTextPause.pos = vec2(width() / 4 * 3+30, height()/2-60); 
        triangleVisiblePause = true;;

    } else {
        speechBubblePause.pos = vec2(-100, -100);
        speechTextPause.pos = vec2(-100, -100);  
        triangleVisiblePause = false;
    }
}




//-------------------------------------------
//The TIMER
//Initially adapted this code in kaboom : https://codepen.io/ishanbakshi/pen/pgzNMv
//Ended up scratching it. Too much of a pain to pause when I want.
//Stumbled into the kaboom playground on audio and doubleJump. Worked from that. 
//Got help from CHATGPT throughout the entire process as I was losing my mind not understanding what the problem was. 
//------------------------------------------

function formatTime(secondsTotal) {
    const minutes = Math.floor(secondsTotal / 60);
    const seconds = Math.floor(secondsTotal) % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


let timerPaused = false;  // A flag to check if timer is paused

const timer = add([
    pos(width()-50, 10),
    anchor("center"),
    text(timeLeft, { size: 16 }),
]);

onUpdate(() => {
    if (!level.paused && timerPaused) {  // Only update if the level and timer are both not paused
        timeLeft -= dt();
        //if (timeLeft < 170) {
        //    const bgs = get("background3");
        //    for (let bg of bgs) {
        //        bg.destroy()
        //    }
        //    destroyBackground3 = true;
        //}
        if (timeLeft < 0) {
            go("DefaiteTimer");
        }
        timer.text = formatTime(timeLeft);
    }
});


//let timerLabel;
//let timerStopped = false;
//let clonedTime = null;  // Nouvelle variable pour stocker le temps cloné
//
//function initializeTimer(startTime = remainingTime) {
//    if (timerLabel) {
//        destroy(timerLabel);
//    }
//
//    timerLabel = add([
//        text(startTime, { size: 16 }),
//        pos(width()-50, 10),
//        anchor("center")
//    ]);
//
//    function startTimer() {
//        setTimeout(() => {
//            if (!level.paused && !timerStopped) {
//                let presentTime = timerLabel.text;
//                let timeArray = presentTime.split(":");
//                let m = parseInt(timeArray[0]);
//                let s = checkSecond(parseInt(timeArray[1]) - 1);
//                
//                if (s == 59) {
//                    m -= 1;
//                }
//                
//                if (m == 0 && s == 0) {
//                    go("Defaite");
//                }
//    
//                timerLabel.text = (m < 10 ? "0" : "") + m + ":" + s;
//                remainingTime = timerLabel.text;  // Mettez à jour la variable globale avec la valeur actuelle du timer
//    
//                // Si ce n'est pas en pause, continuez à la prochaine itération du timer
//                startTimer();
//            }
//        }, 1000);
//    }
//
//    function checkSecond(sec) {
//        if (sec < 10 && sec >= 0) {
//            sec = "0" + sec;
//        }
//        if (sec < 0) {
//            sec = "59";
//        }
//        return sec;
//    }
//
//    // Démarrez le timer
//    startTimer();
//}
//
//// Fonctions pour arrêter et redémarrer le timer
//
//function stopTimer() {
//    timerStopped = true;
//    clonedTime = timerLabel.text;
//    localStorage.setItem('clonedTime', clonedTime);
//}
//
//function getClonedTime() {
//    return localStorage.getItem('clonedTime');
//}
//
//function restartTimer() {
//    let storedTime = getClonedTime();
//    timerStopped = false;
//    if (storedTime) {
//        initializeTimer(storedTime);
//    } else {
//        initializeTimer();
//    }
//}
//
//
//// Par exemple, pour arrêter le timer avec la touche "s" :
//onKeyPress("s", () => {
//    stopTimer();
//});
//
//// Et pour redémarrer le timer avec "r" :
//onKeyPress("r", () => {
//    restartTimer();
//});













//---------------------------------------------
//The borders
//---------------------------------------------


    let endPos1 = vec2(width() / 2, height() - 43);
    let startPos = vec2(0, 0);  // Starting position

    let border1 = add([
        rect(width(), 20),
        pos(width() / 2, height()-1), //pos(width() / 2, height()-43),
        color(0, 0, 0),
        anchor("top"),
        state("idle"),
    ]);

    let border2 = add([
        rect(width(), 20),
        pos(width() / 2, -42), //  pos(width() / 2, 0),
        color(0, 0, 0),
        anchor("bot"),
        state("idle"),
    ]);

    border1.onStateUpdate("In", () => {
        const dir = vec2(width() / 2, height()-43).sub(border1.pos).unit();
        border1.move(dir.scale(50)); 
    
        // Stop moving when close enough to target
        if (border1.pos.dist(vec2(width() / 2, height()-43)) < 5) {
            
            border1.pos = vec2(width() / 2, height()-43);  
        }
    });


    border2.onStateUpdate("In", () => {
        const dir = vec2(width() / 2, 0).sub(border2.pos).unit();
        border2.move(dir.scale(50)); 
    
        // Stop moving when close enough to target
        if (border2.pos.dist(vec2(width() / 2, 0)) < 5) {
            
            border2.pos = vec2(width() / 2, 0);  
        }
    });

    border1.onStateUpdate("Out", () => {
        const dir = vec2(width() / 2, height()-1).sub(border1.pos).unit();
        border1.move(dir.scale(50)); 
    
        // Stop moving when close enough to target
        if (border1.pos.dist(vec2(width() / 2, height()-1)) < 5) {
            
            border1.pos = vec2(width() / 2, height()-1);  
        }
    });


    border2.onStateUpdate("Out", () => {
        const dir = vec2(width() / 2, -42).sub(border2.pos).unit();
        border2.move(dir.scale(50)); 
    
        // Stop moving when close enough to target
        if (border2.pos.dist(vec2(width() / 2, -42)) < 5) {
            
            border2.pos = vec2(width() / 2, -42);  
        }
    });





    function borderIn() {

        border1.enterState("In");
        border2.enterState("In");
    }
    
    function borderOut() {

        border1.enterState("Out");
        border2.enterState("Out");
        

    }


//-----------------------------
//The countdown before a fight
//-----------------------------

const fightCount = [
    "3",
    "2",
    "1",
];

let curfightCount = 0;


const fightCountText  = add([
    text(fightCount [curfightCount ], { size: 30, align: "center",font: "alagard", }),
    pos(-100, -100),
    anchor("center"),
    color(255, 255, 255),
    scale(1),
    z(10)
]);

const fightCountTextShadow  = add([
    text(fightCount [curfightCount ], { size: 30, align: "center",font: "alagard", }),
    pos(-100, -100),
    anchor("center"),
    color(0, 0, 0),
    scale(1),
    z(9)
]);

function togglefightCount() {
    if (fightCountText.pos.x < 0) {

        fightCountText.pos = vec2(width()/2, height()/2); 
        fightCountTextShadow.pos = vec2(width()/2+2, height()/2+2)
    } else {
     
        fightCountText.pos = vec2(-100, -100); 
        fightCountTextShadow.pos = vec2(-100, -100); 
   
    }
}

//
//----------------LEVEL 0----------------------
//

        if (levelId == 0) {
            borderIn()
            
            music.paused = true; // Stop the Ambient2 music
		    fightMusic1.paused = false; // Start the Level1Music

            timer.hidden = true;
            const hoodedFigure = add([
                sprite("Hero"),
                pos(240, height()-64),
                anchor("bot"), 
                area(), 
                "hoodedFigure"
            ]);
            hoodedFigure.flipX = true;



            //let exclamationPoint = add([
            //    rect(10,5),  // for example, a 20x20 square
            //    pos(-100, -100),  // initially off-screen
            //    color(255, 255, 255),  // blue color
            //    anchor("bot"),
            //    area(),
            //    outline(1),
            //    "warningBLUE"
            //]);
            //let exclamationPoint2 = add([
            //    rect(10, 20),  
            //    pos(-100, -100),  
            //    color(255, 255, 255), 
            //    anchor("bot"),
            //    area(),
            //    outline(1),
            //    "warningBLUE"
            //]);


wait(0.7, () => {
    canMove = false;
    toggleExclamationPoint();
    wait(0.8, () => {
        toggleExclamationPoint();
        wait(0.1, () => {
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
        
        
        
//          Ancien fonctionnement de la création du bubble abandonné parce que trop chiant.


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



        ////Plus particulièrement utile, surtout utile lors de la construction d'un niveau. 
        //function createTextBubble2() {
        //    
        //    return add([
        //      text("This will ultimately change maps"),
        //      pos(center().x, center().y - 20),
        //      scale(0.5),
        //      anchor("center"),
        //      lifespan(1), // Automatically destroy the text bubble after 2 seconds (CHATGPT)
        //    ]);
        //  }
//
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



        //FUNCTIONS RELATED TO MOVING THE PLATFORMS | CALLED IN LEVELID 4

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







//------------------------------
//BOSS ATTACKS FUNCTIONS
//------------------------------







//--------PARTICLE ATTACK---------
//No damage but pushes the player - yet to use.
//Adapted the code from the kabooms playground on particles
//--------------------------------



let shouldSpawnParticles = true;
let spawner;
        function spawnParticlesAt(x, y, duration = 1) {
            const particleColor = rgb(255, 198, 98); 
        
            // Start the particle spawning loop
            spawner = loop(0.1, () => {
                if (!shouldSpawnParticles) return;
                const item = add([
                    pos(x,y),
                    rect(8, 8), 
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



//--------------------------------
// BOSS ATTACK : The Flower Pillar 
//Explanation comes later.
//--------------------------------


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
                const FlowerPillarSound = play("FlowerPillar", {
                    loop: false,
                    paused: false,
                    volume: 1,
    
                })
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



//----------------------------------------
// BOSS ATTACK : The Pollen Cannonball
// Tried using the tween function but got weirdly interesting and frustrating results due to the duration needed.    
// ended up getting help from ChatGPT for this one. 
// Asked the code for a circle to travel from a defined point A to the players location.
//----------------------------------------

        function launchPollenCannonBall() {
            const pointA = vec2(width() / 4 * 3, height() / 2); //Starting point for the launch
            const pointB = player.pos.clone();
            const PollenAttackSound = play("PollenAttack", {
                loop: false,
                paused: false,
                volume: 1.2,

            })
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
            text("!", {
                size: 30, 
                font: "sans-serif", 
            }),
            pos(-1, height()/2),
            z(3),
            area(({ collisionIgnore: ["exclamation","player","hoodedFigure","enemy"] })),
            color(0, 0, 0),  // blue color
            anchor("bot"),
            "warningBLUE"
        ]);
        let warningBLUE2 = add([
            text("!", {
                size: 30, 
                font: "sans-serif", 
            }),
            pos(-1, height()/2),
            z(3),
            area(({ collisionIgnore: ["exclamation","player","hoodedFigure","enemy"] })),
            color(127, 127, 255),  // blue color
            anchor("bot"),
            "warningBLUE"
        ]);
        
        function toggleWarningBLUE() {
            if (warningBLUE.pos.x < 0) {
                warningBLUE.pos = vec2(width() / 4 * 3, height()/2-40);
                warningBLUE2.pos = vec2(width() / 4 * 3-2, height()/2-38);
            } else {
                warningBLUE.pos = vec2(-100, -100);
                warningBLUE2.pos = vec2(-100, -100);
            }
        }
        


        //debug.inspect = true
    //------------
    //The red exclamation point to warn of Leaf Slap
    //------------   

        let warningRED = add([
            text("!", {
                size: 30, 
                font: "sans-serif", 
            }),
            pos(-1, height()/2),
            z(3),
            area(({ collisionIgnore: ["exclamation","player","hoodedFigure","enemy"] })),
            color(0, 0, 0),  // red color
            anchor("bot"),
            "warningRED"
        ]);
        let warningRED2 = add([
            text("!", {
                size: 30, 
                font: "sans-serif", 
            }),
            pos(-1, height()/2),
            z(3),
            area(({ collisionIgnore: ["exclamation","player","hoodedFigure","enemy"] })),
            color(255, 127, 127),  // red color
            anchor("bot"),
            "warningRED"
        ]);
        
        function toggleWarningRED() {
            if (warningRED.pos.x < 0) {
                warningRED.pos = vec2(width() / 4 * 3, height()/2-40);
                warningRED2.pos = vec2(width() / 4 * 3-2, height()/2-38);
            } else {
                warningRED.pos = vec2(-100, -100);
                warningRED2.pos = vec2(-100, -100);
            }
        }









// --- Boss ---

let BOSS_HEALTH = 2000
let isBossAlive = true;
let boss;
let flowerPillar;
let flowerPillar2;
let flowerPillar3;
let isBossInvulnerable;

//let flowerPillarLoop;
//let PollenCannonBallLoop;
//let leafSlapLoop;


let cinematic = false; //Nécessaire pour contrer les speedrunners qui veulent spammer la touche escape pour sortir des sentiers battus. Bonjour, je suis le speedrunner.








//----------------LEVEL 1----------------------



        if (levelId == 1 ) {
            timer.hidden = true;
            boss = add([
                sprite("Ambroisie1",{ anims: { idle: 0} }),
                area({ scale: 0.9 }),
                body({ isStatic: true }),
                pos(width() / 4 * 3, height()-63),
                health(BOSS_HEALTH),
                scale(1.5),
                anchor("bot"),
                "enemy","boss"
                
                
            ])
            boss.play("idle")
            
            
            boss.onHurt(() => {
                const Hurt = play("BossHit", {
                    loop: false,
                    paused: false,
                    volume: 0.5,
                })
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
                state("idle"),  
                "hoodedFigure"
            ]);
            hoodedFigure.flipX = false;
            




            //-----------------Cinematic movement----------------------------------
            //The following parts are heavily inspired by Kaboom's playground on AI.
            
            hoodedFigure.onStateUpdate("move", () => {
                const dir = vec2(340, height()-64).sub(hoodedFigure.pos).unit();
                hoodedFigure.move(dir.scale(170)); 
                StepSound.paused = false;
                // Stop moving when close enough to target
                if (hoodedFigure.pos.dist(vec2(340, height()-64)) < 5) {
                    
                    hoodedFigure.pos = vec2(340, height()-64);  
                    hoodedFigure.enterState("jump");
                }
            });
            
            hoodedFigure.onStateEnter("jump", () => {
                if (hoodedFigure.isGrounded()) {
                    StepSound.paused = true;
                    const jumpSound = play("jumpSound", {
                        loop: false,
                        paused: false,
                        volume: 0.5,
                    })
                    hoodedFigure.jump(JUMP_FORCE);
                    hoodedFigure.enterState("move2");  //goes to move2 state after the jump
                    toggleExclamationPoint2();
                    wait(0.3, () => {
                        toggleExclamationPoint2();
                    })
                }
            });
            
            hoodedFigure.onStateUpdate("move2", () => {
                const dir = vec2(320, height()-64).sub(hoodedFigure.pos).unit();
                hoodedFigure.move(dir.scale(170));  
                exclamationPoint.enterState("move");
                // Stop moving when close enough to target
                if (hoodedFigure.pos.dist(vec2(320, height()-64)) < 5) {
                    
                    hoodedFigure.pos = vec2(320, height()-64);  
                    hoodedFigure.enterState("jump");
                    wait(0.5, () => {
                        hoodedFigure.flipX = true;
                        hoodedFigure.enterState("move3");
                    })
                }
            });
            
            hoodedFigure.onStateUpdate("move3", () => {
                const dir = vec2(280, height()-64).sub(hoodedFigure.pos).unit();
                hoodedFigure.move(dir.scale(170));  
                StepSound.paused = false;
               
                if (hoodedFigure.pos.dist(vec2(280, height()-64)) < 5) {
                    
                    hoodedFigure.pos = vec2(280, height()-64);  
                    hoodedFigure.enterState("idle");
                    canMove = false;
                    StepSound.paused = true;
                    toggleSpeechBubble2();
                    isDialogueActive = true;
                    cinematic=false;
                    

                }
            });
            





            //------------------------------------
            // BOSS ATTACK : The Flower Pillar
            //The logic here is to create the object offscreen and move it every three seconds. 
            //This logic comes from discussing the best way to approach this attack pattern with CHATGPT. 
            //Doing this this way, there is no need to constantly create and destroy objects. Thus, allowing for a better management of the allocated ram. Improving performance. 
            //------------------------------------


            flowerPillar = createFlowerPillar();
            flowerPillar2 = createFlowerPillar();
            flowerPillar3 = createFlowerPillar();
            


            //----------------------------
            // BOSS ATTACK : The Leaf Slap
            //The logic is exactly the same as the Flower Pillars
            //Not useful in this level but we never know
            //----------------------------

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
                    const leafSlapSound = play("LeafSlap", {
                        loop: false,
                        paused: false,
                        volume: 10,
                    
                    })
                    leafSlap.pos = vec2(width() / 4 * 3, height()-63);  

                } else {
                    leafSlap.pos = vec2(-100, -100);  

                }
            }


            //initializeTimer()
// ---------------------
// ATTACK PATTERN BOSS 1
// For this, I wrote the structure myself and worked with CHATGPT to keep the syntax correct 
// ---------------------



function bossAttackPattern() {
    if (!isBossAlive) return;
    isBossInvulnerable = false;
    
    // Launch PollenCannonBall
    launchPollenCannonBall();
    wait(1, () => {
        if (!isBossAlive) return;
        launchPollenCannonBall();
        wait(0.5, () => {
            if (!isBossAlive) return;
            launchPollenCannonBall();
            wait(0.5, () => {
                if (!isBossAlive) return;
                launchPollenCannonBall();
                wait(0.5, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(1, () => {
                        if (!isBossAlive) return;
                        launchPollenCannonBall();
                        wait(0.5, () => {
                            if (!isBossAlive) return;
                            launchPollenCannonBall();
                            wait(1, () => {
                                if (!isBossAlive) return;
                                launchPollenCannonBall();
                                wait(0.5, () => {
                                    if (!isBossAlive) return;
                                    launchPollenCannonBall();
                                    wait(1, () => {
                                        if (!isBossAlive) return;
                                        launchPollenCannonBall();
                                        wait(0.5, () => {
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
                                                                    // Launch PollenCannonBall
                                                                    launchPollenCannonBall();
                                                                    wait(1, () => {
                                                                        if (!isBossAlive) return;
                                                                        launchPollenCannonBall();
                                                                        wait(0.5, () => {
                                                                            if (!isBossAlive) return;
                                                                            launchPollenCannonBall();
                                                                            wait(1, () => {
                                                                                if (!isBossAlive) return;
                                                                                launchPollenCannonBall();
                                                                                wait(0.5, () => {
                                                                                    if (!isBossAlive) return;
                                                                                    launchPollenCannonBall();
                                                                                    wait(0.5, () => {
                                                                                        if (!isBossAlive) return;
                                                                                        launchPollenCannonBall();
                                                                                        wait(0.5, () => {
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
            togglefightCount();
            FightCountdownProgression()
            wait(0.5, () =>{
                togglefightCount();
                wait(0.5, () =>{
                    togglefightCount();
                    FightCountdownProgression()
                    wait(0.5, () =>{
                        togglefightCount();
                        wait(0.5, () =>{
                            togglefightCount();
                            FightCountdownProgression()
                            togglefightCount();
                            wait(0.5, () =>{
                                togglefightCount();
                            })
                        })
                    })
                })
            })
            wait(3, () => {
                timerPaused = !timerPaused;
                wait(0.1, () => {
                    timer.hidden = false;
                    })
                canMove = true;
                //Don't know why but this is necessary to be repeated each time, otherwise, the animation isn't played. 
                ["left", "right", "up", "down"].forEach((key) => {
                    if (canMove) {
                        onKeyPress(key, () => {
                            player.play("run");
                            CapeSound.paused = false;
                        });
                        
                    }
                });
            });


            
            isBossInvulnerable = true;
            wait(3, bossAttackPattern);
            
            //All the things happening when Ambroisia dies. 
            on("death", "enemy", (enemy) => {
                borderIn()
                isBossAlive = false;
                timerPaused = false;
                cinematic = true;
                
                SpeechBubbleSoundProgression() 
                //These lines pauses the player when the enemy dies. 
                
                wait(1.5, () => {
                    canMove=false
                })
                wait(3, () => {
                    destroy(enemy)
                    hoodedFigure.enterState("move");
                    
                })
            
                destroy(healthbarGreyOutline)
                destroy(BossName)
                destroy(BossNameShadow)

                const targetPos = vec2(240, height()-64);
                const moveDirection = targetPos.sub(hoodedFigure.pos).unit();
                const moveSpeed = 100; 

                


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






//----------------LEVEL 2----------------------


        if (levelId == 2 ) {
            timer.hidden = true;
            CapeSound.paused = false;
            boss = add([
                sprite("Ambroisie2",{ anims: { idle: 0} }),
                area({ scale: 0.9 }),
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
                const Hurt = play("BossHit", {
                    loop: false,
                    paused: false,
                    volume: 0.5,
                })
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
                area({ collisionIgnore: ["player","bullet","InvisibleWall", "particle"] }),
                body(),
                state("idle"),  
                "hoodedFigure"
            ]);
            hoodedFigure.flipX = false;
            

            
            //-----------------
            //The following parts are heavily inspired by Kaboom's playground on AI.
            
            hoodedFigure.onStateUpdate("move", () => {
                const dir = vec2(width(), height()-64).sub(hoodedFigure.pos).unit();
                hoodedFigure.move(dir.scale(220));  
                StepSound.paused = false;
                // Stop moving when close enough to target
                if (hoodedFigure.pos.dist(vec2(width(), height()-64)) < 5) {
                    
                    hoodedFigure.pos = vec2(width(), height()-64);  
                    hoodedFigure.enterState("idle");
                    cinematic=false;
                    StepSound.paused = true;
                }
                //StepSound.paused = true;
            });

            //-------------------------------------
            // BOSS ATTACK : The Flower Pillar
            //The logic here is to create the object offscreen and move it every three seconds. 
            //This logic comes from discussing the best way to approach this attack pattern with CHATGPT. 
            //Doing this this way, there is no need to constantly create and destroy objects. Thus, allowing for a better management of the allocated ram. Improving performance. 
            //-------------------------------------

            flowerPillar = createFlowerPillar();
            flowerPillar2 = createFlowerPillar();
            flowerPillar3 = createFlowerPillar();
            

            //-------------------------------------
            // BOSS ATTACK : The Leaf Slap
            //The logic is exactly the same as the Flower Pillars
            //-------------------------------------
            
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
                    const leafSlapSound = play("LeafSlap", {
                        loop: false,
                        paused: false,
                        volume: 10,
                    
                    })
                    leafSlap.pos = vec2(width() / 4 * 3, height()-63);  

                } else {
                    leafSlap.pos = vec2(-100, -100);  

                }
            }



            //initializeTimer(),
            function bossAttackPattern() {
                if (!isBossAlive) return;
                isBossInvulnerable = false;
            
                spawnParticlesAt(width() / 4 * 2.7, height() - 63);
                spawnParticlesAt(width() / 4 * 2.7, height() - 63);
            
                wait(1, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(0.5, () => {
                        if (!isBossAlive) return;
                        launchPollenCannonBall();
                        wait(0.5, () => {
                            if (!isBossAlive) return;
                            launchPollenCannonBall();
                            wait(0.5, () => {
                                if (!isBossAlive) return;
                                launchPollenCannonBall();
                                wait(1, () => {
                                    if (!isBossAlive) return;
                                    launchPollenCannonBall();
                                    wait(0.5, () => {
                                        if (!isBossAlive) return;
                                        launchPollenCannonBall();
                                        wait(1, () => {
                                            if (!isBossAlive) return;
                                            launchPollenCannonBall();
                                            wait(0.5, () => {
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
                                                                        // Launch PollenCannonBall
                                                                        launchPollenCannonBall();
                                                                        wait(0.5, () => {
                                                                            if (!isBossAlive) return;
                                                                            launchPollenCannonBall();
                                                                            wait(0.5, () => {
                                                                                if (!isBossAlive) return;
                                                                                launchPollenCannonBall();
                                                                                wait(0.5, () => {
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
                        });
                    });
                });
            }
            
 
            //Prevents any action from the player when arriving in a boss battle.
            canMove=false
            togglefightCount();
            FightCountdownProgression()
            wait(0.5, () =>{
                togglefightCount();
                wait(0.5, () =>{
                    togglefightCount();
                    FightCountdownProgression()
                    wait(0.5, () =>{
                        togglefightCount();
                        wait(0.5, () =>{
                            togglefightCount();
                            FightCountdownProgression()
                            togglefightCount();
                            wait(0.5, () =>{
                                togglefightCount();
                            })
                        })
                    })
                })
            })


            wait(3, () => {
                timerPaused = !timerPaused;
                wait(0.1, () => {
                    timer.hidden = false;
                    })
                canMove = true;
                //Don't know why but this is necessary to be repeated each time, otherwise, the animation isn't played. 
                ["left", "right", "up", "down"].forEach((key) => {
                    if (canMove) {
                        onKeyPress(key, () => {
                            player.play("run");
                            CapeSound.paused = false;
                        });
                    }
                });
            });
            isBossInvulnerable = true;
            wait(3, bossAttackPattern);
            
            
            //All the things happening when Ambroisia dies. 
            on("death", "enemy", (enemy) => {
                timerPaused = false;
                isBossAlive = false
                cinematic=true;
                borderIn()
                SpeechBubbleSoundProgression() 
                wait(0.5, () => {
                    canMove=false
                    
                })
                wait(3, () => {
                    destroy(enemy)
                    
                    wait(0.5, () => {
                        timerPaused = true;
                        canMove = true;
                        hoodedFigure.enterState("move");
                    })
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



        //----------------LEVEL 3----------------------

        if (levelId == 3 ) {
            StepSound.paused = true;
            
            let border3 = add([
                rect(width(), 20),
                pos(width() / 2,  height()-43), //pos(width() / 2, height()-43),
                color(0, 0, 0),
                anchor("top"),
                state("idle"),
            ]);
        
            let border4 = add([
                rect(width(), 20),
                pos(width() / 2, 0), //  pos(width() / 2, 0),
                color(0, 0, 0),
                anchor("bot"),
                state("idle"),
            ]);
        
        
            border3.onStateUpdate("Out", () => {
                const dir = vec2(width() / 2, height()-1).sub(border3.pos).unit();
                border3.move(dir.scale(50)); 
            
                // Stop moving when close enough to target
                if (border3.pos.dist(vec2(width() / 2, height()-1)) < 5) {
                    
                    border3.pos = vec2(width() / 2, height()-1);  
                }
            });
        
        
            border4.onStateUpdate("Out", () => {
                const dir = vec2(width() / 2, -42).sub(border4.pos).unit();
                border4.move(dir.scale(50)); 
            
                // Stop moving when close enough to target
                if (border4.pos.dist(vec2(width() / 2, -42)) < 5) {
                    
                    border4.pos = vec2(width() / 2, -42);  
                }
            });
        
            function borderOut2() {
        
                border3.enterState("Out");
                border4.enterState("Out");
            
        
            }
            //initializeTimer()
            timer.hidden = true;
            
            canMove = false;
            spawnParticlesAt(width(), height()-63);
            const hoodedFigure = add([
                sprite("Hero"),
                pos(150, height()-64),
                anchor("bot"),
                area({ collisionIgnore: ["player","bullet","InvisibleWall","particle"] }),
                body(),
                state("idle"), 
                "hoodedFigure"
            ]);
            hoodedFigure.flipX = false;

            toggleSpeechBubble3();
            isDialogueActive = true;
            

        }

        //----------------LEVEL 4----------------------

        let BOSS_HEALTH_FINAL = 5000
        if (levelId == 4 ) {
            timer.hidden = true;
            CapeSound.paused = false;
            boss = add([
                sprite("Ambroisie3",{ anims: { idle: 0} }),
                area({ scale: 0.9 }),
                body({ isStatic: true }),
                pos(width() / 4 * 3, height()-63),
                health(BOSS_HEALTH_FINAL),
                
                scale(1.5),
                anchor("bot"),
                "enemy","boss"
                
                
            ])
            boss.play("idle")
            
            
            boss.onHurt(() => {
                const Hurt = play("BossHit", {
                    loop: false,
                    paused: false,
                    volume: 0.5,
                })
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

            const hoodedFigure = add([
                sprite("Hero"),
                pos(0, height()-64),
                anchor("bot"),
                area({ collisionIgnore: ["player","bullet","InvisibleWall"] }),
                body(),
                state("idle"),  
                "hoodedFigure"
            ]);
            hoodedFigure.flipX = false;
            
            //-----------------
            //The following parts are heavily inspired by Kaboom's playground on AI.
            
            hoodedFigure.onStateUpdate("move", () => {
                const dir = vec2(50, height()-64).sub(hoodedFigure.pos).unit();
                hoodedFigure.move(dir.scale(100));  
                StepSound.paused = false;
                // Stop moving when close enough to target
                if (hoodedFigure.pos.dist(vec2(50, height()-64)) < 5) {
                    
                    hoodedFigure.pos = vec2(50, height()-64);  
                    hoodedFigure.enterState("idle");
                    canMove = false;
                    isDialogueActive = true;
                    toggleSpeechBubble4();
                    cinematic=false;
                    StepSound.paused = true;
                }
            });

            //-------------------------------------
            //PLATFORM MECANICS
            //The basis of the logic is the same as LeafSlap and FlowerPillar
            //However, ended up changing it to a function that creates and the function destroy.Moving the object out of the playable area seemed to teleport the player sometimes. 
            //Hidding also wasn't effective. The attributes where still very much there making it so the player collided on invisible platforms. 
            //-------------------------------------

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
                    platformsPresent = false;
                    const PlatformBreak = play("PlatformBreak", {
                        loop: false,
                        paused: false,
                        volume: 1,
                    
                    })
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

                    platformsPresent = true;
                }
            }
    
            //-------------------------------------
            // BOSS ATTACK : The Flower Pillar
            //The logic here is to create the object offscreen and move it every three seconds. 
            //This logic comes from discussing the best way to approach this attack pattern with CHATGPT. 
            //Doing this this way, there is no need to constantly create and destroy objects. Thus, allowing for a better management of the allocated ram. Improving performance. 
            //-------------------------------------

            flowerPillar = createFlowerPillar();
            flowerPillar2 = createFlowerPillar();
            flowerPillar3 = createFlowerPillar();
            

            //-------------------------------------
            // BOSS ATTACK : The Leaf Slap
            //The logic is exactly the same as the Flower Pillars
            //-------------------------------------

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
                    const leafSlapSound = play("LeafSlap", {
                        loop: false,
                        paused: false,
                        volume: 2,
                    
                    })
                    leafSlap.pos = vec2(width() / 4 * 3, height()-63);  

                } else {
                    leafSlap.pos = vec2(-100, -100);  

                }
            }


            //initializeTimer()



// ---------------------
// ATTACK PATTERN BOSS 3
// For this, I wrote the structure myself and worked with CHATGPT to keep the syntax correct 
//Cutting it into parts was easier to work with and edit.
// ---------------------

            function bossAttackPattern() {
                if (!isBossAlive) return;
                isBossInvulnerable = false;
                // Launch PollenCannonBall 6 times
                launchPollenCannonBall();
                wait(1, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(0.5, () => {
                        if (!isBossAlive) return;
                        launchPollenCannonBall();
                        wait(0.5, () => {
                            if (!isBossAlive) return;
                            launchPollenCannonBall();
                            wait(0.5, () => {
                                if (!isBossAlive) return;
                                launchPollenCannonBall();
                                wait(0.5, () => {
                                    if (!isBossAlive) return;
                                    launchPollenCannonBall();
                                    wait(0.5, () => {
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
                togglePlatforms();
                // Launch PollenCannonBall 4 times
                launchPollenCannonBall();
                wait(0.5, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(0.5, () => {
                        if (!isBossAlive) return;
                        launchPollenCannonBall();
                        wait(0.5, () => {
                            if (!isBossAlive) return;
                            launchPollenCannonBall();
                            wait(1, () => {
                                if (!isBossAlive) return;
                                launchPollenCannonBall();
                                wait(0.5, () => {
                                    if (!isBossAlive) return;
                                    launchPollenCannonBall();
                                    wait(0.5, () => {
                                        if (!isBossAlive) return;
                                        launchPollenCannonBall();
                                        wait(0.5, () => {
                                            if (!isBossAlive) return;
                                            launchPollenCannonBall();
                                            wait(1, () => {
                                                if (!isBossAlive) return;
                                                shouldSpawnParticles = true;
                                                spawnParticlesAt(width() / 4 * 2.7, height() - 63);
            
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
                                    });
                                });
                            });
                        });
                    });
                });
            }
            
            function secondPartOfPatternPart2() {
                // Launch PollenCannonBall 4 times
                launchPollenCannonBall();
                wait(0.5, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(0.5, () => {
                        if (!isBossAlive) return;
                        launchPollenCannonBall();
                        wait(1, () => {
                            if (!isBossAlive) return;
                            launchPollenCannonBall();
                            wait(1, () => {
                                if (!isBossAlive) return;
                                launchPollenCannonBall();
                                wait(0.5, () => {
                                    if (!isBossAlive) return;
                                    launchPollenCannonBall();
                                    wait(0.5, () => {
                                        if (!isBossAlive) return;
                                        launchPollenCannonBall();
                                        wait(0.5, () => {
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
                                                                        togglePlatforms();
                                                                        thirdPartOfPattern();
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
            
            
            function thirdPartOfPattern() {
                // Launch PollenCannonBall 8 times
                launchPollenCannonBall();
                wait(1, () => {
                    if (!isBossAlive) return;
                    launchPollenCannonBall();
                    wait(1, () => {
                        if (!isBossAlive) return;
                        launchPollenCannonBall();
                        wait(0.5, () => {
                            if (!isBossAlive) return;
                            launchPollenCannonBall();
                            wait(1, () => {
                                if (!isBossAlive) return;
                                launchPollenCannonBall();
                                wait(1, () => {
                                    if (!isBossAlive) return;
                                    launchPollenCannonBall();
                                    wait(0.5, () => {
                                        if (!isBossAlive) return;
                                        launchPollenCannonBall();
                                        wait(0.5, () => {
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
             
            //Prevents any action from the player when arriving in a boss battle.
            canMove=false

            togglefightCount();
            FightCountdownProgression()
            wait(0.5, () =>{
                togglefightCount();
                wait(0.5, () =>{
                    togglefightCount();
                    FightCountdownProgression()
                    wait(0.5, () =>{
                        togglefightCount();
                        wait(0.5, () =>{
                            togglefightCount();
                            FightCountdownProgression()
                            togglefightCount();
                            wait(0.5, () =>{
                                togglefightCount();
                            })
                        })
                    })
                })
            })

            wait(3, () => {
                timerPaused = !timerPaused;
                wait(0.1, () => {
                timer.hidden = false;
                })
                canMove = true;
                //Don't know why but this is necessary to be repeated each time, otherwise, the animation isn't played. 
                ["left", "right", "up", "down"].forEach((key) => {
                    if (canMove) {
                        onKeyPress(key, () => {
                            player.play("run");
                            CapeSound.paused = false;
                        });
                    }
                });
            });
            isBossInvulnerable = true;
            wait(3, bossAttackPattern);
            
            
            //All the things happening when Ambroisia dies. 
            on("death", "enemy", (enemy) => {
                //CHECKS WHICH MUSIC WAS PLAYING TO PAUSE THEM, TO THEN CALL THE musicFin
                if (!fightMusic1.paused) {
                    fightMusic2wasPlaying = false;
                    fightMusic3wasPlaying = false;
                    fightMusic4wasPlaying = false;
                    fightMusic1.paused = true;
                    console.log("fightMusic1 is currently playing");
                    fightMusic1wasPlaying = true;
                } 
                if (!fightMusic2.paused) {
                    fightMusic1wasPlaying = false;
                    fightMusic3wasPlaying = false;
                    fightMusic4wasPlaying = false;
                    fightMusic2.paused = true;
                    console.log("fightMusic2 is currently playing");
                    fightMusic2wasPlaying = true;
                } 
                if (!fightMusic3.paused) {
                    fightMusic1wasPlaying = false;
                    fightMusic2wasPlaying = false;
                    fightMusic4wasPlaying = false;
                    console.log("fightMusic3 is currently playing");
                    fightMusic3.paused = true;
                    fightMusic3wasPlaying = true;
                }
                if (!fightMusic4.paused) {
                    fightMusic1wasPlaying = false;
                    fightMusic2wasPlaying = false;
                    fightMusic3wasPlaying = false;
                    console.log("fightMusic4 is currently playing");
                    fightMusic4.paused = true;
                    fightMusic4wasPlaying = true;
                }

                musicFin.paused = false;
                musicFin.volume = 6;
                borderIn(),
                timerPaused = false;
                isBossAlive = false
                cinematic=true;
                isDialogueActive =true;
                SpeechBubbleSoundProgression() 
                wait(1.5, () => {
                    canMove=false
                })
                wait(3, () => {
                    destroy(enemy);
                    hoodedFigure.enterState("move");
                    canMove=true;
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
                const BulletSound = play("BulletSound", {
                    loop: false,
                    paused: false,
                    volume:0.1,
                    //
                    
                })
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
                    const jumpSound = play("jumpSound", {
                        loop: false,
                        paused: false,
                        volume: 0.5,
                    })
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
            if (canMove || isDialogueActive) {
                onKeyPress(key, () => {
                    player.play("run")
                    CapeSound.paused = false;
                })
            }
            
        onKeyRelease(key, () => {
            
                if  (
                    !isKeyDown("left")
                    && !isKeyDown("right")
                    && !isKeyDown("up")
                    
                ) {
                    player.play("idle") //Crucial sinon l'animation ne marche pas.
                    CapeSound.paused = true;
                }
            
        }) 	
        })







// --- Menu Pause --- 
//                      Vient principalement du playground kaboom modifié à ma convenance - Ajouter les éléments en mouvement si besoin.
let fightMusic1wasPlaying = false;
let fightMusic2wasPlaying = false;
let fightMusic3wasPlaying = false;
let fightMusic4wasPlaying = false;


let curTween = null;
let bullet = 1; // Valeur nécessaire pour ne pas que ça plante quand on pause avant d'avoir tiré une fois.
onKeyPress("escape", () => {
    level.paused = !level.paused;
    const PauseSound = play("PauseClackClunk", {
        loop: false,
        paused: false,
        volume: 0.5,
    })
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
        SpeechBubblePauseProgression();
        canMove = false;
        //if (levelId == 1) {
        //    
        //    boss.paused = true;

        //}
        musicPause.seek(3.5);
        musicPause.paused = false;
        if (!fightMusic1.paused) {
            fightMusic2wasPlaying = false;
            fightMusic3wasPlaying = false;
            fightMusic4wasPlaying = false;
            fightMusic1.paused = true;
            console.log("fightMusic1 is currently playing");
            fightMusic1wasPlaying = true;
        } 
        if (!fightMusic2.paused) {
            fightMusic1wasPlaying = false;
            fightMusic3wasPlaying = false;
            fightMusic4wasPlaying = false;
            fightMusic2.paused = true;
            console.log("fightMusic2 is currently playing");
            fightMusic2wasPlaying = true;
        } 
        if (!fightMusic3.paused) {
            fightMusic1wasPlaying = false;
            fightMusic2wasPlaying = false;
            fightMusic4wasPlaying = false;
            console.log("fightMusic3 is currently playing");
            fightMusic3.paused = true;
            fightMusic3wasPlaying = true;
        }
        if (!fightMusic4.paused) {
            fightMusic1wasPlaying = false;
            fightMusic2wasPlaying = false;
            fightMusic3wasPlaying = false;
            console.log("fightMusic4 is currently playing");
            fightMusic4.paused = true;
            fightMusic4wasPlaying = true;
        }

    } else {
        curTween.onEnd(() => {
            pauseMenu.hidden = true;
            txtdePause.hidden = true;
            txtdePause2.hidden = true;
            pauseMenu.paused = true;
            player.paused = false;
            bullet.paused = false;
            toggleSpeechBubblePause();
            SpeechBubblePauseProgression();
            if (cinematic===false)
                canMove = !isDialogueActive;
            if (!isDialogueActive && !cinematic) {
                //initializeTimer()
                timerPaused = true;
            }
            //if (levelId == 1) {
            //    
            //    boss.paused = false;
            musicPause.paused = true;
            //}
            if (fightMusic1wasPlaying) {
                fightMusic2wasPlaying = false;
                fightMusic3wasPlaying = false;
                fightMusic4wasPlaying = false;
                fightMusic1.paused = false;
                console.log("fightMusic1 is currently replaying");
                fightMusic1wasPlaying = false;
            } 
            if (fightMusic2wasPlaying) {
                fightMusic1wasPlaying = false;
                fightMusic3wasPlaying = false;
                fightMusic4wasPlaying = false;
                fightMusic2.paused = false;
                console.log("fightMusic2 is currently playing");
                fightMusic2wasPlaying = false;
            } 
            if (fightMusic3wasPlaying) {
                fightMusic1wasPlaying = false;
                fightMusic2wasPlaying = false;
                fightMusic4wasPlaying = false;
                console.log("fightMusic3 is currently playing");
                fightMusic3.paused = false;
                fightMusic3wasPlaying = false;
            }
            if (fightMusic4wasPlaying) {
                fightMusic1wasPlaying = false;
                fightMusic2wasPlaying = false;
                fightMusic3wasPlaying = false;
                console.log("fightMusic4 is currently playing");
                fightMusic4.paused = false;
                fightMusic4wasPlaying = false;
            }
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
            if (!fightMusic1.paused) {
                fightMusic2wasPlaying = false;
                fightMusic3wasPlaying = false;
                fightMusic4wasPlaying = false;
                fightMusic1.paused = true;
                console.log("fightMusic1 is currently playing");
                fightMusic1wasPlaying = true;
            } 
            if (!fightMusic2.paused) {
                fightMusic1wasPlaying = false;
                fightMusic3wasPlaying = false;
                fightMusic4wasPlaying = false;
                fightMusic2.paused = true;
                console.log("fightMusic2 is currently playing");
                fightMusic2wasPlaying = true;
            } 
            if (!fightMusic3.paused) {
                fightMusic1wasPlaying = false;
                fightMusic2wasPlaying = false;
                fightMusic4wasPlaying = false;
                console.log("fightMusic3 is currently playing");
                fightMusic3.paused = true;
                fightMusic3wasPlaying = true;
            }
            if (!fightMusic4.paused) {
                fightMusic1wasPlaying = false;
                fightMusic2wasPlaying = false;
                fightMusic3wasPlaying = false;
                console.log("fightMusic4 is currently playing");
                fightMusic4.paused = true;
                fightMusic4wasPlaying = true;
            }


            musicDefaite.paused = false;
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



// --- Scène de fin | Défaite Timer ---

scene("DefaiteTimer", () => {
    if (!fightMusic1.paused) {
        fightMusic2wasPlaying = false;
        fightMusic3wasPlaying = false;
        fightMusic4wasPlaying = false;
        fightMusic1.paused = true;
        console.log("fightMusic1 is currently playing");
        fightMusic1wasPlaying = true;
    } 
    if (!fightMusic2.paused) {
        fightMusic1wasPlaying = false;
        fightMusic3wasPlaying = false;
        fightMusic4wasPlaying = false;
        fightMusic2.paused = true;
        console.log("fightMusic2 is currently playing");
        fightMusic2wasPlaying = true;
    } 
    if (!fightMusic3.paused) {
        fightMusic1wasPlaying = false;
        fightMusic2wasPlaying = false;
        fightMusic4wasPlaying = false;
        console.log("fightMusic3 is currently playing");
        fightMusic3.paused = true;
        fightMusic3wasPlaying = true;
    }
    if (!fightMusic4.paused) {
        fightMusic1wasPlaying = false;
        fightMusic2wasPlaying = false;
        fightMusic3wasPlaying = false;
        console.log("fightMusic4 is currently playing");
        fightMusic4.paused = true;
        fightMusic4wasPlaying = true;
    }


    musicDefaite.paused = false;
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
        text("Malheureusement, Ambroisie a eu raison de la forêt", {
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