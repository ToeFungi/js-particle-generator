# JS Particle Generator
This side project is just for fun to generate particle-like objects on an HTML canvas.
This is more of an experiment to learn more about the canvas. This project is still in
very early days and will probably under-go a number of changes in the coming weeks.

## Setup
Clone the repo and open `particles.html` in your browser of choice.

## Manipulating Particles
Early days... Everything at the moment is manual. To add a particle, open `developer tools`.

#### Add particles
This will create a particle in the centre of the canvas which is easy to see
```javascript
// addParticle(size, x, y)
engine.addParticle(10, 250, 250)
```

#### Remove particle
To get the ID of the particle you can check the list of particles
```javascript
engine.particles // Will return an array of particles
```

This is what an object looks like currently
```
id: 1553779220093
size: 5
x: 170
y: 138
```

To remove the object you can use
```javascript
// Particles have a `getId()` function
let id = engine.particles[0].getId()

// removeParticle(id)
engine.removeParticle(id)
```

#### Remove all particles
Removing all particles is simple
```javascript
engine.removeAllParticles()
```

## Shutdown / Start Particle Engine
To start/stop the particle engine. This will stop and clear the game loop which
renders changes and updates the individual particles.
```javascript
engine.start()
engine.shutdown()
```