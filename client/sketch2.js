class Home extends Phaser.Scene {

    constructor() {
        super('Home');
    }

    init(data) {
        // Used to prepare data

        async function getPlayerData() {
            const req = await fetch('http://127.0.0.1:3000/users');
            const res = await req.json();
            // console.log("DATA",data)
            data.playerData = res


            // game.data.set('api', res);

        }
        getPlayerData()


        async function getMobData() {
            const req = await fetch('http://127.0.0.1:3000/mobs');
            const res = await req.json();
            data.mobData = res

            //console.log(res);
        }
        getMobData();


        async function getNpcData() {
            const req = await fetch('http://127.0.0.1:3000/characters');
            const res = await req.json();
            data.npcData = res
            console.log("NPCS", data)
        }
        getNpcData();


        async function getSwordData() {
            const req = await fetch('http://127.0.0.1:3000/weapons');
            const res = await req.json();
            data.swordData = res
            console.log("SWORDS", data)

        }
        getSwordData();

    }

    preload() {
        // Used for preloading assets into your scene, such as
        this.load.image('pic', 'NewpalletTown.png');
        this.load.image('img', 'roronoa_zoro_by_dtrain2695_dbvkv3j-350t.png')
        this.load.image('clear', 'white.png')
    }

    create(data) {
        // Used to add objects to your game
        let playerData = data.playerData;
        console.log("PLAYER", playerData);

        let mobData = data.mobData;
        console.log("MOB", mobData);

        let npcData = data.npcData;
        console.log('npc', npcData);

        let swordData = data.swordData;
        console.log('sword', swordData);

        let map = this.add.image(500, 450, 'pic');

        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.image(489, 23, 'img');
        this.player.setScale(0.1)


        this.input.on('pointerdown', () => {
            const popup = this.add.graphics();
            const message = this.add.text(0, 0, `
            name: ${playerData.name}
            level: ${playerData.lvl}
            atk: ${playerData.atk}
            def: ${playerData.def}
            agi: ${playerData.agi}
            int: ${playerData.int}
    
            hp: ${playerData.hp}
            mana: ${playerData.mp}
            `, {
                font: "20px Arial",
                fill: "#000000",
            })
            popup.fillStyle(0xFFFFF, 1)
            popup.fillRect(300, 50, 350, 300)
            message.x = 305;
            message.y = 60;

            const closeButton = this.add.text(0, 0, 'X', {
                font: "32px Arial",
                fill: "#000000",
            })
            closeButton.x = 450;
            closeButton.y = 300;

            closeButton.setInteractive();

            closeButton.on('pointerdown', () => {
                popup.clear()
                message.destroy();
                closeButton.destroy();
            })
        });


        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.setZoom(2);

        this.physics.world.setBounds(0, 0, GAMEWIDTH - 5, GAMEHEIGHT - 40)
        // character bounds

        console.log(GAMEWIDTH)
        console.log(GAMEHEIGHT)
        this.cameras.main.setBounds(0, 0, GAMEWIDTH, GAMEHEIGHT);
        this.cameras.main.startFollow(this.player, true, 1, 1);
        this.player.setCollideWorldBounds(true);

        /// PLATFORMS
        let color = Phaser.Display.Color.GetColor32(255, 255, 255, 0);

        this.platforms = this.physics.add.staticGroup()
        // this.create.texture('clear', color) 
        // this.ground.alpha = 0
        this.ground = this.platforms.create(450, 40)
        this.door = this.platforms.create(583, 322)
        this.physics.add.collider(this.door, this.player, () => {
            this.scene.start('Boss', { playerData: data.playerData})
        })
        // 583 322
        //  this.ground.alpha = 0
        // this.ground.alpha = 0
        /* 
        
        */
        this.ground1 = this.platforms.create(450, 90)
        this.ground2 = this.platforms.create(450, 140)
        this.ground3 = this.platforms.create(430, 190)
        this.ground4 = this.platforms.create(400, 230)
        this.ground5 = this.platforms.create(390, 270)
        this.ground6 = this.platforms.create(550, 80)
        this.ground7 = this.platforms.create(550, 140)
        this.ground8 = this.platforms.create(530, 40)
        this.ground9 = this.platforms.create(490, 220)
        this.ground10 = this.platforms.create(510, 180)
        this.ground11 = this.platforms.create(480, 260)
        this.ground12 = this.platforms.create(460, 290)
        this.ground13 = this.platforms.create(510, 320)
        this.ground14 = this.platforms.create(550, 320)
        this.ground15 = this.platforms.create(620, 320)
        this.ground16 = this.platforms.create(620, 370)
        this.ground17 = this.platforms.create(620, 420)
        this.ground18 = this.platforms.create(580, 280)
        this.ground19 = this.platforms.create(390, 320)
        this.ground20 = this.platforms.create(340, 320)
        this.ground21 = this.platforms.create(300, 320)
        this.ground22 = this.platforms.create(250, 330)
        this.ground23 = this.platforms.create(200, 330)
        this.ground24 = this.platforms.create(200, 280)
        this.ground25 = this.platforms.create(120, 280)
        this.ground26 = this.platforms.create(160, 240)
        this.ground27 = this.platforms.create(120, 330)
        this.ground28 = this.platforms.create(120, 380)
        this.ground29 = this.platforms.create(170, 410)
        this.ground30 = this.platforms.create(220, 410)
        this.ground31 = this.platforms.create(270, 410)
        this.ground32 = this.platforms.create(320, 410)
        this.ground33 = this.platforms.create(370, 410)
        this.ground34 = this.platforms.create(390, 460)
        this.ground35 = this.platforms.create(420, 490)
        this.ground36 = this.platforms.create(420, 540)
        this.ground37 = this.platforms.create(370, 550)
        this.ground38 = this.platforms.create(320, 550)
        this.ground39 = this.platforms.create(280, 560)
        this.ground40 = this.platforms.create(240, 540)
        this.ground41 = this.platforms.create(200, 490)
        this.ground42 = this.platforms.create(160, 540)
        this.ground43 = this.platforms.create(150, 590)
        this.ground44 = this.platforms.create(150, 640)
        this.ground45 = this.platforms.create(180, 670)
        this.ground46 = this.platforms.create(240, 750)
        this.ground47 = this.platforms.create(220, 700)
        this.ground48 = this.platforms.create(290, 760)
        this.ground49 = this.platforms.create(335, 800)
        this.ground50 = this.platforms.create(380, 780)
        this.ground51 = this.platforms.create(410, 800)
        this.ground52 = this.platforms.create(450, 830)
        this.ground53 = this.platforms.create(500, 830)
        this.ground54 = this.platforms.create(550, 800)
        this.ground55 = this.platforms.create(590, 830)
        this.ground56 = this.platforms.create(640, 800)
        this.ground57 = this.platforms.create(690, 780)
        this.ground58 = this.platforms.create(720, 740)
        this.ground59 = this.platforms.create(720, 700)
        this.ground60 = this.platforms.create(720, 660)
        this.ground61 = this.platforms.create(760, 600)
        this.ground62 = this.platforms.create(720, 640)
        this.ground63 = this.platforms.create(755, 560)
        this.ground64 = this.platforms.create(755, 520)
        this.ground65 = this.platforms.create(755, 480)
        this.ground66 = this.platforms.create(710, 455)
        this.ground67 = this.platforms.create(695, 510)
        this.ground68 = this.platforms.create(685, 550)
        this.ground69 = this.platforms.create(650, 510)
        this.ground70 = this.platforms.create(605, 550)
        this.ground71 = this.platforms.create(585, 600)
        this.ground72 = this.platforms.create(605, 640)
        this.ground73 = this.platforms.create(585, 680)
        this.ground74 = this.platforms.create(570, 710)
        this.ground75 = this.platforms.create(520, 710)
        this.ground76 = this.platforms.create(470, 695)
        this.ground77 = this.platforms.create(440, 710)
        this.ground78 = this.platforms.create(400, 695)
        this.ground79 = this.platforms.create(365, 685)
        this.ground80 = this.platforms.create(365, 650)
        this.ground81 = this.platforms.create(410, 650)
        this.ground82 = this.platforms.create(450, 650)
        this.ground83 = this.platforms.create(480, 600)
        this.ground84 = this.platforms.create(500, 560)
        this.ground85 = this.platforms.create(520, 520)
        this.ground86 = this.platforms.create(500, 470)
        this.ground87 = this.platforms.create(520, 500)
        this.ground88 = this.platforms.create(500, 420)
        this.ground89 = this.platforms.create(550, 420)
        this.ground90 = this.platforms.create(580, 420)

        this.door.alpha = 0
        this.ground.alpha = 0
        this.ground1.alpha = 0
        this.ground2.alpha = 0
        this.ground3.alpha = 0
        this.ground4.alpha = 0
        this.ground5.alpha = 0
        this.ground6.alpha = 0
        this.ground7.alpha = 0
        this.ground8.alpha = 0
        this.ground9.alpha = 0
        this.ground10.alpha = 0
        this.ground11.alpha = 0
        this.ground12.alpha = 0
        this.ground13.alpha = 0
        this.ground14.alpha = 0
        this.ground15.alpha = 0
        this.ground16.alpha = 0
        this.ground17.alpha = 0
        this.ground18.alpha = 0
        this.ground19.alpha = 0
        this.ground20.alpha = 0
        this.ground21.alpha = 0
        this.ground22.alpha = 0
        this.ground23.alpha = 0
        this.ground24.alpha = 0
        this.ground25.alpha = 0
        this.ground26.alpha = 0
        this.ground27.alpha = 0
        this.ground28.alpha = 0
        this.ground29.alpha = 0
        this.ground30.alpha = 0
        this.ground31.alpha = 0
        this.ground32.alpha = 0
        this.ground33.alpha = 0
        this.ground34.alpha = 0
        this.ground35.alpha = 0
        this.ground36.alpha = 0
        this.ground37.alpha = 0
        this.ground38.alpha = 0
        this.ground39.alpha = 0
        this.ground40.alpha = 0
        this.ground41.alpha = 0
        this.ground42.alpha = 0
        this.ground43.alpha = 0
        this.ground44.alpha = 0
        this.ground45.alpha = 0
        this.ground46.alpha = 0
        this.ground47.alpha = 0
        this.ground48.alpha = 0
        this.ground49.alpha = 0
        this.ground50.alpha = 0
        this.ground51.alpha = 0
        this.ground52.alpha = 0
        this.ground53.alpha = 0
        this.ground54.alpha = 0
        this.ground55.alpha = 0
        this.ground56.alpha = 0
        this.ground57.alpha = 0
        this.ground58.alpha = 0
        this.ground59.alpha = 0
        this.ground60.alpha = 0
        this.ground61.alpha = 0
        this.ground62.alpha = 0
        this.ground63.alpha = 0
        this.ground64.alpha = 0
        this.ground65.alpha = 0
        this.ground66.alpha = 0
        this.ground67.alpha = 0
        this.ground68.alpha = 0
        this.ground69.alpha = 0
        this.ground70.alpha = 0
        this.ground71.alpha = 0
        this.ground72.alpha = 0
        this.ground73.alpha = 0
        this.ground74.alpha = 0
        this.ground75.alpha = 0
        this.ground76.alpha = 0
        this.ground77.alpha = 0
        this.ground78.alpha = 0
        this.ground79.alpha = 0
        this.ground80.alpha = 0
        this.ground81.alpha = 0
        this.ground82.alpha = 0
        this.ground83.alpha = 0
        this.ground84.alpha = 0
        this.ground85.alpha = 0
        this.ground86.alpha = 0
        this.ground87.alpha = 0
        this.ground88.alpha = 0
        this.ground89.alpha = 0
        this.ground90.alpha = 0

        // // collision detection
        this.physics.add.collider(this.ground, this.player)
        this.physics.add.collider(this.ground1, this.player)
        this.physics.add.collider(this.ground2, this.player)
        this.physics.add.collider(this.ground3, this.player)
        this.physics.add.collider(this.ground4, this.player)
        this.physics.add.collider(this.ground5, this.player)
        this.physics.add.collider(this.ground6, this.player)
        this.physics.add.collider(this.ground7, this.player)
        this.physics.add.collider(this.ground8, this.player)
        this.physics.add.collider(this.ground9, this.player)
        this.physics.add.collider(this.ground10, this.player)
        this.physics.add.collider(this.ground11, this.player)
        this.physics.add.collider(this.ground12, this.player)
        this.physics.add.collider(this.ground13, this.player)
        this.physics.add.collider(this.ground14, this.player)
        this.physics.add.collider(this.ground15, this.player)
        this.physics.add.collider(this.ground16, this.player)
        this.physics.add.collider(this.ground17, this.player)
        this.physics.add.collider(this.ground18, this.player)
        this.physics.add.collider(this.ground19, this.player)
        this.physics.add.collider(this.ground20, this.player)
        this.physics.add.collider(this.ground21, this.player)
        this.physics.add.collider(this.ground22, this.player)
        this.physics.add.collider(this.ground23, this.player)
        this.physics.add.collider(this.ground24, this.player)
        this.physics.add.collider(this.ground25, this.player)
        this.physics.add.collider(this.ground26, this.player)
        this.physics.add.collider(this.ground27, this.player)
        this.physics.add.collider(this.ground28, this.player)
        this.physics.add.collider(this.ground29, this.player)
        this.physics.add.collider(this.ground30, this.player)
        this.physics.add.collider(this.ground31, this.player)
        this.physics.add.collider(this.ground32, this.player)
        this.physics.add.collider(this.ground33, this.player)
        this.physics.add.collider(this.ground34, this.player)
        this.physics.add.collider(this.ground35, this.player)
        this.physics.add.collider(this.ground36, this.player)
        this.physics.add.collider(this.ground37, this.player)
        this.physics.add.collider(this.ground38, this.player)
        this.physics.add.collider(this.ground39, this.player)
        this.physics.add.collider(this.ground40, this.player)
        this.physics.add.collider(this.ground41, this.player)
        this.physics.add.collider(this.ground42, this.player)
        this.physics.add.collider(this.ground43, this.player)
        this.physics.add.collider(this.ground44, this.player)
        this.physics.add.collider(this.ground45, this.player)
        this.physics.add.collider(this.ground46, this.player)
        this.physics.add.collider(this.ground47, this.player)
        this.physics.add.collider(this.ground48, this.player)
        this.physics.add.collider(this.ground49, this.player)
        this.physics.add.collider(this.ground50, this.player)
        this.physics.add.collider(this.ground51, this.player)
        this.physics.add.collider(this.ground52, this.player)
        this.physics.add.collider(this.ground53, this.player)
        this.physics.add.collider(this.ground54, this.player)
        this.physics.add.collider(this.ground55, this.player)
        this.physics.add.collider(this.ground56, this.player)
        this.physics.add.collider(this.ground57, this.player)
        this.physics.add.collider(this.ground58, this.player)
        this.physics.add.collider(this.ground59, this.player)
        this.physics.add.collider(this.ground60, this.player)
        this.physics.add.collider(this.ground61, this.player)
        this.physics.add.collider(this.ground62, this.player)
        this.physics.add.collider(this.ground63, this.player)
        this.physics.add.collider(this.ground64, this.player)
        this.physics.add.collider(this.ground65, this.player)
        this.physics.add.collider(this.ground66, this.player)
        this.physics.add.collider(this.ground67, this.player)
        this.physics.add.collider(this.ground68, this.player)
        this.physics.add.collider(this.ground69, this.player)
        this.physics.add.collider(this.ground70, this.player)
        this.physics.add.collider(this.ground71, this.player)
        this.physics.add.collider(this.ground72, this.player)
        this.physics.add.collider(this.ground73, this.player)
        this.physics.add.collider(this.ground74, this.player)
        this.physics.add.collider(this.ground75, this.player)
        this.physics.add.collider(this.ground76, this.player)
        this.physics.add.collider(this.ground77, this.player)
        this.physics.add.collider(this.ground78, this.player)
        this.physics.add.collider(this.ground79, this.player)
        this.physics.add.collider(this.ground80, this.player)
        this.physics.add.collider(this.ground81, this.player)
        this.physics.add.collider(this.ground82, this.player)
        this.physics.add.collider(this.ground83, this.player)
        this.physics.add.collider(this.ground84, this.player)
        this.physics.add.collider(this.ground85, this.player)
        this.physics.add.collider(this.ground86, this.player)
        this.physics.add.collider(this.ground87, this.player)
        this.physics.add.collider(this.ground88, this.player)
        this.physics.add.collider(this.ground89, this.player)
        this.physics.add.collider(this.ground90, this.player)


    }

    update(time, delta) {
        this.player.body.setVelocity(0)

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-100)
        }
        if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(100)
        }

        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-100)
        }
        if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(100)
        }
        // Used to update your game. This function runs constantly
    }
}
class Boss extends Phaser.Scene {

