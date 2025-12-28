#include <iostream>
#include <queue>
#include <vector>
#include <climits>
#include <functional>
#include <string>

using namespace std;

const int NULL_EDGE = 0;
const int INF = INT_MAX;

template<class VertexType>
class Graph
{
private:
    int numVertices;
    VertexType vertices[50];
    int edges[50][50];
    bool marks[50];

public:
    explicit Graph()
    {
        numVertices = 0;
        MakeEmpty();
    }

    void MakeEmpty()
    {
        numVertices = 0;
        for (int i = 0; i < 50; i++)
        {
            marks[i] = false;
            for (int j = 0; j < 50; j++)
            {
                edges[i][j] = NULL_EDGE;
            }
        }
    }

    bool IsEmpty()
    {
        return numVertices == 0;
    }

    bool IsFull()
    {
        return numVertices == 50;
    }

    void AddVertex(const VertexType& vertex)
    {
        if (IsFull())
        {
            return;
        }

        vertices[numVertices] = vertex;

        for (int i = 0; i < 50; i++)
        {
            edges[numVertices][i] = NULL_EDGE;
            edges[i][numVertices] = NULL_EDGE;
        }
        numVertices++;
    }

    void AddEdge(VertexType fromVertex, VertexType toVertex, int weight)
    {
        int row = GetIndex(fromVertex);
        int col = GetIndex(toVertex);

        if (row != -1 && col != -1)
        {
            edges[row][col] = weight;
        }
    }

    int GetIndex(const VertexType& vertex)
    {
        for (int i = 0; i < numVertices; i++)
        {
            if (vertices[i] == vertex)
            {
                return i;
            }
        }
        return -1;
    }

    int GetPathWeight(VertexType fromVertex, VertexType toVertex)
    {
        int row = GetIndex(fromVertex);
        int col = GetIndex(toVertex);

        if (row != -1 && col != -1)
        {
            return edges[row][col];
        }
        return NULL_EDGE;
    }

    void GetAdjVertices(VertexType vertex, queue<VertexType>& vertexQ)
    {
        int index = GetIndex(vertex);
        if (index == -1)
        {
            return;
        }

        for (int i = 0; i < numVertices; i++)
        {
            if (edges[index][i] != NULL_EDGE)
            {
                vertexQ.push(vertices[i]);
            }
        }
    }

    void ClearMarks()
    {
        for (int i = 0; i < numVertices; i++)
        {
            marks[i] = false;
        }
    }

    void MarkVertex(VertexType vertex)
    {
        int index = GetIndex(vertex);
        if (index != -1)
        {
            marks[index] = true;
        }
    }

    bool IsMarked(VertexType vertex)
    {
        int index = GetIndex(vertex);
        if (index != -1)
        {
            return marks[index];
        }
        return false;
    }

    void BreadthFirstSearch(const VertexType& startVertex, const VertexType& endVertex)
    {
        ClearMarks();
        queue<VertexType> q;
        queue<VertexType> adjQ;

        q.push(startVertex);
        MarkVertex(startVertex);

        cout << "BFS Path: ";
        bool found = false;

        while (!q.empty())
        {
            VertexType curr = q.front();
            q.pop();

            cout << curr << " -> ";

            if (curr == endVertex)
            {
                cout << "Found!" << endl;
                found = true;
                break;
            }

            GetAdjVertices(curr, adjQ);

            while (!adjQ.empty())
            {
                VertexType neighbor = adjQ.front();
                adjQ.pop();

                if (!IsMarked(neighbor))
                {
                    MarkVertex(neighbor);
                    q.push(neighbor);
                }
            }
        }

        if (!found)
        {
            cout << "Target not reached." << endl;
        }
    }

    void Dijkstra(const VertexType& startVertex)
    {
        int startIndex = GetIndex(startVertex);
        if (startIndex == -1)
        {
            return;
        }

        int dist[50];
        int parent[50];

        for (int i = 0; i < numVertices; i++)
        {
            dist[i] = INF;
            parent[i] = -1;
        }

        dist[startIndex] = 0;

        priority_queue< pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>> > pq;
        pq.push({0, startIndex});

        while (!pq.empty())
        {
            int u = pq.top().second;
            int d = pq.top().first;
            pq.pop();

            if (d > dist[u])
            {
                continue;
            }

            for (int v = 0; v < numVertices; v++)
            {
                if (edges[u][v] != NULL_EDGE)
                {
                    int weight = edges[u][v];

                    if (dist[u] + weight < dist[v])
                    {
                        dist[v] = dist[u] + weight;
                        parent[v] = u;
                        pq.push({dist[v], v});
                    }
                }
            }
        }

        cout << "\n--- Dijkstra Shortest Paths from " << startVertex << " ---\n";
        for (int i = 0; i < numVertices; i++)
        {
            if (dist[i] == INF)
            {
                cout << "To " << vertices[i] << ": Unreachable" << endl;
            }
            else
            {
                cout << "To " << vertices[i] << ": Cost = " << dist[i] << " | Path: ";
                printPath(i, parent);
                cout << endl;
            }
        }
    }

    void printPath(int currentIdx, int parent[])
    {
        if (currentIdx == -1)
        {
            return;
        }
        printPath(parent[currentIdx], parent);
        cout << vertices[currentIdx] << " ";
    }
};

int main()
{
    Graph<string> myCity;

    myCity.AddVertex("A");
    myCity.AddVertex("B");
    myCity.AddVertex("C");
    myCity.AddVertex("D");
    myCity.AddVertex("E");

    myCity.AddEdge("A", "B", 4);
    myCity.AddEdge("A", "C", 2);

    myCity.AddEdge("B", "C", 3);
    myCity.AddEdge("B", "D", 2);
    myCity.AddEdge("B", "E", 3);

    myCity.AddEdge("C", "B", 1);
    myCity.AddEdge("C", "D", 4);
    myCity.AddEdge("C", "E", 5);

    myCity.AddEdge("E", "D", 1);

    cout << "Testing BFS from A to E:" << endl;
    myCity.BreadthFirstSearch("A", "E");

    cout << "-------------------------" << endl;

    cout << "Testing Dijkstra from A:" << endl;
    myCity.Dijkstra("A");

    return 0;
}
