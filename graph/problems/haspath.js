// is there a path between the source node and the destination node
// write a function that takes in an object representing de adjacency list of a directed acyclic graph and two nodes: src, dst. The function should return a boolean indicating whether or not there existe a directed path between the source and destination nodes.

const hasPathDepthFirstSolution = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPathDepthFirstSolution(graph, neighbor, dst)) return true;
  }

  return false;
};

const hasPathBreadthFirstSolution = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

// adjacency list
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

console.log({ depthFirst: hasPathDepthFirstSolution(graph, 'f', 'k') });
console.log({ breadthFirst: hasPathBreadthFirstSolution(graph, 'f', 'k') });
