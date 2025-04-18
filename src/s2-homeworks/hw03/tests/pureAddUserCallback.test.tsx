import React from 'react'
import {pureAddUserCallback, UserType} from '../HW3'

let initialState: UserType[];
/* const setName = (a: UserType[]) => {
    initialState = a
} */

const setName = (a: UserType[] | ((prevState: UserType[]) => UserType[])) => {
    if (typeof a === 'function') {
        initialState = a(initialState); // Вызываем функцию с текущим состоянием
    } else {
        initialState = a; // Присваиваем новое состояние
    }
};

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
