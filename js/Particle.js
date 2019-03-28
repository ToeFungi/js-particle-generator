/**
 * Particle object.
 */
class Particle {
  /**
	 * Constructor
   * @param {number} size The size of the particle.
   * @param {number} x The x co-ordinate of the particle.
   * @param {number} y The y co-ordinate of the particle.
   */
	constructor (size, x, y) {
		this.id = new Date().getTime();

		this.x = x;
		this.y = y;
		this.size = size;
	}

  /**
	 * Draw the particle object onto the context provided.
   * @param {CanvasRenderingContext2D} context The context for the HTML Canvas.
   */
  draw (context) {
    this._randomiseMovement(context);

    context.fillRect(this.x, this.y, this.size, this.size);
  }

  /**
	 * Returns the x co-ordinate of the particle.
   * @return {number}
   */
  getX () {
    return this.x;
  }

  /**
   * Set the x co-ordinate of the Particle.
   * @param {number} x The y co-ordinate of the particle.
   * @return {Particle}
   */
  setX (x) {
    this.x = x;
    return this;
  }

  /**
	 * Returns the y co-ordinate of the particle.
   * @return {number}
   */
  getY () {
    return this.y;
  }

  /**
	 * Set the y co-ordinate of the Particle.
   * @param {number} y The y co-ordinate of the particle.
   * @return {Particle}
   */
  setY (y) {
    this.y = y;
    return this;
  }

  /**
	 * Returns the ID of the particle.
   * @return {number}
   */
  getId () {
    return this.id;
  }

  /**
	 * Randomise the movement of the particle and update the X and Y co-ordinates for when the Particle Engine next draws
	 * the objects stored within it.
   * @param {CanvasRenderingContext2D} context The context for the HTML Canvas.
   * @private
   */
	_randomiseMovement (context) {
		const maxWidth = context.canvas.width;
		const maxHeight = context.canvas.height;

		const updatedX = this.getX() + this._getNumber();
		const updatedY = this.getY() + this._getNumber();

		if (updatedX > maxWidth || updatedX < 0) {
			this.setX(250);
		} else {
			this.setX(updatedX);
		}

		if (updatedY > maxHeight || updatedY < 0) {
			this.setY(250);
		} else {
			this.setY(updatedY);
		}
	}

  /**
	 * Get a random number for the randomised movement function.
   * @return {number}
   * @private
   */
	_getNumber () {
		const min = -5;
		const max = 5;

		return Math.floor(Math.random() * (max - min)) + min;
	}
}
