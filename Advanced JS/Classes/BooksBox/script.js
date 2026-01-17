function Book(
  title,
  numofChapters,
  author,
  numofPages,
  publisher,
  numofCopies
) {
  this.title = title;
  this.numofChapters = numofChapters;
  this.author = author;
  this.numofPages = numofPages;
  this.publisher = publisher;
  this.numofCopies = numofCopies;
}

function Box(height, width, length, material) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.numOfBooks = 0;
  this.content = [];

  this.addBook = function (bookObj) {
    let foundIndex = -1;

    for (let i = 0; i < this.content.length; i++) {
      if (this.content[i].title === bookObj.title) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex !== -1) {
      this.numOfBooks += bookObj.numofCopies;
      this.content[foundIndex].numofCopies += bookObj.numofCopies;
      console.log(
        "Updated '" +
          bookObj.title +
          "' Copies to: " +
          this.content[foundIndex].numofCopies
      );
    } else {
      this.numOfBooks += bookObj.numofCopies;
      this.content.push(bookObj);
      console.log("New Book: " + bookObj.title + " is added to Box");
    }
  };

  this.deleteBook = function (title) {
    let foundIndex = -1;

    for (let i = 0; i < this.content.length; i++) {
      if (this.content[i].title === title) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex !== -1) {
      let currentBook = this.content[foundIndex];
      this.numOfBooks -= 1;
      if (currentBook.numofCopies > 1) {
        currentBook.numofCopies -= 1;
        console.log(
          "Removed 1 copy of '" +
            title +
            "'. Remaining: " +
            currentBook.numofCopies
        );
      } else {
        this.content.splice(foundIndex, 1);
        console.log(
          "Last copy of '" + title + "' removed. Book deleted from Box."
        );
      }
    } else {
      console.log("Error: Book '" + title + "' not found in Box.");
    }
  };

  this.displayContent = function () {
    for (let i = 0; i < this.content.length; i++) {
      console.log(
        this.content[i].title + " : " + this.content[i].numofCopies + " Copies"
      );
    }
  };
}

let myBox = new Box(50, 50, 50, "Wood");

let b1 = new Book("JavaScript", 10, "Author A", 200, "Pub A", 2);
myBox.addBook(b1);

let b2 = new Book("JavaScript", 10, "Author A", 200, "Pub A", 3);
myBox.addBook(b2);

let b3 = new Book("CSS", 5, "Author B", 150, "Pub B", 1);
myBox.addBook(b3);

console.log("Total Books (Expected 6): " + myBox.numOfBooks);
myBox.displayContent();

myBox.deleteBook("JavaScript");
console.log("Total after removing 1 JS (Expected 5): " + myBox.numOfBooks);

myBox.deleteBook("CSS");
console.log("Total after removing CSS (Expected 4): " + myBox.numOfBooks);
myBox.displayContent();

myBox.deleteBook("React");
console.log("Total (Should stay 4): " + myBox.numOfBooks);
