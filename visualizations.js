// ===================================
// DSA Visualizations with D3.js
// ===================================

// ===================================
// LINEAR SEARCH VISUALIZATION
// ===================================

class LinearSearchViz {
  constructor(containerId, arrayData = null) {
    this.containerId = containerId;
    this.array = arrayData || [4, 9, 15, 23, 42, 7, 31, 18, 5, 27];
    this.target = 23;
    this.currentIndex = -1;
    this.found = false;
    this.isRunning = false;
    this.comparisons = 0;
    this.speed = 800;
    
    this.init();
  }

  init() {
    this.render();
    this.setupControls();
  }

  render() {
    const container = document.getElementById(this.containerId);
    
    // Clear previous content
    d3.select(`#${this.containerId} svg`).remove();
    d3.select(`#${this.containerId}-controls`).remove();
    
    const width = Math.min(container.clientWidth - 20, 800);
    const height = 120;
    const elementWidth = width / this.array.length - 5;

    const svg = d3.select(`#${this.containerId}`)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('style', 'border: 1px solid var(--border); border-radius: 8px; background: rgba(0,0,0,0.02); margin: 1rem 0;');

    // Create array elements
    const elements = svg.selectAll('g')
      .data(this.array)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${i * (elementWidth + 5) + 10}, 30)`);

    // Rectangles for each element
    elements.append('rect')
      .attr('width', elementWidth)
      .attr('height', 60)
      .attr('fill', (d, i) => {
        if (i === this.currentIndex && !this.found) return '#ef4444';
        if (this.found && d === this.target) return '#22c55e';
        if (i < this.currentIndex && !this.found) return '#94a3b8';
        return '#3b82f6';
      })
      .attr('stroke', 'var(--border)')
      .attr('stroke-width', 2)
      .attr('rx', 4)
      .attr('class', d => `array-element-${d}`);

    // Text labels
    elements.append('text')
      .attr('x', elementWidth / 2)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .attr('font-weight', 600)
      .attr('font-size', '14px')
      .attr('fill', 'white')
      .text(d => d);

    // Index labels
    elements.append('text')
      .attr('x', elementWidth / 2)
      .attr('y', 105)
      .attr('text-anchor', 'middle')
      .attr('font-size', '11px')
      .attr('fill', 'var(--text-secondary)')
      .text((d, i) => `[${i}]`);

    // Status text
    const statusY = height - 15;
    svg.append('text')
      .attr('x', 10)
      .attr('y', statusY)
      .attr('font-size', '12px')
      .attr('fill', 'var(--text-secondary)')
      .attr('id', `${this.containerId}-status`)
      .text(`Target: ${this.target} | Comparisons: ${this.comparisons} | Status: Ready`);
  }

  setupControls() {
    const container = document.getElementById(this.containerId).parentElement;
    
    const controlsDiv = document.createElement('div');
    controlsDiv.id = `${this.containerId}-controls`;
    controlsDiv.style.cssText = 'margin: 1rem 0; display: flex; gap: 0.5rem; flex-wrap: wrap;';
    
    const playBtn = document.createElement('button');
    playBtn.textContent = this.isRunning ? 'Pause' : 'Play';
    playBtn.style.cssText = 'padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;';
    playBtn.onclick = () => this.togglePlay();

    const stepBtn = document.createElement('button');
    stepBtn.textContent = 'Step';
    stepBtn.style.cssText = 'padding: 0.5rem 1rem; background: #8b5cf6; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;';
    stepBtn.onclick = () => this.step();

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.style.cssText = 'padding: 0.5rem 1rem; background: #6b7280; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;';
    resetBtn.onclick = () => this.reset();

    const speedLabel = document.createElement('label');
    speedLabel.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; font-size: 14px;';
    speedLabel.innerHTML = 'Speed: <input type="range" min="100" max="1500" value="800" style="width: 100px;">';
    speedLabel.querySelector('input').addEventListener('change', (e) => {
      this.speed = parseInt(e.target.value);
    });

    controlsDiv.appendChild(playBtn);
    controlsDiv.appendChild(stepBtn);
    controlsDiv.appendChild(resetBtn);
    controlsDiv.appendChild(speedLabel);
    
    container.insertBefore(controlsDiv, container.children[1]);
  }

  step() {
    if (this.found || this.currentIndex >= this.array.length - 1) return;
    
    this.currentIndex++;
    this.comparisons++;

    if (this.array[this.currentIndex] === this.target) {
      this.found = true;
    }

    this.render();
  }

  togglePlay() {
    this.isRunning = !this.isRunning;

    if (this.isRunning) {
      this.runSearch();
    }
  }

  runSearch() {
    const interval = setInterval(() => {
      if (!this.isRunning || this.found || this.currentIndex >= this.array.length - 1) {
        clearInterval(interval);
        this.isRunning = false;
        this.render();
        return;
      }

      this.step();
    }, this.speed);
  }

  reset() {
    this.currentIndex = -1;
    this.found = false;
    this.isRunning = false;
    this.comparisons = 0;
    this.render();
  }
}

// ===================================
// BINARY SEARCH VISUALIZATION
// ===================================

class BinarySearchViz {
  constructor(containerId, arrayData = null) {
    this.containerId = containerId;
    this.array = arrayData || [3, 7, 12, 18, 25, 31, 45, 52, 68, 99];
    this.target = 25;
    this.left = 0;
    this.right = this.array.length - 1;
    this.mid = -1;
    this.found = false;
    this.isRunning = false;
    this.comparisons = 0;
    this.speed = 1000;
    this.step_number = 0;
    
    this.init();
  }

  init() {
    this.render();
    this.setupControls();
  }

  render() {
    const container = document.getElementById(this.containerId);
    
    // Clear previous content
    d3.select(`#${this.containerId} svg`).remove();
    
