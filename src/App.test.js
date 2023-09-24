import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { initialState, updateTimes } from './components/Main';

// Mocking fetchAPI for initializeTimes
jest.mock('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js', () => ({
    fetchAPI: jest.fn(() => Promise.resolve(['17:00', ':00']))
}));

// Mocking getTimesForDate for updateTimes
jest.mock('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js', () => ({
    getTimesForDate: jest.fn(() => ['17:00', '18:00'])
}));

describe('App tests', () => {

    describe('initialState', () => {
        it('should initialize with the times fetched from the API', async () => {
            const expectedTimes = ['17:00', '18:00'];
            let result;

            await waitFor(async () => {
                result = await initialState();
            });

            expect(result).toEqual(expectedTimes);
        });
    });

    describe('updateTimes', () => {
        it('should update times based on the provided date', () => {
            const selectedDate = '2023-09-25';
            const initialState = ['17:00', '18:00', '19:00'];
            const expectedUpdatedTimes = ['20:00', '21:00'];

            const result = updateTimes(initialState, selectedDate);
            expect(result).toEqual(expectedUpdatedTimes);
        });
    });


});

