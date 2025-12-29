import {_decorator} from 'cc';
import {BaseScene} from "../base/BaseScene";

const {ccclass} = _decorator;

@ccclass('MainScene')
export class MainScene extends BaseScene {
    protected onLoad() {
        super.onLoad();
    }
    protected start() {
        console.log("MainScene 场景初始化完毕")
    }
    protected onDestroy() {
        super.onDestroy();
    }
}