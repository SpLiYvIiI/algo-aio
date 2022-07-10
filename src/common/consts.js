const bubbleSortOverView =
  'Bubble sort არის უმარტივესი დახარისხების ალგორითმი, რომელიც მუშაობს მეზობელი ელემენტების აგდგილების გაცვლით იქამდე სანამ მიმდევრობა არ იქნება დალაგებული. ეს ალგორითმი არ არის შესაფერისი დიდი მონაცემთა ნაკრებისთვის, რადგან მისი საშუალო და უარეს შემთხვევაში დროითი სირთულე საკმაოდ მაღალია.';
const bubbleSortWorstComplexity =
  'საშუალო და უარესი შემთხვევა: n2 (უარეს შემთხვევაში მონაცემები შებრუნებულად არის დალაგებული).';
const heapSortOverView =
  'Heap sort არის შედარების საფუძველზე დახარისხების ტექნიკა, რომელიც დაფუძნებულია Binary Heap მონაცემთა სტრუქტურაზე. ეს ალგორითმი არის Selection sort-ის მსგავსი, სადაც პირველად ვიპოვით მინიმალურ ელემენტს და ვათავსებთ მინიმალურ ელემენტს დასაწყისში. ჩვენ ვიმეორებთ იგივე პროცესს დარჩენილი ელემენტებისთვის.';
const heapSortWorstComplexity =
  'საუკეთესო, საშუალო და უარესი შემთხვევა: nLogn (მონაცემთა მიმდევრობა არ ახდენს გავლენას ალგორითმის მუშაობის სიჩქარეზე).';

const insertionSortOverView =
  'Insertion sort არის მარტივი დახარისხების ალგორითმი, რომელიც მუშაობს ისე, როგორც თქვენ დაალაგებთ სათამაშო კარტებს თქვენს ხელში. მასივი პრაქტიკულად იყოფა დახარისხებულ და დაუხარისხებელ ნაწილებად. მნიშვნელობები დაულაგებული ნაწილიდან აირჩევა და მოთავსდება დალაგებულ ნაწილში სწორ პოზიციაზე.';

const insertionSortWorstComplexity =
  'საშუალო და უარესი შემთხვევა: n2 (უარეს შემთხვევაში მონაცემები პირიქითაა დალაგებული ).';

const insertionSortBestComplexity =
  'საუკეთესო შემთხვევა: n (თუ მონაცემები უკვე დალაგებული არის).';

const quickSortOverView =
  'Quick sort არის დახარისხების ალგორითმი. ალგორითმი ირჩევს საყრდენ ელემენტს და გადააწყობს მასივის ელემენტებს ისე, რომ ყველა ელემენტი, რომელიც არჩეულ საყრდენ ელემენტზე მცირეა, გადავიდეს საყრდენის მარცხენა მხარეს, ხოლო ყველა დიდი ელემენტი გადავიდეს მარჯვენა მხარეს. დაბოლოს, ალგორითმი რეკურსიულად ახარისხებს ქვემასივებს საყრდენი ელემენტის მარცხნივ და მარჯვნივ.';

const quickSortWorstComplexity =
  'უარეს შემთხვევაში: n2 (თუ მონაცემები უკვე დალაგებულია ან დალაგაებულია შებრუნებულად).';

const quickSortBestComplexity = 'საუკეთესო და საშუალო შემთხვევა: nLogn .';

const selectionSortOverView =
  'Selection sort ალგორითმი ახარისხებს მასივს დაულაგებელი ნაწილიდან მინიმალური ელემენტის (ზრდადი რიგის გათვალისწინებით) განმეორებითი მოძიებით და დასაწყისში ჩასმით. ალგორითმი ინარჩუნებს ორ ქვემასივს მოცემულ მასივში. ქვემასივი, რომელიც უკვე დალაგებულია. დარჩენილი ქვემასივს, რომელიც დაუხარისხებელია. Selection sort-ის ყოველი იტერაციისას, მინიმალური ელემენტი (ზრდადი რიგის გათვალისწინებით) დაუხარისხებელი ქვემასივიდან აირჩევა და გადადის დალაგებულ ქვემასივში.';

