import cloudinary from 'cloudinary' 
import uploadImage from '../../../../../src/modules/daybook/helpers/uploadImage'

import axios from 'axios'

cloudinary.config({ 
    cloud_name: 'drxyhntda', 
    api_key: '958975443498691', 
    api_secret: 'bYtYaszsm7kZexhEvyTV2gtBYTU' 
})

describe('pruebas de uploadImage', () => {
    test('debe de cargar una imagen', async( ) => {
      const {data} =  await axios.get('https://res.cloudinary.com/drxyhntda/image/upload/v1701041967/cld-sample-3.jpg',{
            responseType:'arraybuffer'
        })

        const file = new File([data], 'foto.jpg')

            const url =  await uploadImage(file)

            expect(typeof url).toBe('string')

            ///tomar el id de cloudinari
           
            const segments = url.split('/')
            const imageId = segments[segments.length - 1].replace('.jpg','')

            cloudinary.v2.api.delete_resources(imageId, {}, () => {
               
            })
            
           
            
    })

})