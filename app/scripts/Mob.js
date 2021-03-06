function Mob(texturename) {
    // Do not change this class except for the changeable attributes section at the end of this calss
    // Init Sprite
    this.texturename = texturename;
    this.texture = PIXI.loader.resources[this.texturename].texture;
    PIXI.Sprite.call(this, this.texture);

    // Setup
    Game.world.addChild(this);
    Game.updateObjects.push(this);
    //this.scale.set(4, 4);
    this.anchor.set(0.5, 0.5);

    // Attributes
    this.ownEventQueue = [];
    this.vel = {
        x: 0,
        y: 0,
    }

    // Components
    this.components = [];

    // Make Events
    this.makeEvents = function () {
        // Make sure Own Event Queue is empty
        this.ownEventQueue = [];
        for (component in this.components) {
            this.components[component].makeEvents();
        }
    }
    // Handle Events, then update
    this.handleEvents = function () {
        this.vel.x = 0;
        for (component in this.components) {
            this.components[component].handleEvents();
            this.components[component].update();
        }
    }

    // Changeable Attributes
    this.speed = 1;
}
Mob.prototype = Object.create(PIXI.Sprite.prototype)