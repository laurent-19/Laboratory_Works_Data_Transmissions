/****************************** SHANNON FANO CODING *********************************************************/
  class Node {
    constructor(symbol, frequency, code, top) {
      this.symbol = symbol;
      this.frequency = frequency;
      this.code = code;
      this.top = top;
    }
  }


// shannon fano encoding
function shannon_fano(lenght, height, nodes)
{
    var group_one = 0, group2 = 0, freq_diff = 0, freq_dif_2 = 0;
    var i, k, j;
    if ((lenght + 1) == height || lenght == height || lenght > height) {
        if (lenght == height || lenght > height)
            return;
        nodes[height].code[++(nodes[height].top)] = 0;
        nodes[lenght].code[++(nodes[lenght].top)] = 1;
        return;
    }
    else {
        for (i = lenght; i <= height - 1; i++)
            group_one = group_one + nodes[i].frequency;
        group2 = group2 + nodes[height].frequency;
        freq_diff = group_one - group2;
        if (freq_diff < 0)
            freq_diff = freq_diff * -1;
        j = 2;
        while (j != height - lenght + 1) {
            k = height - j;
            group_one = group2 = 0;
            for (i = lenght; i <= k; i++)
                group_one = group_one + nodes[i].frequency;
            for (i = height; i > k; i--)
                group2 = group2 + nodes[i].frequency;
            freq_dif_2 = group_one - group2;
            if (freq_dif_2 < 0)
                freq_dif_2 = freq_dif_2 * -1;
            if (freq_dif_2 >= freq_diff)
                break;
            freq_diff = freq_dif_2;
            j++;
        }
        k++;
        for (i = lenght; i <= k; i++)
            nodes[i].code[++(nodes[i].top)] = 1;
        for (i = k + 1; i <= height; i++)
            nodes[i].code[++(nodes[i].top)] = 0;
 
        // Invoke shannon function
        shannon_fano(lenght, k, nodes);
        shannon_fano(k + 1, height, nodes);
    }
}
 
// sort the symbols by frequency
function sortByFrequency(nodes)
{
  // sort nodes by character
  nodes.sort((a, b) => (a.symbol > b.symbol) ? -1 : 1);
  // sort nodes by frequency
  nodes.sort(function(a,b){return a.frequency - b.frequency;});
}
 
// display symbols frequency and encodings table
function display(n, p)
{
    var i, j;
    console.log("\n\n\n\tSymbol\tFrequency\tCode");
    for (i = n - 1; i >= 0; i--) {
        var code = '';
        for (j = 0; j <= p[i].top; j++){
           code += p[i].code[j];
        }
        console.log("\n\t\t" + p[i].symbol + "\t\t" + p[i].frequency + "\t\t" + code);
    }
}

function displayResult(){
    var n, i;
    var message = document.getElementById("message").value;
    var characters = getCharacters(message);
    var freq = getFrequency(message);
    var n = characters.length;
    var nodes = [];

    for (i = 0; i < n; i++){
      nodes[i] = new Node();
    }
        // Insert the symbol to node
        for (i = 0; i < n; i++){
          nodes[i].symbol = characters[i];
        }   
 
    // Input frequency of symbols
    var x =  new Array();
    for (i = 0; i < n; i++){
      x[i] = freq[characters[i]];
    }
    for (i = 0; i < n; i++) {
        console.log("\n The frequency of " + nodes[i].symbol + " : " + x[i] + "\n");
 
        // Insert the value to node
        nodes[i].frequency = x[i];
    }  

    // Sorting the symbols based on their frequency
    sortByFrequency(nodes);
 
    for (i = 0; i < n; i++){
      nodes[i].top = -1;
      nodes[i].code = new Array();
    }
      
    // shannon_code code
    shannon_fano(0, n - 1, nodes);
 
    // Display the codes
    display(n, nodes);
}

function getFrequency(string) {
    var freq = [];
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
return freq;
  };

  function getCharacters(string) {
    var freq = {};
    var chars = [];
    var index = 0;
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           chars[index] = character;
           index++;
           freq[character] = 1;
        }
    }
return chars;
  };

  /**************************************** END OF SHANNON FANO *********************************************************************/

