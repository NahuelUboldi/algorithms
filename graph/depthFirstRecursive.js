const depthFirstRecursivePrint = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstRecursivePrint(graph, neighbor);
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

depthFirstRecursivePrint(graph, 'a'); // abdfce
