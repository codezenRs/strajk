 setInterval(() => {
        var now = Date.now();

        let strajkBlock = document.querySelector('.strajkblock');
        let strajkCounter = document.body.querySelector('.strajkcounter');

        if (strajkBlock == null || strajkCounter == null) {
          return;
        }

        if (now > 1737715920000 && now < 1737716820000) {
          document.body.classList.add('strajk');
          strajkBlock.classList.add('visible');
          let rem = (1737716820000 - now) / 1000;
          let min = Math.floor(rem / 60);
          let sec = Math.floor(rem - min * 60);
          strajkCounter.textContent = min.toString() + ':' + sec.toString().padStart(2, '0');
        } else {
          document.body.classList.remove('strajk');
          strajkBlock.classList.remove('visible');
        }
      }, 1000);