// Sample of how the compression tree should look like.
// A0 is the father (the root of the tree)
// each level introduce a byte in the final code 
// each node could have maximum 2 children (L - left (introduce a "0") and 
// R - right (introduce a "1"))
// the node name should contain the name of previous visited nodes.
// ex.: A0LR - Level 2, code: 01

// binary tree "IT IS BETTER LATER THAN NEVER"
var treeData =
  {
    "name": "A0",
    "children": [
      {
        "name": "Level 1: A0R",
        "children": [
          { "name": "Level 2: A0RR",
              "children": [
                { "name": "Level 3: A0RRR",
                    "children": [
                      { "name": "Level 4: A0RRRR",
                          "children": [
                            { "name": "Level 5: A0RRRRR = V" },
                            { "name": "Level 5: A0RRRRL = S" }
                          ]
                      },
                      { "name": "Level 4: A0RRRL",
                          "children": [
                            { "name": "Level 5: A0RRRLR = L" },
                            { "name": "Level 5: A0RRRLL = H" }
                          ]
                      }
                    ]
                },
                { "name": "Level 3: A0RRL",
                    "children": [
                      { "name": "Level 4: A0RRLR",
                          "children": [
                            { "name": "Level 5: A0RRLRR = B" },
                            { "name": "Level 5: A0RRLRL = ." }
                          ]
                      },
                      { "name": "Level 4: A0RRLL = N" }
                    ]
                }
              ]
          },
          { "name": "Level 2: A0RL",
              "children": [
                { "name": "Level 3: A0RLR",
                    "children": [
                      { "name": "Level 4: A0RLRR = I" },
                      { "name": "Level 4: A0RLRL = A" }
                    ]
                },
                { "name": "Level 3: A0RLL = R" }
              ]
          }
        ]
      },
      { "name": "Level 1: A0L",
        "children": [
          { "name": "Level 2: A0LR",
              "children": [
                { "name": "Level 3: A0LRR = T" },
                { "name": "Level 3: A0LRL = E" }
              ]
         },
          { "name": "Level 2: A0LL = spatiu" }
        ]
	  }
    ]
  };

// Set the dimensions and margins of the diagram
var margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 3060 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

	
// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate("
          + margin.left + "," + margin.top + ")");

var i = 0,
    duration = 750,
    root;

// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
root = d3.hierarchy(treeData, function(d) { return d.children; });
root.x0 = height / 2;
root.y0 = 0;

// Collapse after the second level
root.children.forEach(collapse);

update(root);

// Collapse the node and all it's children
function collapse(d) {
  if(d.children) {
    d._children = d.children
    d._children.forEach(collapse)
    d.children = null
  }
}

function update(source) {

  // Assigns the x and y position for the nodes
  var treeData = treemap(root);

  // Compute the new tree layout.
  var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

  // Normalize for fixed-depth.
  nodes.forEach(function(d){ d.y = d.depth * 180});

  // ****************** Nodes section ***************************

  // Update the nodes...
  var node = svg.selectAll('g.node')
      .data(nodes, function(d) {return d.id || (d.id = ++i); });

  // Enter any new modes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function(d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on('click', click);

  // Add Circle for the nodes
  nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
      });

  // Add labels for the nodes
  nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function(d) {
          return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
      })
      .text(function(d) { return d.data.name; });

  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(duration)
    .attr("transform", function(d) { 
        return "translate(" + d.y + "," + d.x + ")";
     });

  // Update the node attributes and style
  nodeUpdate.select('circle.node')
    .attr('r', 10)
    .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
    })
    .attr('cursor', 'pointer');


  // Remove any exiting nodes
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
    .attr('r', 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll('path.link')
      .data(links, function(d) { return d.id; });

  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function(d){
        var o = {x: source.x0, y: source.y0}
        return diagonal(o, o)
      });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
      .duration(duration)
      .attr('d', function(d){ return diagonal(d, d.parent) });

  // Remove any exiting links
  var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function(d) {
        var o = {x: source.x, y: source.y}
        return diagonal(o, o)
      })
      .remove();

  // Store the old positions for transition.
  nodes.forEach(function(d){
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {

    path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

    return path
  }

  // Toggle children on click.
  function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
    update(d);
  }
}
