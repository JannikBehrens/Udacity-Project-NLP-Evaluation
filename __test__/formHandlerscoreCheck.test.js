import {scoreCheck} from "../src/client/js/formHandler.js"

describe('Testing polarity score conversion', () => {
    
    test('Testing scoreCheck() for P+', () => {
        
        expect(scoreCheck('P+')).toBe('Strong Positive')
    })

    test('Testing scoreCheck() for P', () => {
        expect(scoreCheck('P')).toBe('Positive')
    })

    test('Testing scoreCheck() for NEW', () => {
        expect(scoreCheck('NEU')).toBe('Neutral')
    })

    test('Testing scoreCheck() for N', () => {
        expect(scoreCheck('N')).toBe('Negative')
    })

    test('Testing scoreCheck() for N+', () => {
        expect(scoreCheck('N+')).toBe('Strong Negative')
    })

    test('Testing scoreCheck() for NONE', () => {
        expect(scoreCheck('NONE')).toBe('Without Polarity')
    })

    
});