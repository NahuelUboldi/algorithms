// write a function that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

const adjacencyList = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const explore = (graph, src, visited) => {
  if (visited.has(String(src))) return false;
  visited.add(String(src));

  for (let neighbor of graph[src]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }

  return count;
};

console.log(connectedComponentsCount(adjacencyList));
