// Write a function that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB

// TIPS
// undirected graph -> could lead to cycle behaviour
// edge list -> must be converted to adjaceny list

// edge list -> is better to convert it into an adjacency list
const edgeList = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

// function to convert an edge list into an adjacency list
const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

// recursive depth first solution
const undirectedPathDFRS = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;

  // avoid infinite loop
  if (visited.has(src)) return false;
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) return true;
  }

  return false;
};

// breadth first solution
const undirectedPathBFS = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  const queue = [nodeA];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === nodeB) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

console.log(buildGraph(edgeList));
console.log('DFRS: ', undirectedPathDFRS(edgeList, 'i', 'j'));
//console.log('BFS: ', undirectedPathBFS(edgeList, 'i', 'o'));
