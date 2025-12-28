#include <iostream>
#include <vector>
#include <list>
#include <string>
#include <functional> // For std::hash
#include <cmath>      // For sqrt

using namespace std;

// ==========================================
// 1. MapEntry Class
// ==========================================
template<class KeyType, class ValueType>
class MapEntry {
public:
    KeyType key;
    ValueType value;

    MapEntry() {}
    MapEntry(KeyType k, ValueType v) : key(k), value(v) {}

    bool operator==(const MapEntry& other) const {
        return this->key == other.key;
    }

    bool operator!=(const MapEntry& other) const {
        return !(*this == other);
    }
};

// ==========================================
// 2. HashTable Class
// ==========================================
template<class KeyType, class ValueType>
class HashTable {
private:
    vector<list<MapEntry<KeyType, ValueType>>> theLists;
    int currentSize;

    // Helper: Prime Check
    bool isPrime(int n) const {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }

    // Helper: Next Prime
    int nextPrime(int n) const {
        if (n % 2 == 0) n++;
        while (!isPrime(n)) {
            n += 2;
        }
        return n;
    }

    // Helper: Hash Function
    int myHashFunction(const KeyType& key) const {
        hash<KeyType> hashVal;
        return hashVal(key) % theLists.size();
    }

    // Helper: Rehash
    void rehash() {
        auto oldLists = theLists;
        theLists.resize(nextPrime(2 * theLists.size()));

        for (auto& lst : theLists) lst.clear();
        currentSize = 0;

        for (const auto& bucket : oldLists) {
            for (const auto& entry : bucket) {
                insert(entry.key, entry.value);
            }
        }
    }

public:
    explicit HashTable(int size = 101) {
        theLists.resize(nextPrime(size));
        currentSize = 0;
    }

    bool insert(const KeyType& key, const ValueType& value) {
        int index = myHashFunction(key);
        auto& bucket = theLists[index];

        for (auto& entry : bucket) {
            if (entry.key == key) {
                entry.value = value;
                return true;
            }
        }

        bucket.push_back(MapEntry<KeyType, ValueType>(key, value));

        if (++currentSize > theLists.size() * 0.7) {
            rehash();
        }
        return true;
    }

    bool remove(const KeyType& key) {
        int index = myHashFunction(key);
        auto& bucket = theLists[index];

        for (auto it = bucket.begin(); it != bucket.end(); ++it) {
            if (it->key == key) {
                bucket.erase(it);
                currentSize--;
                return true;
            }
        }
        return false;
    }

    bool contains(const KeyType& key) const {
        int index = myHashFunction(key);
        const auto& bucket = theLists[index];
        for (const auto& entry : bucket) {
            if (entry.key == key) return true;
        }
        return false;
    }

    // Operator []
    ValueType& operator[](const KeyType& key) {
        int index = myHashFunction(key);
        auto& bucket = theLists[index];

        for (auto& entry : bucket) {
            if (entry.key == key) return entry.value;
        }

        insert(key, ValueType());
        return operator[](key);
    }

    void printStats() {
        int emptyBuckets = 0;
        int maxChain = 0;
        for (const auto& bucket : theLists) {
            if (bucket.empty()) emptyBuckets++;
            if ((int)bucket.size() > maxChain) maxChain = bucket.size();
        }
        cout << "Table Size: " << theLists.size() << " | Items: " << currentSize
             << " | Empty Buckets: " << emptyBuckets << " | Max Chain: " << maxChain << endl;
    }

    void printMap() {
        for (int i = 0; i < theLists.size(); i++) {
            if (!theLists[i].empty()) {
                cout << "Bucket " << i << ": ";
                for (const auto& entry : theLists[i]) {
                    cout << "[" << entry.key << ":" << entry.value << "] -> ";
                }
                cout << "NULL" << endl;
            }
        }
    }
};

// ==========================================
// 3. Main Function
// ==========================================
int main() {
    cout << "--- Hash Map Test ---" << endl;

    // Start small to see resizing
    HashTable<int, string> myMap(5);

    myMap.insert(101, "Ahmed");
    myMap[102] = "Mona"; // Using operator []
    myMap[105] = "Ali";

    cout << ">> Initial State:" << endl;
    myMap.printMap();
    myMap.printStats();

    cout << "\n>> Updating Ahmed..." << endl;
    myMap[101] = "Ahmed Mohamed";
    cout << "New Value for 101: " << myMap[101] << endl;

    cout << "\n>> Inserting more to trigger Rehash..." << endl;
    myMap.insert(201, "Sara");
    myMap.insert(202, "Hoda");
    // This should trigger rehash (Size 5 -> 11)

    myMap.printStats();

    return 0;
}
