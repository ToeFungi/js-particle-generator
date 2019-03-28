// Initialise the particle engine
function initialiseEngine () {
	this.engine = new ParticleEngine();
}

/**
 * Particle Engine.
 */
class ParticleEngine {
  /**
	 * Constructor.
   */
	constructor () {
		this.particles = [];
		this._cycleTimer = 100;

		// Initializing canvas and fetching context
		this._setupCanvas();

		// Initializing game engine
		this.start();
	}

  /**
	 * Remove a specific particle object from the engine.
   * @param {number} particleId The ID of the particle object.
   */
	removeParticle (particleId) {
		this.particles.forEach((particle, index) => {
			if (particle.getId() === particleId) {
				return this.particles.splice(index, 1)
			}
		})
	}

  /**
	 * Remove all particle objects from the engine.
   */
	removeAllParticles () {
		this.particles = [];
	}

  /**
	 * Add a particle object to the engine.
   * @param {number} size The size of the particle.
   * @param {number} x The x co-ordinate of the particle.
   * @param {number} y The y co-ordinate of the particle.
   */
	addParticle (size, x, y) {
		const particle = new Particle(size, x, y);

		this.particles.push(particle);

    const particleId = this.particles[this.particles.length - 1].getId();
    console.log('Added particle ID', { particleId })
	}

  /**
	 * Shutdown the internal engine.
   */
	shutdown () {
		clearInterval(this.particleThread);
	}

  /**
	 * Public facing start for the internal engine.
   */
	start() {
		this.particles = [];
		this._gameLoop()
	}

  /**
	 * Start of the internal engine.
   * @private
   */
	_gameLoop () {
		this.particleThread = setInterval(() => {
			this._draw();
		}, this._cycleTimer);
	}

  /**
	 * Draw all particle objects within the engine.
   * @private
   */
	_draw () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.particles.forEach(particle => {
			particle.draw(this.context);
		});
	}

  /**
	 * Setup the canvas and get the 2D context handle for drawing
	 * objects in the engine.
   * @private
   */
	_setupCanvas () {
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');

		this.canvas.width = 500;
		this.canvas.height = 500;

		let body = document.getElementById('body');
		body.appendChild(this.canvas);
	}
}
