export default class Inserter{
    _message:any;
    _head:any;
    _type:string | undefined;
    _image:any;
    _timeout:number;
    _parent: string="";
    constructor(head?:any,message?:any,type?:string,image?:any,timeout?:number) {
        this._head = head;
        this._message=message??'nodate';
        this._type = type??'error';
        this._image = image;
        this._timeout = timeout??5000;
    }

}

