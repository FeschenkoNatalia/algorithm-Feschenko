const visited = [];

module.exports = function dfs(start, graph, actions) {
    if (visited.includes(start)) return;
    visited.push(start);
    const neighbours = graph.adj(start);
    // [1,2]
        actions(start, neighbours, graph);
        neighbours.forEach(v => dfs(v, graph, actions));
    };
