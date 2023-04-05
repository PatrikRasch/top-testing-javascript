class House {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  houseWidth() {
    console.log(`This house has a width of ${width} meters`);
    console.log(this.width);
  }

  houseHeight() {
    console.log(`This house has a height of ${height} meters`);
    console.log(this.height);
  }
}

const hugoHouse = new House(100, 202);
const rasmusHouse = new House(5, 2);

console.log(hugoHouse);
House.houseWidth();

export { hugoHouse, rasmusHouse };
