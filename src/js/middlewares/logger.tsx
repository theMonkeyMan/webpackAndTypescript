interface loggerInterface{
    ({dispatch,state}:any):any;
}

interface dispatchAndGetStateInterface{
    dispatch:any,
    getState:Function
}

const logger:loggerInterface=(obj:dispatchAndGetStateInterface)=>{
    return (middleDispatch)=>(transmitAction)=>{
        // for(var i of obj.getState()._root.entries){
        //     console.info(i)
        // }
        middleDispatch(transmitAction);
    }
};

export default logger;