import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba de 06-deses-obj', () => {
    
    test('usContext debe retornar un objeto', () => { 
        
        const clave = 'developer';
        const edad= 42;
        const testContext = {
            clave: 'developer',
            nombre:'Laura',
            edad: 42,
            rango:'Capitán'          
        };

        const context = usContext(testContext);

        expect (context).toEqual ({

            nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
            

        });
        
    })
    

})