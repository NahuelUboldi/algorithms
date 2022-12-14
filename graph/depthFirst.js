// needs an stack -> array + push and pop methods

// Time and space complexity
// n -> number of nodes
// e -> number of edges
// Time: O(e)
// Space: O(n)

const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

// adjacency list representing a graph
const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

depthFirstPrint(graph, 'a'); // acebdf
