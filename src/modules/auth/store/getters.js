export const currenState = (state)=>{
    return state.status
}

export const username = (state)=>{
    return state.user?.name || ''
}