class ColorMix {
    constructor(elementSelector){
      this.colors  = ['red', 'yellow', 'green', 'black', 'orange', 'pink', 'blue']
      
      this.selector = '.box1';
      
      if (elementSelector !== undefined) {
        this.selector = elementSelector;
      }
      
      this.elements = [];
      this.delay = 1000;
      
      this.init();
    }
    
    init(){
      this.elements = document.querySelectorAll(this.selector);
      const scope = this;
      
      this.elements.forEach(function(element){
        scope.changeColor(element);
        
        window.setInterval(function() {
          scope.changeColor(element);
        }, scope.delay)
      });
    }
    
     changeColor(element) {
     element.style.backgroundColor = this.getColor();
    }
    
    getColor() {
      const colorIndex = this.getRandomNumber(0, this.colors.length - 1);
      return this.colors[ colorIndex ];
    }
    
    getRandomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
  }
  
  let colors = new ColorMix();
  let colors2 = new ColorMix('.box2');
  let colors3 = new ColorMix('.box3');
  let colors4 = new ColorMix('.box4');
  