import React, {createRef} from "react";

import * as ReactDOM from "react-dom";

import InserterResident from "./InserterResident";
import Inserter from "./Inserter";
import BodyPanel from "./BodyPanel";



const containerId="fifa-go"

type Props={
    inserter:InserterResident
}

let fif=0;
export  class PanelError extends React.Component<Props>{
    ref:any=createRef();

    constructor(props: Readonly<Props> | Props) {
        super(props);



        this.props.inserter.addInserter=(i:Inserter)=> {
            this.addCore(i)
        }
    }

    addCore=(i:Inserter)=>{
        console.log("KKKK",this.ref);
        console.log("________",this.ref)
        const id="fifa-"+ fif++;
        const f=document.createElement('div')
        f.className="base-p"
        f.id=id;
        i._parent=id;
        ReactDOM.render(<BodyPanel inserter={i}  />,f)

        this.ref.current.appendChild(f)
    }






    render() {
        return (  <div ref={this.ref} id={containerId} className="panelContainer">
        </div>);
    }

}






function Runner(inserter:InserterResident){
    const root = document.createElement('div');
    root.style.display = 'contents';
    document.body.appendChild(root)
    ReactDOM.render(<PanelError inserter={inserter} />, root);

}




const inserterR =new InserterResident();

Runner(inserterR)


export interface ParamsPanel {
    message: string;
    head?: any;
    type?: 'error'|'warning'|'info';
    timeout?: number;
    image?:any;
}



export function ShowPanel(par: ParamsPanel):void{
    const s=new Inserter(par.head,par.message,par.type,par.image,par.timeout)
    inserterR.addInserter(s)
}


