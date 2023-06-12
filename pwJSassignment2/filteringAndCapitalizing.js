console.log("Jai sri Krishna");

var books = [ 
    {
        bookName: 'Making India Awesome',
        author: 'Chetan Bhagat',
        publicationYear: 2015
    },
    {
        bookName: 'A House for Mr. Biswas',
        author: 'V.S. Naipaul',
        publicationYear: 1961
    },
    {
        bookName: 'Anandmath',
        author: 'Bankim Chandra Chatterjee',
        publicationYear: 1882
    },
    {
        bookName: 'Border and Boundaries; women in India’s Partition ',
        author: 'Ritu Menon & Kamla Bhasin',
        publicationYear: 1998
    },
    {
        bookName: 'Book Lovers',
        author: 'Emily Henry',
        publicationYear: 2022
    },
];

let filteR = books.filter(e=>{
    return e.publicationYear <= 2010;
    
})

console.log(filteR);


// node pwJSassignment2/filteringAndCapitalizing.js