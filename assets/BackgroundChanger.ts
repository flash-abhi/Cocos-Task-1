import { _decorator, Component, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BackgroundChanger')
export class BackgroundChanger extends Component {

    // reference to the background sprite in the scene
    @property(Sprite)
    backgroundSprite: Sprite = null;

    // the new background image for this button
    @property(SpriteFrame)
    newBackground: SpriteFrame = null;

    // this function will be called on button click
    changeBackground() {
        if (this.backgroundSprite && this.newBackground) {
            this.backgroundSprite.spriteFrame = this.newBackground;
        } else {
            console.warn("BackgroundChanger: Missing backgroundSprite or newBackground on", this.node.name);
        }
    }
}
