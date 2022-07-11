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
  const dfsOverView =
  'Depth-First Search ან DFS ალგორითმი იკვლევს მონაცემთა სტრუქტურებს, როგორიცაა ხეები და გრაფიკები. იგი არის რეკურსიული ალგორითმი, რომელიც იყენებს backtracking-ის პრინციპს. ის გულისხმობს ყველა კვანძის ამომწურავი ძიების ჩატარებას, თუ ეს შესაძლებელია, წინსვლას და საჭიროების შემთხვევაში უკან დაბრუნებას.';
  const bfsOverView =
  'Breadth-First Search ძიება ან BFS ალგორითმი გამოიყენება ხის ან გრაფის გამოსაკვლევად, ისეთი კვანძისთვის, რომელიც აკმაყოფილებს კრიტერიუმების ერთობლიობას. ის იწყება ხის ან გრაფის ფესვიდან და იკვლევს ყველა კვანძს მიმდინარე სიღრმეზე, სანამ გადავა კვანძებზე მომდევნო დონეზე. თქვენ შეგიძლიათ გადაჭრათ მრავალი პრობლემა გრაფის თეორიაში BFS-ის საშუალებით.';

 export const aboutProjectText = 
  "AlgoAIO წარმოადგენს ინსტრუმენტს სტუდენტებისთვის და არამარტო, გაიმარტივონ ალგორითმების შესწავლა ვიზუალიზაციის მხრივ. თქვენ შეგიძლიათ აირჩიოთ სასურველი ალგორითმი და დაიწყოთ მისი შესწავლა.";
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
    'tree-traversals': {
      fancyName: 'Tree Traversals',
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
    'depth-first-search': {
      fancyName: 'Depth first search',
      overview: dfsOverView,
      complexities: {},
      additionalSources: [
        'https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/',
        'https://www.simplilearn.com/tutorials/data-structure-tutorial/dfs-algorithm',
      ],
    },
    'breadth-first-search': {
      fancyName: 'Breadth first search',
      overview: bfsOverView,
      complexities: {},
      additionalSources: [
        'https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/?ref=lbp',
        'https://www.simplilearn.com/tutorials/data-structure-tutorial/bfs-algorithm',
      ],
    },
  },
};
export const quiz =  {
  "quizTitle": "React Quiz Component Demo",
  "quizSynopsis": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
  "nrOfQuestions": "4",
  "questions": [
    {
      "question": "How can you access the state of a component from inside of a member function?",
      "questionType": "text",
      "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      "answerSelectionType": "single",
      "answers": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
    {
      "question": "ReactJS is developed by _____?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Google Engineers",
        "Facebook Engineers"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
    {
      "question": "ReactJS is an MVC based framework?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "True",
        "False"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "10"
    },
    {
      "question": "Which of the following concepts is/are key to ReactJS?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Component-oriented design",
        "Event delegation model",
        "Both of the above",
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "30"
    },
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      "questionType": "photo",
      "answerSelectionType": "single",
      "answers": [
        "https://dummyimage.com/600x400/000/fff&text=A",
        "https://dummyimage.com/600x400/000/fff&text=B",
        "https://dummyimage.com/600x400/000/fff&text=C",
        "https://dummyimage.com/600x400/000/fff&text=D"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
    {
      "question": "What are the advantages of React JS?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "React can be used on client and as well as server side too",
        "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
        "React components have lifecycle events that fall into State/Property Updates",
        "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
      ],
      "correctAnswer": [1, 2, 4],
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "point": "20"
    },
  ]
} 
