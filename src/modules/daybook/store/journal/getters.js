// export const miGetter = (state)=>{
    // return.algo
// los getters no son asincronos}

export const getEntriesByTer = (state)=> (term = '') => {

    if(term.length === 0) return state.entries

    return  state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
}

export const getEntryById = (state)=> (id = '')=>{
   const entry = state.entries.find(entry => entry.id ===id)
   if(!entry)  return

   return  {...entry} 

}