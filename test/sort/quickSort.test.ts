import { quickSort } from '../../src/sort/quickSort'
import { mergeSort } from '../../src/sort/mergeSort'

test('快排', () => {
    let arr = [2, 6, 1, 4, 8, 4, 7, 8, 97, 3, 2];
    quickSort(arr);
    expect(arr).toEqual(mergeSort([2, 6, 1, 4, 8, 4, 7, 8, 97, 3, 2]))
    
    const data = [
      [],
      [3],
      [2, 6, 1, 4, 8, 4, 7, 8, 97, 3, 2],
      [3, 5, 1, 4, 39, 4, 7, 8, 98, 3, 2] 
    ]

    for (let i = 0; i < data.length; i++) {
      let arr = data[i];
      quickSort(arr);
        expect(arr).toEqual(mergeSort(JSON.parse(JSON.stringify(data[i]))))
    }
})

