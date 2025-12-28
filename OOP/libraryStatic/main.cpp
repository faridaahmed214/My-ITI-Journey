#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;


class Author {
public:
    string name;
    Author(string n) : name(n) {}
    ~Author() {}
};


class Book {
public:
    string title;
    Author author;
    bool isAvailable;

    Book(string t, string authorName)
        : title(t),
          author(authorName),
          isAvailable(true){}

    void print() const {
        cout << "Book: " << title
             << " | Author: " << author.name
             << " | Available: " << (isAvailable ? "Yes" : "No")
             << endl;
    }
};


class Member {
public:
    string name;
    vector<Book*> borrowedBooks;

    Member(string n) : name(n) {}

    void borrow(Book* book) { borrowedBooks.push_back(book); }

    void returnBook(Book* book) {
        auto it = find(borrowedBooks.begin(), borrowedBooks.end(), book);
        if (it != borrowedBooks.end()) borrowedBooks.erase(it);
    }

    void printBorrowed() const {
        cout << "\n--- " << name << "'s Borrowed Books ---" << endl;
        if (borrowedBooks.empty()) cout << "No books borrowed." << endl;
        else
            for (auto* book : borrowedBooks) cout << "- " << book->title << endl;
    }
};


class Library {
public:
    string name;
    vector<Book*> books;
    vector<Member*> members;

    Library(string n) : name(n) {}
    ~Library() { cout << "Library '" << name << "' destroyed." << endl; }

    void addBook(Book* book) { books.push_back(book); }
    void registerMember(Member* member) { members.push_back(member); }

    Member* findMember(const string& memberName) {
        for (auto* member : members)
            if (member->name == memberName) return member;
        return nullptr;
    }

    Book* findBook(const string& bookTitle) {
        for (auto* book : books)
            if (book->title == bookTitle) return book;
        return nullptr;
    }

    void borrowBook(const string& memberName, const string& bookTitle) {
        cout << "\n[Action] " << memberName << " tries to borrow '" << bookTitle << "'..." << endl;

        Member* member = findMember(memberName);
        Book* book = findBook(bookTitle);
        if (!member || !book) { cout << "Error: Not found." << endl; return; }
        if (!book->isAvailable) { cout << "Error: Not available." << endl; return; }

        book->isAvailable = false;
        member->borrow(book);
        cout << "Success: " << memberName << " borrowed '" << bookTitle << "'." << endl;
    }

    void returnBook(const string& memberName, const string& bookTitle) {
        cout << "\n[Action] " << memberName << " tries to return '" << bookTitle << "'..." << endl;

        Member* member = findMember(memberName);
        Book* book = findBook(bookTitle);
        if (!member || !book) { cout << "Error: Not found." << endl; return; }

        book->isAvailable = true;
        member->returnBook(book);
        cout << "Success: " << memberName << " returned '" << bookTitle << "'." << endl;
    }

    void printAllBooks() const {
        cout << "\n--- Library: " << name << " ---" << endl;
        for (auto* book : books) book->print();
        cout << "-----------------------------" << endl;
    }
};


int main() {
    Book b1("The C++ Language", "Bjarne Stroustrup");
    Book b2("Effective C++", "Scott Meyers");
    Book b3("Clean Code", "Robert Martin");

    Member m1("Ahmed");
    Member m2("Salma");

    {
        Library myLibrary("City Library");

        myLibrary.addBook(&b1);
        myLibrary.addBook(&b2);
        myLibrary.addBook(&b3);
        myLibrary.registerMember(&m1);
        myLibrary.registerMember(&m2);

        myLibrary.printAllBooks();

        myLibrary.borrowBook("Ahmed", "Effective C++");
        myLibrary.borrowBook("Salma", "Effective C++");

        myLibrary.printAllBooks();
        m1.printBorrowed();
    }

    cout << "\n--- Library is gone ---" << endl;

    cout << "Books still exist:" << endl;
    b1.print();
    m1.printBorrowed();

    return 0;
}
