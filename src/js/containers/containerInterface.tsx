interface mapStateToPropsInterface{
    (state:any,ownProps?:any):any
}

interface mapDispatchToPropsInterface{
    (dispatch:any,ownProps?:any):any
}

export {
    mapStateToPropsInterface,
    mapDispatchToPropsInterface
}