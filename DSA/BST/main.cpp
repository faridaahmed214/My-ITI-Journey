#include <iostream>
#include "BST.h"

using namespace std;

// دالة عشان تخلي شكل الخرج منظم
void printHeader(string title) {
    cout << "\n========================================\n";
    cout << "   " << title << "\n";
    cout << "========================================\n";
}

int main() {

    printHeader("1. Testing Recursive Insert & Auto-Balance");
    BST tree;

    cout << "Inserting sorted data: 10, 20, 30, 40, 50, 60, 70...\n";
    
    tree.insertByRef({10, "Ahmed", 1000});
    tree.insertByRef({20, "Mona", 2000});
    tree.insertByRef({30, "Ali", 3000});
    tree.insertByRef({40, "Sara", 4000});
    tree.insertByRef({50, "Omar", 5000});
    tree.insertByRef({60, "Hoda", 6000});
    tree.insertByRef({70, "Ziad", 7000});

    cout << "\nTree Content (In-Order):\n";
    tree.traverse(); // المفروض يطلعوا مترتبين

    cout << "\nChecking Balance Status...\n";
    if (tree.isBalanced()) {
        cout << "[SUCCESS] The tree is Balanced! (Auto-balance worked)\n";
    } else {
        cout << "[FAIL] The tree is Unbalanced!\n";
    }

    // ==========================================
    // 2. Testing Search
    // ==========================================
    printHeader("2. Testing Search");
    
    int searchID = 40;
    Node* result = tree.searchBST(searchID);
    if (result != nullptr) {
        cout << "Found ID " << searchID << ": " << result->data.name << endl;
    } else {
        cout << "ID " << searchID << " Not Found!\n";
    }

    searchID = 99;
    result = tree.searchBST(searchID);
    if (result != nullptr) {
        cout << "Found ID " << searchID << ": " << result->data.name << endl;
    } else {
        cout << "ID " << searchID << " Not Found (Correct behavior).\n";
    }

    // ==========================================
    // 3. Testing Iterative Insertion (Two Pointers)
    // ==========================================
    printHeader("3. Testing Iterative Insertion (Two Pointers)");
    BST tree2;
    
    cout << "Inserting mixed data using Two Pointers method...\n";
    tree2.insertTwoPointers({50, "Manager", 5000});
    tree2.insertTwoPointers({30, "Dev", 3000});
    tree2.insertTwoPointers({70, "HR", 4000});
    
    cout << "Tree 2 Content:\n";
    tree2.traverse();

    // ==========================================
    // 4. Testing Deletion (All Cases)
    // ==========================================
    printHeader("4. Testing Deletion Logic");

    // الشجرة الأولى مليانة (10 -> 70)
    
    // Case A: Delete Leaf (ورقة)
    cout << "Deleting ID 70 (Leaf Node)...\n";
    tree.deleteNode(70);
    
    // Case B: Delete Node with One Child (أو جزء من فرع)
    cout << "Deleting ID 60...\n";
    tree.deleteNode(60);

    // Case C: Delete Node with Two Children (Root or Middle)
    // في حالتنا الـ 40 غالباً هي الـ Root بعد التوازن
    cout << "Deleting ID 40 (Has 2 Children)...\n";
    tree.deleteNode(40);

    cout << "\nTree after deletions:\n";
    tree.traverse();

    cout << "\nChecking Balance after deletions...\n";
    if (tree.isBalanced()) {
        cout << "[SUCCESS] Still Balanced!\n";
    }

    // ==========================================
    // 5. Testing Copy Constructor (Deep Copy)
    // ==========================================
    printHeader("5. Testing Copy Constructor");

    BST originalTree;
    originalTree.insertByRef({100, "Original", 100});
    originalTree.insertByRef({200, "Original", 200});

    cout << "Creating a copy of the tree...\n";
    BST copiedTree = originalTree; // هنا بيشتغل الـ Copy Constructor

    cout << "Modifying the Copy (Adding ID 999)...\n";
    copiedTree.insertByRef({999, "CopyOnly", 999});

    cout << "\nOriginal Tree (Should NOT have 999):\n";
    originalTree.traverse();

    cout << "\nCopied Tree (Should have 999):\n";
    copiedTree.traverse();

    printHeader("All Tests Completed!");

    return 0;
}