    const width = Math.min(container.clientWidth - 20, 900);
    const height = 140;
    const elementWidth = width / this.array.length - 5;

    const svg = d3.select(`#${this.containerId}`)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('style', 'border: 1px solid var(--border); border-radius: 8px; background: rgba(0,0,0,0.02); margin: 1rem 0;');

    // Create array elements
    const elements = svg.selectAll('g')
      .data(this.array)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${i * (elementWidth + 5) + 10}, 25)`);

    // Rectangles
    elements.append('rect')
      .attr('width', elementWidth)
      .attr('height', 60)
      .attr('fill', (d, i) => {
        if (i === this.mid) return '#f59e0b'; // Middle pointer - orange
        if (i === this.left || i === this.right) return '#ec4899'; // Left/right pointers - pink
        if (i > this.right || i < this.left) return '#d1d5db'; // Outside range - gray
        if (this.found && d === this.target) return '#22c55e'; // Found - green
        return '#3b82f6'; // Active range - blue
      })
      .attr('stroke', (d, i) => {
        if (i === this.mid) return '#d97706';
        if (i === this.left || i === this.right) return '#be185d';
        return 'var(--border)';
      })
      .attr('stroke-width', 2)
      .attr('rx', 4);

    // Value text
    elements.append('text')
      .attr('x', elementWidth / 2)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .attr('font-weight', 600)
      .attr('font-size', '14px')
      .attr('fill', 'white')
      .text(d => d);

    // Pointer labels
    elements.append('text')
      .attr('x', elementWidth / 2)
      .attr('y', 85)
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('fill', 'var(--text-secondary)')
      .text((d, i) => {
        let labels = [];
        if (i === this.left && i !== this.right) labels.push('L');
        if (i === this.right && i !== this.left) labels.push('R');
        if (i === this.mid) labels.push('M');
        return labels.join('/');
      });

    // Info panel
    svg.append('rect')
      .attr('x', 10)
      .attr('y', height - 35)
      .attr('width', width - 20)
      .attr('height', 30)
      .attr('fill', 'rgba(59, 130, 246, 0.1)')
      .attr('rx', 4)
      .attr('stroke', '#3b82f6')
      .attr('stroke-width', 1);

    svg.append('text')
      .attr('x', 15)
      .attr('y', height - 10)
      .attr('font-size', '12px')
      .attr('fill', 'var(--text)')
      .attr('id', `${this.containerId}-status`)
      .text(`Target: ${this.target} | Step: ${this.step_number} | Comparisons: ${this.comparisons} | Status: ${this.found ? '✓ FOUND' : 'Searching...'}`);
  }

  setupControls() {
    const container = document.getElementById(this.containerId).parentElement;
    
    const controlsDiv = document.createElement('div');
    controlsDiv.id = `${this.containerId}-controls`;
    controlsDiv.style.cssText = 'margin: 1rem 0; display: flex; gap: 0.5rem; flex-wrap: wrap;';
    
    const playBtn = document.createElement('button');
    playBtn.textContent = this.isRunning ? 'Pause' : 'Play';
    playBtn.style.cssText = 'padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;';
    playBtn.onclick = () => this.togglePlay();

    const stepBtn = document.createElement('button');
    stepBtn.textContent = 'Step';
    stepBtn.style.cssText = 'padding: 0.5rem 1rem; background: #8b5cf6; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;';
    stepBtn.onclick = () => this.step();

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.style.cssText = 'padding: 0.5rem 1rem; background: #6b7280; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;';
    resetBtn.onclick = () => this.reset();

    const speedLabel = document.createElement('label');
    speedLabel.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; font-size: 14px;';
    speedLabel.innerHTML = 'Speed: <input type="range" min="200" max="2000" value="1000" style="width: 100px;">';
    speedLabel.querySelector('input').addEventListener('change', (e) => {
      this.speed = parseInt(e.target.value);
    });

    controlsDiv.appendChild(playBtn);
    controlsDiv.appendChild(stepBtn);
    controlsDiv.appendChild(resetBtn);
    controlsDiv.appendChild(speedLabel);
    
    container.insertBefore(controlsDiv, container.children[1]);
  }

  step() {
    if (this.found || this.left > this.right) return;

    this.mid = Math.floor((this.left + this.right) / 2);
    this.comparisons++;
    this.step_number++;

    if (this.array[this.mid] === this.target) {
      this.found = true;
    } else if (this.array[this.mid] < this.target) {
      this.left = this.mid + 1;
    } else {
      this.right = this.mid - 1;
    }

    this.render();
  }

  togglePlay() {
    this.isRunning = !this.isRunning;

    if (this.isRunning) {
      this.runSearch();
    }
  }

  runSearch() {
    const interval = setInterval(() => {
      if (!this.isRunning || this.found || this.left > this.right) {
        clearInterval(interval);
        this.isRunning = false;
        this.render();
        return;
      }

      this.step();
    }, this.speed);
  }

  reset() {
    this.left = 0;
    this.right = this.array.length - 1;
    this.mid = -1;
    this.found = false;
    this.isRunning = false;
    this.comparisons = 0;
    this.step_number = 0;
    this.render();
  }
}

// Initialize visualizations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Check if containers exist before initializing
  if (document.getElementById('linear-search-viz')) {
    window.linearSearchViz = new LinearSearchViz('linear-search-viz');
  }
  
  if (document.getElementById('binary-search-viz')) {
    window.binarySearchViz = new BinarySearchViz('binary-search-viz');
  }
});
