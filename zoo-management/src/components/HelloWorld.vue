<template>
  <svg ref="diagram"></svg>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as d3 from 'd3';

export default {
  name: 'Diagram',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const diagramRef = ref(null);

    onMounted(() => {
      // Create the D3 diagram
      const svg = d3.select(diagramRef.value);
      // Set the width and height of the SVG element
      const width = 500;
      const height = 500;
      svg.attr('width', width).attr('height', height);

      // Add the diagram elements
      const nodes = svg.selectAll('circle')
        .data(props.data)
        .enter()
        .append('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.size)
        .style('fill', d => d.color);

      const links = svg.selectAll('line')
        .data(props.data.links)
        .enter()
        .append('line')
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
        .style('stroke', 'black')
        .style('stroke-width', 1);
    });

    return {
      diagramRef
    };
  }
};
</script>

<style scoped>
svg {
  background-color: white;
}
</style>
