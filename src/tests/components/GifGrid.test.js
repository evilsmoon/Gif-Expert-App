import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('test GifGrid.js', () => {
    const category = 'One Piece';
    test('Debe de mostrat componente <GifGrid/> ', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    })
    test('debe demostrar items cuando se cargan imagenes usando useFetchGifs', () => {
        const gifs =[{
            id:'ABC',
            url:'https://localhost/cualquier/cosa.jpg',
            title:'cualquier cosa'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })        
        const wrapper = shallow(<GifGrid category={category}/>);
        
        //    expect( wrapper ).toMatchSnapshot()
           expect( wrapper.find('p').exists()).toBe(false); 
           expect( wrapper.find('GifGridItem').length ).toBe( gifs.length ); 
    })
    
    
    
})
