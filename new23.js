let array = [];

function generateArray(size = 20) {
    array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    drawArray();
}

function drawArray() {
    const container = document.getElementById('array-container');
    container.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value * 3}px`;
        container.appendChild(bar);
    });
}

async function startBubbleSort() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                drawArray();
                await sleep(100);
            }
        }
    }
}

async function startSelectionSort() {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            drawArray();
            await sleep(100);
        }
    }
}

async function startInsertionSort() {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
            drawArray();
            await sleep(100);
        }
        array[j + 1] = key;
        drawArray();
        await sleep(100);
    }
}

// async function startQuickSort() {
//     await quickSort(array, 0, array.length - 1);
// }

// async function quickSort(arr, low, high) {
//     if (low < high) {
//         const pi = await partition(arr, low, high);
//         await quickSort(arr, low, pi - 1);
//         await quickSort(arr, pi + 1, high);
//     }
// }

// async function partition(arr, low, high) {
//     const pivot = arr[high];
//     let i = low - 1;
//     for (let j = low; j < high; j++) {
//         if (arr[j] < pivot) {
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             drawArray();
//             await sleep(100);
//         }
//     }
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     drawArray();
//     await sleep(100);
//     return i + 1;
// }

// async function startMergeSort() {
//     await mergeSort(array, 0, array.length - 1);
// }

// async function mergeSort(arr, left, right) {
//     if (left < right) {
//         const mid = Math.floor((left + right) / 2);
//         await mergeSort(arr, left, mid);
//         await mergeSort(arr, mid + 1, right);
//         await merge(arr, left, mid, right);
//     }
// }

// async function merge(arr, left, mid, right) {
//     const leftArray = arr.slice(left, mid + 1);
//     const rightArray = arr.slice(mid + 1, right + 1);

//     let i = 0, j = 0, k = left;

//     while (i < leftArray.length && j < rightArray.length) {
//         if (leftArray[i] <= rightArray[j]) {
//             arr[k] = leftArray[i];
//             i++;
//         } else {
//             arr[k] = rightArray[j];
//             j++;
//         }
//         drawArray();
//         await sleep(100);
//         k++;
//     }

//     while (i < leftArray.length) {
//         arr[k] = leftArray[i];
//         i++;
//         k++;
//     }

//     while (j < rightArray.length) {
//         arr[k] = rightArray[j];
//         j++;
//         k++;
//     }
// }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Initial array generation
generateArray();
