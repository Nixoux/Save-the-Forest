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

const JUMP_FORCE = 650
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
            "  X                         ",
            "  X                         ",
            "  X                         ",
            "  X                         ",
            "  X                       C ",
            "  X                       C ",
            "  X   ===                 C ",
            "  X                       C ",
            "  X                       C ",
            "  X                       C ",
            "XXX                       C ",
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

        const PLAYER_HEALTH = 60;
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



            if (levelId == 1) { // Not useful for now, but when it will be, the OR opperator is -->  (levelId == 1 || levelId == 3)
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

// --- PNJs | Niveau 0 ---      

        if (levelId == 0) {
            const Hero1 = add([
                sprite("Hero"),
                pos(300, height()-64),
                anchor("bot"), 
                area(), 
                "chara" // Ajout d'un tag commun pour que la fonction createTextBubble fonctionne sur tout ceux qui le partage
            ]);
            const Hero2 = add([
                sprite("Hero"),
                pos(200, height()-64), 
                anchor("bot"),
                area(), 
                "chara" // Ajout d'un tag commun pour que la fonction createTextBubble fonctionne sur tout ceux qui le partage
            ]);   
        };
         

        
// --- Tentative de dialogue (pas utilisé pour l'instant) --- 

        const dialogs = [
            [ "chara", "hi my butterfly" ],
            
        ] 
        let curDialog = 0;
        let textBubble = null;

        


// --- Bulle de texte | Contact avec PNJ ---

        function createTextBubble(characterPosX, characterPosY) { //necessary information so that it creates it on top of the character the player collides with.
            const bubble = add([
              rect(70, 40,{ radius: 8 }),
              pos(characterPosX, characterPosY -60),
              anchor("center"),
              color(0, 0, 0),
              opacity(0.8),
              
            ]);
          
            return bubble;
          }

          // Attempt at text in bubble.
            //const txt = add([
            //    text("", { size: 9, width: width() - 230 }),
            //    pos(bubble.pos.x, bubble.pos.y), // Position the text relative to the bubble
            //    anchor("center"),
            //  ]);
            //  txt.text = dialogs;
            //return bubble;
        

            canMove = true;
          

        player.onCollide("chara", (chara) => { // "" are there to focus the onCollide action to the "chara" tag //The parameter (chara) is there so that info is passed into the function - would not work without it.
            if (!textBubble) { //if textBubble is null - To prevent the bubble to spawn on top of an existing one. 
              console.log("Yup");
              const characterPosX = chara.pos.x; //store the data of character posX 
              const characterPosY = chara.pos.y; //store the data of character posY 
              textBubble = createTextBubble(characterPosX, characterPosY); //gift the info to the createTextBubble function
              //chara.children = [textBubble]; //old attempt at using child. Did work at one point but did not manage to change it as I wished. 
              canMove = false; //Boolean logic to stop the player on its track while a textbubble is on screen
              wait(2, () => { //seconds before following actions
                console.log("party");
                destroy(textBubble); //destroy object
                textBubble = null; //not as useful anymore. It used to prevent a textbubble to spawn on top of another one (before boolean logic canMove)
                canMove = true; //Boolean logic to give back to the player the ability to move.
              });
            }
        });


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




// --- Boss ---

        const BOSS_HEALTH = 200
        let boss;
        if (levelId == 1) {
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
            on("death", "enemy", (enemy) => {
                destroy(enemy)
                destroy(healthbarGreyOutline)
                destroy(BossName)
                destroy(BossNameShadow)
            })
        }

        

// --- Mécaniques de combat ---  
//                  À ajouter --> fiole de désherbant (dégat sur forêt)     

        onCollide("bullet", "enemy", (bullet, enemy) => {
            destroy(bullet)
            enemy.hurt(20)
        });

        player.onCollide("enemy", () => {
            player.hurt(20)

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
        if (levelId == 1) {
            boss.paused = true;
        }
    } else {
        curTween.onEnd(() => {
            pauseMenu.hidden = true;
            txtdePause.hidden = true;
            txtdePause2.hidden = true;
            pauseMenu.paused = true;
            player.paused = false;
            bullet.paused = false;
            canMove = true;
            if (levelId == 1) {
                boss.paused = false;
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