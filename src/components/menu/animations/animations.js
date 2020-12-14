const animateProfile = (image) => {
  image.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 180;
    canvas.height = 180;

    let particlesArray = [];
    const numberOfParticles = 3000;
    const detail = 1;

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const calculateBrightness = (red, green, blue) => {
      return Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114);
    };

    let grid = [];
    for (let y = 0; y < canvas.height; y += detail) {
      let row = [];
      for (let x = 0; x < canvas.width; x += detail) {
        const red = pixels.data[y * 4 * pixels.width + x * 4];
        const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
        const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
        const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        const brightness = calculateBrightness(red, green, blue) / 100;

        row.push({ brightness, color });
      }
      grid.push(row);
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 0.7;
        this.size = Math.random() * 2 + 0.1;
        this.color = 'rgb(24, 25, 26)';
      }

      update = () => {
        const { brightness, color } = grid[Math.floor(this.y / detail)][Math.floor(this.x / detail)];
        this.speed = brightness;
        this.color = color;
        let movement = 2.5 - this.speed + this.velocity;
        this.y += movement;
        if (this.y >= canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      };

      draw = () => {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      };
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    const rgbToHex = (c) => {
      var hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    const animate = () => {
      ctx.globalAlpha = 0.05;
      ctx.arc(90, 90, 90, 0, 2 * Math.PI);
      ctx.globalAlpha = 0.05;
      ctx.fillStyle = rgbToHex(document.documentElement.style.getPropertyValue('--darker'));
      ctx.fill();
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        ctx.globalAlpha = particlesArray[i].speed * 0.3;
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    };

    animate();
  });
};

export { animateProfile };
