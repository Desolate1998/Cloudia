import { action, makeAutoObservable, observable } from "mobx";

export default class FileStore{

    constructor() {
        makeAutoObservable(this)        
    }

    @observable addNewFolderDialogOpen = false;
    

    @action setAddnewFolderDialogOpen = ()=>{
        this.addNewFolderDialogOpen = !this.addNewFolderDialogOpen;
        
    }
}