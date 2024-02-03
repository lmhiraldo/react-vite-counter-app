import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Prueba en 05-funciones', () => { 

    test('getUSer debe devolver un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect (testUser).toEqual (user);
     })

     test('getUsuarioActivo debe devolver un objeto', () => { 
        
        const name = 'Laura';
        const user = getUsuarioActivo (name);
        expect (user).toEqual ({
            uid: 'ABC567',
            username: name
        })
    
    })
})