    constructor() {
        super('Boss');
    }

    init(data) {
        // Used to prepare data
        // Used to prepare data

        async function getPlayerData() {
            const req = await fetch('http://127.0.0.1:3000/users');
            const res = await req.json();
            // console.log("DATA",data)
            data.playerData = res


            // game.data.set('api', res);

        }
        getPlayerData()


        async function getMobData() {
            const req = await fetch('http://127.0.0.1:3000/mobs');
            const res = await req.json();
            data.mobData = res

            //console.log(res);
        }
        getMobData();


        async function getNpcData() {
            const req = await fetch('http://127.0.0.1:3000/characters');
            const res = await req.json();
            data.npcData = res
            console.log("NPCS", data)
        }
        getNpcData();


        async function getSwordData() {
            const req = await fetch('http://127.0.0.1:3000/weapons');
            const res = await req.json();
            data.swordData = res
            console.log("SWORDS", data)

        }
        getSwordData();
        

    }

    preload() {
        this.load.image('room', 'boss_room.jpg');
        this.load.image('boss', 'boss.png');
        this.load.image('img', 'roronoa_zoro_by_dtrain2695_dbvkv3j-350t.png')
        this.load.image('clear', 'white.png')
        this.load.image('explosion', 'flame1.png')
        // Used for preloading assets into your scene, such as
        // • images
        // • sounds
    }

