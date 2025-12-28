#ifndef BST_H
#define BST_H

#include "Node.h"
#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

class BST {
private:
    Node* root;

    // Insert Helpers
    void insertRefHelper(Node*& ptr, Employee data);
    
    // Delete Helpers
    void searchAndDestroy(Node*& ptr, int id);
    void processDelete(Node*& ptr);
    Node* getMin(Node* ptr);
    void swapData(Node* a, Node* b);

    // Display Helpers
    void inOrderHelper(Node* ptr);
    
    // Memory Management Helpers
    void clearTree(Node* ptr);
    Node* copyTreeHelper(Node* ptr); 

    // Balance Helpers
    int getHeightHelper(Node* ptr);
    bool isBalancedHelper(Node* ptr);
    void storeBSTNodes(Node* ptr, vector<Node*>& nodes);
    Node* buildBalancedTree(vector<Node*>& nodes, int start, int end);

public:
    BST();
    BST(const BST& other); 
    ~BST();

    // Insertion
    void insertByRef(Employee data);
    void insertTwoPointers(Employee data);

    // Operations
    void deleteNode(int id);
    Node* searchBST(int id);
    void traverse();


    // Balance
    bool isBalanced();
    void rebalance();
};

#endif