import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

// import  from '../../components/GifGridItem'
describe('Test GifGridItem.js ', () => {
    // let wrapper = shallow(<GifGridItem/>);
    // beforeEach(()=>{
        // wrapper = shallow(<GifGridItem/>)
    // })
    const title = 'titulo';   
    const url = 'https://localhost/image.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('mostrar componente <GifGridItem/>  ', () => {


        expect(wrapper).toMatchSnapshot();

        
    })
    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)    
    })
    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props('src'))

        expect(img.prop('src')).toBe( url );
        expect(img.prop('alt')).toBe( title );
    })
    
    test('debe de tener animate__fadeIn ', () => {
        const div = wrapper.find('div');
        expect( div.prop('className').includes('animate__fadeIn')).toBe( true)
    })
    
            
    
})
