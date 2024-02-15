import { createStore } from "vuex";

import journal from '@/modules/daybook/store/journal'

import { journalState } from '../../../../mock-date/test-journal-state'





const createVuexStore  =  (inicialState)=> 
createStore({
    modules:{
        journal:{
            ...journal,
            state:{...inicialState}
        }
    }
})

describe('Vuex - pruebas en el journal ',()=>{

    test('este es el estaado inicial, debe de tener este state',()=>{
        const store = createVuexStore( journalState)
        const {isLoanding,entries} = store.state.journal

        expect(isLoanding).toBeFalsy()
        expect(entries).toEqual(journalState.entries)
    })

    //mutations
    test('mutations: setEntries',()=>{
        const store = createVuexStore( {isLoanding:true,entries:[]})


        store.commit('journal/setEntries',journalState.entries)

        expect(store.state.journal.entries.length).toBe(1)
        expect(store.state.journal.isLoanding).toBeFalsy()
    })

    test('mutation:updateEntry',()=>{

        const store = createVuexStore( journalState)
 
        const updateEntry ={
            id:'-NkCzI86o6CqyrJuBrc8',
            date: 1701041720989,
            text: "hola esta es la prueba"
        }

        store.commit('journal/updateEntry',updateEntry)
        expect(store.state.journal.entries.length).toBe(1)
        expect(
            store.state.journal.entries.find( e=> e.id === updateEntry.id)
            ).toEqual(updateEntry)
            
     })

test( 'mutation:addEntry deleteEntry',()=>{
    
    const store = createVuexStore( journalState)
    
    
  // Agrega una nueva entrada
  store.commit('journal/addEntry', { id: 'ABC-123', text: 'Hola Mundo' });

  const stateEntriesBefore = store.state.journal.entries;
  console.log('Estado antes de elminar:', stateEntriesBefore);

  // Elimina la entrada
  store.commit('journal/deleteEntry', 'ABC-123');

  const stateEntriesAfter = store.state.journal.entries;
  console.log('Estado después de eliminar:', stateEntriesAfter);

  expect(stateEntriesAfter.length).toBe(1);
  expect(stateEntriesAfter.find(e => e.id === 'ABC-123')).toBeFalsy();
   

})

///getters////////////

test('gettters: getEntriesByTer  getEntryById',()=>{
        const store = createVuexStore( journalState)
        

        const [entry2] = journalState.entries
        
        expect(store.getters['journal/getEntriesByTer']('').length).toBe(1)

        expect(store.getters['journal/getEntriesByTer']('esta').length).toBe(1)

        expect(store.getters['journal/getEntriesByTer']('esta')).toEqual([entry2])

        expect(store.getters['journal/getEntryById']('-NkCzI86o6CqyrJuBrc8')).toEqual(entry2);

    


})

    test('actions: loadEntry',async()=>{
        const store = createVuexStore( {isLoanding:true,entries:[]})

      await  store.dispatch('journal/loadEntry')
        expect(store.state.journal.entries.length).toBe(1)
    })

    test('actions: updateEntry',async()=>{
        const store = createVuexStore( journalState)
        const updatedEntry =  {   
            id:'-NkCzI86o6CqyrJuBrc8',
            date: 1701041720989,
            text: "hola esta es la prueba",
            otroCampo:true,
            otroMas:{a:1}
        }


       await  store.dispatch('journal/updateEntry',updatedEntry)


        expect(store.state.journal.entries.length).toBe(1)
        expect(
            store.state.journal.entries.find(e => e.id === updatedEntry.id)
        ).toEqual({
            id:'-NkCzI86o6CqyrJuBrc8',
            date: 1701041720989,
            text: "hola esta es la prueba"
        })
    })
    
    test('actios: createEntry deleteEntry', async()=>{
        const store = createVuexStore( journalState)

        const newEntry = {date:123456789, text: 'la nueva entrada desde las pruebas'}
        
        const id = await store.dispatch('journal/createEntry',newEntry)

        expect(typeof id ).toBe('string')

        expect(
            store.state.journal.entries.find(e => e.id === id )
        ).toBeTruthy()

        await store.dispatch('journal/deleteEntry',id)

        expect(
            store.state.journal.entries.find(e=> e.id === id)
        ).toBeFalsy()





    })
      

    

})




    


      


