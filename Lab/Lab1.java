package Lab;

public class Lab1 {

    public static void main(String args[]) {
        int[] arr = { 68, 1, 2, 8, 190, 0, 55 };

        System.out.println(arrToStr(mergeSort(arr)));
    }

    public static String arrToStr(int[] arr) {
        String str = "";
        for (int i : arr) {
            str += i;
            str += ", ";
        }
        return str;

    }

    /** Sorting algorithms **/

    // Insertion sort.
    public static void insertionSort(int[] array) {

        int key;
        for (int i = 1; i < array.length; i++) {
            key = array[i];
            insert(array, i, key);
        }
        // return array;
    }

    public static void insert(int[] array, int i, int key) {

        for (int j = i - 1; j > -1 && array[j] > key; j--) {
            key = array[j + 1];
            array[j + 1] = array[j];
            array[j] = key;
        }

    }

    // Quicksort.
    public static void quickSort(int[] array) {
        // System.out.println("main");
        quickSort(array, 0, array.length - 1);
    } // Quicksort part of an array

    private static void quickSort(int[] array, int low, int high) {
        // System.out.println("recursive part");
        if (low >= high) {
            return;
        }

        int pivot = partition(array, low, high);
        quickSort(array, low, pivot - 1);
        quickSort(array, pivot + 1, high);

    } // Partition part of an array, and return the index where the pivot // ended up.

    private static int partition(int[] array, int start, int end) {
        // System.out.println("partition");
        int pivot_index = start;
        int pivot = array[pivot_index];
        start = start + 1;

        while (start <= end) {
            while (array[start] < pivot)
                start++;
            while (array[end] > pivot)
                end--;

            if (start <= end) {
                swap(array, start, end);
                start++;
                end--;
            }

        }

        swap(array, pivot_index, end);

        return end;
    } // Swap two elements in an array

    private static void swap(int[] array, int i, int j) {
        int x = array[i];
        array[i] = array[j];
        array[j] = x;
    }

    // Mergesort.
    public static int[] mergeSort(int[] array) {
        return mergeSort(array, 0, array.length - 1);

    } // Mergesort part of an array

    private static int[] mergeSort(int[] array, int begin, int end) {

        if (begin == end) {
            return array;
        }

        // int mid = Math.floor( (/ 2));

        int mid = Math.floorDiv((end + begin), 2);

        int[] left = split(array, begin, mid);
        int[] right = split(array, mid + 1, end);

        return merge(mergeSort(left), mergeSort(right));
    } // Merge two sorted arrays into one

    private static int[] split(int[] array, int begin, int end) {
        int len = end - begin;
        int[] tempArr = new int[len];

        for (int i = 0, j = begin; i <= len;) {
            tempArr[i++] = array[j++];
        }

        return tempArr;
    }

    private static int[] merge(int[] left, int[] right) {
        int[] tempArray = new int[left.length + right.length];
        int i = 0;
        int j = 0;
        int k = 0;

        while (i < left.length && j < right.length) {
            if (left[i] > right[j]) {

                tempArray[k++] = right[j++];
            } else {
                tempArray[k++] = right[i++];
            }
        }
        while (i < left.length) {
            tempArray[k++] = left[i++];
        }
        while (j < right.length) {
            tempArray[k++] = right[j++];
        }
        return tempArray;
    }
}