    create(data) {
        // Used to add objects to your game
        let playerData = data.playerData;

        let mobData = data.mobData;

        let npcData = data.npcData;



        let swordData = data.swordData;

        let map = this.add.image(626 / 2, 405 / 2, 'room').setScale(1.2)

        mobData.forEach((mob) => {
            let x = Math.floor(Math.random() * 400) + 200
            let y = Math.floor(Math.random() * 300) + 100
            let sprite = this.physics.add.image(x, y, 'boss')
            sprite.setScale(0.1)
            sprite.setInteractive();
            sprite.on('pointerdown', () => {
                const particles = this.add.particles('explosion')


                const emitter = particles.createEmitter({
                    speed: 10,
                    scale: { start: 1, end: 0 },
                    blendMode: 'ADD'
                })
                emitter.startFollow(sprite) 
                this.time.delayedCall(100, function () {
                    emitter.stop();
                }, [], this);
                sprite.destroy()
                /// HERE IS WHERE YOU WILL ADD THE PATCH THE REQUEST TO LEVEL UP THE PLAYER
                let lvl = data.playerData.lvl
                const request = async () => {
                    let req = await fetch("http://127.0.0.1:3000/users/1 ",{
                        method: "PATCH",
                        headers: {'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            lvl: lvl + 1
                        })
                        
                    })
                    let res = await req.json()
                    data.playerData = res
                }
                request()
                console.log(lvl)
                    

            })
            sprite.setCollideWorldBounds(true);

        })

        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.image(200, 23, 'img');
        this.player.setScale(0.1)

        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.setZoom(2);

        this.physics.world.setBounds(0, 0, (626 * 1.2) - 75, (405 * 1.2) - 55)
        // character bounds

        console.log(GAMEWIDTH)
        console.log(GAMEHEIGHT)
        this.cameras.main.setBounds(0, 0, (626 * 1.2) - 50, (405 * 1.2) - 45);
        this.cameras.main.startFollow(this.player, true, 1, 1);
        this.player.setCollideWorldBounds(true);

        this.platforms = this.physics.add.staticGroup()

        this.ground = this.platforms.create(450, 40)
        this.door = this.platforms.create(583, 322)
        this.physics.add.collider(this.door, this.player, () => {
            this.scene.start('Home', { playerData: data.playerData})
        })

        this.physics.add.collider(this.ground, this.player)
    }

    update(time, delta) {
        this.player.body.setVelocity(0)

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-100)
        }
        if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(100)
        }

        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-100)
        }
        if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(100)
        }
        // Used to update your game. This function runs constantly
    }
}


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1000,
    height: 900,
    pixelArt: true,
    physics: {
        default: 'arcade',
    },
    scene: [
        Home,
        Boss
    ]
}

let GAMEWIDTH = 1000
let GAMEHEIGHT = 900


const game = new Phaser.Game(config);


