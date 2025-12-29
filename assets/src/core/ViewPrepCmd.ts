import AppMediator from "../AppMediator";
import {INotification, SimpleCommand} from "../../lib/puremvc";

export default class ViewPrepCmd extends SimpleCommand {
    public constructor() {
        super();
    }

    public execute(message: INotification): void {
        //游戏主舞台
        this.facade.registerMediator(new AppMediator(message.getBody()));
    }
}