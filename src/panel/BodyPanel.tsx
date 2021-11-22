import React, {Component} from "react";
import Inserter from "./Inserter";

const containerId="fifa-go"
let fiafaCon:any=undefined;
type IOmsert={
    inserter:Inserter
}
 export default class BodyPanel extends Component<IOmsert>{
    private inserter: Inserter;
    private time: any;
    constructor(props: Readonly<IOmsert> | IOmsert) {
        super(props);
        this.inserter=props.inserter
        this.init()
        this.time=0
    }
    init(){
        if(!fiafaCon){
            fiafaCon=document.getElementById(containerId)
        }
        console.log("sdtttttttt",this.inserter)
        if(this.inserter._timeout!==-1){
            this.time= setTimeout(()=>{
                const self=document.getElementById(this.inserter._parent)
                if(self){
                    fiafaCon.removeChild(self)
                }

            },this.inserter._timeout)
        }

    }
    clickPanel(){
        const self=document.getElementById(this.inserter._parent)
        if(self){
            fiafaCon.removeChild(self)
        }
        clearTimeout(this.time);
    }
    className(){
        if(this.inserter._type){
            switch (this.inserter._type){
                case "error":{
                    return "panelError"
                }
                case "warning":{
                    return "panelWarning"
                }
                case "info":{
                    return "panelInfo"
                }
                default:{
                    return "panelError"
                }
            }
        }else{
            return "panelError"
        }
    }

    paintImage(){
        if(!React.isValidElement(this.inserter._image)){
            if(typeof this.inserter._image==="string"){
                return (<img src={this.inserter._image} alt=".." className="panelImageCore"/>)
            }
        }
        else{
            return this.inserter._image;
        }
    }
    paintHr(){
        if(this.inserter._head||this.inserter._image){
            return (<hr className="panelHr"/>)
        }
    }
    panelHead(){
        if(this.inserter._head||this.inserter._image){
            return(
                <div className="panelHead">
                    <div className="panelHeadImage">
                        {this.paintImage()}
                    </div>

                    <div className="panelHeadMessage">
                        {this.inserter._head}
                    </div>
                </div>
            );
        }

    }

    render() {
        return(
            <div  className={this.className()} onClick={this.clickPanel.bind(this)}>
                {this.panelHead()}
                {this.paintHr()}
                <div className="panelMessage"><span>{this.inserter._message}</span></div>
            </div>
        );
    }
}
