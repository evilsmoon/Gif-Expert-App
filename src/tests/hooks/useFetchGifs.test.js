import '@testing-library/jest-dom'
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('test useFetchGifs.js', () => {

    test('debe de retornar el iniciado especial',async () => {

        const { result,waitForNextUpdate }=renderHook( () => useFetchGifs('One Punch') );
        const {data:images, loading } = result.current
        // console.log( images,loading)
        await waitForNextUpdate();

        expect( images).toEqual([])
        expect( loading).toBe(true)
    });
    test('debe de retornar un arreglo de imagenes y el loading en false',async () => {
        const { result,waitForNextUpdate }=renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();
        const {data:images, loading } = result.current;
        // console.log( images,loading)
        expect( images.length).toBe(10);
        expect( loading).toBe(false);
 
    });
    

})