const selectionSortWorstComplexity =
  'საუკეთესო, საშუალო და უარესი შემთხვევა: n2 (მონაცემთა მიმდევრობა არ ახდენს გავლენას ალგორითმის მუშაობის სიჩქარეზე).';
export const loremIpsumText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae\n' +
  '        elementum dolor. Nulla auctor mattis nibh eu consectetur. Vivamus quis\n' +
  '        nunc leo. Sed ut malesuada risus. Nulla quis enim dictum, condimentum\n' +
  '        libero id, scelerisque nibh. Proin eleifend bibendum lorem, vel maximus\n' +
  '        nisl ultricies sed. Aliquam suscipit vehicula pulvinar. Sed nisi turpis,\n' +
  '        sodales quis dignissim id, vehicula eget dolor. Morbi a massa bibendum,\n' +
  '        dignissim ligula ac, ultrices nunc. Proin id orci mi. Cras euismod neque\n' +
  '        aliquet maximus gravida. Fusce fringilla malesuada lorem non mattis.\n' +
  '        Nunc iaculis mi nulla, nec auctor felis laoreet id.';

export const learningMaterial = {
  SORTING: {
    'bubble-sort': {
      fancyName: 'Bubble sort',
      overview: bubbleSortOverView,
      complexities: {
        worst: bubbleSortWorstComplexity,
        average: bubbleSortWorstComplexity,
        best: bubbleSortWorstComplexity,
      },
      additionalSources: [
        'https://www.geeksforgeeks.org/bubble-sort/',
        'https://www.programiz.com/dsa/bubble-sort',
      ],
    },
    'heap-sort': {
      fancyName: 'Heap sort',
      overview: heapSortOverView,
      complexities: {
        worst: heapSortWorstComplexity,
        average: heapSortWorstComplexity,
        best: heapSortWorstComplexity,
      },
      additionalSources: [
        'https://brilliant.org/wiki/heap-sort/',
        'https://www.geeksforgeeks.org/heap-sort/',
        'https://en.wikipedia.org/wiki/Heapsort',
      ],
    },
    'insertion-sort': {
      fancyName: 'Insertion sort',
      overview: insertionSortOverView,
      complexities: {
        worst: insertionSortWorstComplexity,
        average: insertionSortWorstComplexity,
        best: insertionSortBestComplexity,
      },
      additionalSources: [
        'https://www.programiz.com/dsa/insertion-sort',
        'https://www.geeksforgeeks.org/insertion-sort/',
      ],
    },
    'quick-sort': {
      fancyName: 'Quick sort',
      overview: quickSortOverView,
      complexities: {
        worst: quickSortWorstComplexity,
        average: quickSortBestComplexity,
        best: quickSortBestComplexity,
      },
      additionalSources: [
        'https://www.geeksforgeeks.org/quick-sort/',
        'https://en.wikipedia.org/wiki/Quicksort',
        'https://www.javatpoint.com/quick-sort',
      ],
    },
    'selection-sort': {
      fancyName: 'Selection sort',
      overview: selectionSortOverView,
      complexities: {
        worst: selectionSortWorstComplexity,
        average: selectionSortWorstComplexity,
        best: selectionSortWorstComplexity,
      },
      additionalSources: [
        'https://www.geeksforgeeks.org/selection-sort/',
        'https://www.programiz.com/dsa/selection-sort',
        'https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm',
      ],
    },
  },
  'GRAPH-TRAVERSAL': {
    'depth-first-search': {
      fancyName: 'Depth first search',
      overview: bubbleSortOverView,
      complexities: {
        worst: bubbleSortWorstComplexity,
        average: bubbleSortWorstComplexity,
        best: bubbleSortWorstComplexity,
      },
      additionalSources: [
        'https://www.geeksforgeeks.org/bubble-sort/',
        'https://www.programiz.com/dsa/bubble-sort',
      ],
    },
    'breadth-first-search': {
      fancyName: 'Breadth first search',
      overview: bubbleSortOverView,
      complexities: {
        worst: bubbleSortWorstComplexity,
        average: bubbleSortWorstComplexity,
        best: bubbleSortWorstComplexity,
      },
      additionalSources: [
        'https://www.geeksforgeeks.org/bubble-sort/',
        'https://www.programiz.com/dsa/bubble-sort',
      ],
    },
  },
};
