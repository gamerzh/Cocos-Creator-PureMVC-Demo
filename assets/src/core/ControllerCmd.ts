import {INotification, SimpleCommand} from "../../lib/puremvc";
import {MsgConst} from "../config/MsgConst";
import LoginCmd from "../com/LoginCmd";


export default class ControllerCmd extends SimpleCommand {
    constructor() {
        super();
    }

    public execute(note: INotification): void {
        /**登录游戏*/
        this.facade.registerCommand(MsgConst.LOGIN_CMD, LoginCmd);
    }
}