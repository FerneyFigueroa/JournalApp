// export const miActions = async({commit})=>{

// }
import journalApi from "@/api/journalApi"

export const loadEntry = async ({commit})=>{
  const { data } = await  journalApi.get('/entries.json')
  
  if(!data){
      commit('setEntries',[])
      return
  }
  
  const entries = []
  for (let id of Object.keys(data)){
    console.log(id)
    entries.push({
        id,
        ...data[id]
    })
    console.log(entries)
  }
 commit('setEntries', entries)
}

export const updateEntry = async({commit},entry)=>{
  const { date, picture , text} = entry
  const dataTosave = {date, picture , text}

 const respuesta=  await journalApi.put(`/entries/${entry.id}.json`,dataTosave)

 dataTosave.id = entry.id

 commit('updateEntry', {...dataTosave})
}

export const createEntry = async({commit},entry)=>{
  const { date, picture , text} = entry
  const dataTosave = {date, picture , text}

  const {data} =  await journalApi.post(`entries.json`,dataTosave)

  dataTosave.id = data.name


  commit('addEntry',dataTosave)
 return data.name

  
}

export const deleteEntry = async({commit},id)=>{
    await journalApi.delete(`/entries/${id}.json`)

    commit('deleteEntry',id)
    return id
}