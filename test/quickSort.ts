(() => {
  const partition = (arr, l, r) => {
    const v = arr[l]

    let j = l
    for (let i = l + 1; i <= r; i++) {
      if (arr[i] < v) {
        [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]]
        j++
      }
    }
    [arr[l], arr[j]] = [arr[j], arr[l]]
    return j
  }

  const quickSort = (arr, l = 0, r = arr.length - 1) => {
    if (l >= r) return

    const p = partition(arr, l, r)
    quickSort(arr, l, p - 1)
    quickSort(arr, p + 1, r)
  }

  // const arr = [9, 3, 4, 1, 4, 5, 33, 3, 7]
  // quickSort(arr)
  // console.log(arr)

})()