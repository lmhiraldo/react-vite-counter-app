import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas en 09-promesas', () => {
       
    test('getHeroeByIdAsync debería retornar un héroe', (done) => { 
        jest.setTimeout(10000);

        const id =1;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                
            });
            done ();
        })

    })

    test('getHeroeByIdAsync deberia retornar un error', (done) => {
        jest.setTimeout(10000);       
    
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                //done.fail('Se esperaba un error pero la promesa se resolvió');

                expect(hero).toBeFalsy();
                done();
            })
            .catch(error => {
                // console.log(error);
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });
    });
    
})