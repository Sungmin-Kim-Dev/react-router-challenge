interface Book {
  title: string;
  chapters: string[];
  characters: string[];
}

interface BooksData {
  [authorName: string]: Book[];
}

export const booksData: BooksData = {
  "J.K. Rowling": [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      chapters: [
        "The Boy Who Lived",
        "The Vanishing Glass",
        "The Letters from No One",
        "Diagon Alley",
        "The Sorting Hat",
        "The Mirror of Erised"
      ],
      characters: [
        "Harry Potter", 
        "Hermione Granger", 
        "Ron Weasley", 
        "Albus Dumbledore", 
        "Severus Snape", 
        "Draco Malfoy"
      ]
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      chapters: [
        "The Worst Birthday",
        "Dobby's Warning",
        "The Burrow",
        "The Whomping Willow",
        "The Polyjuice Potion",
        "The Heir of Slytherin"
      ],
      characters: [
        "Ginny Weasley", 
        "Tom Riddle", 
        "Gilderoy Lockhart", 
        "Moaning Myrtle", 
        "Dobby", 
        "Fawkes"
      ]
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      chapters: [
        "Owl Post",
        "Aunt Marge's Big Mistake",
        "The Knight Bus",
        "The Dementor",
        "The Marauder's Map",
        "The Patronus"
      ],
      characters: [
        "Sirius Black", 
        "Remus Lupin", 
        "Peter Pettigrew", 
        "Buckbeak", 
        "Cornelius Fudge", 
        "Professor Trelawney"
      ]
    }
  ],
  "J.R.R. Tolkien": [
    {
      title: "The Hobbit",
      chapters: [
        "An Unexpected Party",
        "Roast Mutton",
        "A Short Rest",
        "Riddles in the Dark",
        "Out of the Frying-Pan into the Fire",
        "Barrels Out of Bond"
      ],
      characters: [
        "Bilbo Baggins", 
        "Gandalf", 
        "Thorin Oakenshield", 
        "Smaug", 
        "Gollum", 
        "Bard the Bowman"
      ]
    },
    {
      title: "The Fellowship of the Ring",
      chapters: [
        "A Long-expected Party",
        "The Shadow of the Past",
        "Three is Company",
        "The Council of Elrond",
        "The Bridge of Khazad-dûm",
        "The Breaking of the Fellowship"
      ],
      characters: [
        "Frodo Baggins", 
        "Samwise Gamgee", 
        "Aragorn", 
        "Legolas", 
        "Boromir", 
        "Gimli"
      ]
    },
    {
      title: "The Two Towers",
      chapters: [
        "The Departure of Boromir",
        "The Riders of Rohan",
        "The Uruk-Hai",
        "Treebeard",
        "Helm's Deep",
        "The Voice of Saruman"
      ],
      characters: [
        "Éowyn", 
        "Faramir", 
        "Merry Brandybuck", 
        "Pippin Took", 
        "Saruman", 
        "Gríma Wormtongue"
      ]
    }
  ]
};
