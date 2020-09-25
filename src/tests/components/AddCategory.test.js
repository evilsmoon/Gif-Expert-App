
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { AddCategory } from '../../components/AddCategory';

describe('test AddCategory.js', () => {
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)

    })
    test('mostrar compomente <AddCategory/>', () => {

        expect(wrapper).toMatchSnapshot()
    })
    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value)
    })
    test('no debe de postear la info con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategory y limpiar la caja de texto', () => {
        //simular el inputChange
        //simular el submit
        //set category se debe de haber llamando 
        //el valor de input debe de estar como input vacio
        const input = wrapper.find('input');
        const value = 'One Piece;'
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value)

        wrapper.find('form').simulate('submit', { preventDefault() { } })

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // input.simulate('change',{ target:{value : ''}})
        // expect()
        expect(wrapper.find('input').prop('value')).toBe('')

    })



})
