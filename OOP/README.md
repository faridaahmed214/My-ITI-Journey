<div align="center">

# Object-Oriented Programming (C++)

![C++](https://img.shields.io/badge/C++17-Standard-ff9ac2?style=for-the-badge&logoColor=white)
![OOP](https://img.shields.io/badge/Concept-OOP-ffb7b2?style=for-the-badge&logoColor=white)
![Build](https://img.shields.io/badge/Build-G%2B%2B%20%2F%20CBP-c7ceea?style=for-the-badge&logoColor=white)
![Status](https://img.shields.io/badge/Status-Educational-e2f0cb?style=for-the-badge&logoColor=555)

<br>

**A collection of self-contained C++ projects demonstrating core OOP patterns.**
Focusing on classes, inheritance, memory management, and data structures.

</div>

---

### Repository Overview

> **Purpose:** Provide practical, compilable examples to master C++ Object-Oriented Programming.
> **Scope:** From basic control flow and pointers to complex polymorphism, templates, and RAII.

---

### Project Catalogue

| Category              | Projects Included                                                                                                                                                                        | Key Concepts                                           |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| **Basics & Logic**    | `BasicIOPractice` • `EvenNumberChecker` • `Fibonacci` • `ToBinary` • `MenuCalculator` • `DiagonalPattern` • `InteractiveMenuNavigator` • `MagicBoxAnimation` • `ConsoleTxtEditorDynamic` | Loops, I/O, Control Flow, Algorithms                   |
| **Pointers & Memory** | `PointerAndSwapDemo` • `PointerToPointer` • `SwapByRef` • `ArraySlicing` • `Slicing`                                                                                                     | Dynamic Allocation, References, Memory Manipulation    |
| **Classes & Objects** | `BankAccountClass` • `complexNum` • `GeoShapeClass` • `Library` • `libraryStatic` • `Student'sCoursesStruct` • `EmployeeStructVsClass`                                                   | Encapsulation, Constructors, Structs vs Classes        |
| **OOP Mechanics**     | `Inheritance` • `BankAccOverloading` • `FunctionOverloading` • `ComplexWzOpOverload` • `EmployeeMngr` • `EmployeeEntrySys`                                                               | Inheritance, Polymorphism, Operator Overloading        |
| **Advanced / DS**     | `EmployeeMngrDynamic` • `EmpMngrDynamic` • `stack` • `StackFullEx` • `StackFullExGeneric`                                                                                                | Virtual Destructors, Templates, Custom Data Structures |

---

### Technical Concepts

This repository covers the following C++ programming pillars:

- **Core OOP:** Classes, Objects, Encapsulation (`private`/`protected`/`public`), and Abstraction.
- **Relationships:** Single and Multi-level Inheritance, Base/Derived classes.
- **Polymorphism:** Virtual methods, vtables, and abstract classes.
- **Memory Management:** Pointers, dynamic allocation (`new`/`delete`), and introduction to Smart Pointers.
- **Advanced Features:** Operator Overloading, Templates (Generics), and Exception Handling.
- **Data Structures:** Implementation of Stacks from scratch.

---

### How to Run

You can compile these projects using any standard C++ compiler or the Code::Blocks IDE.

#### Option A: Using Code::Blocks

1.  Navigate to the project folder.
2.  Open the `.cbp` file.
3.  Click **Build and Run**.

#### Option B: Manual Compilation (CLI)

If a project does not have a `.cbp` file, or you prefer the terminal:

```bash
# Example for a multi-file project
g++ -std=c++17 -Iinclude src/*.cpp main.cpp -o app
./app

# Example for a single-file project
g++ main.cpp -o app
./app

Directory Layout
ProjectName/
├── include/       [Header files .h .hpp]
├── src/           [Source files .cpp]
├── main.cpp       [Entry Point]
└── Project.cbp    [Code::Blocks Project File]

<div align="center">


<sub>Mastering C++ through practice</sub>


</div>
```
