function Calculator() {
  this.result = 0;
  this.init = n => (this.result = n, this);
  this.add = n => (this.result += n, this);
  this.mul = n => (this.result *= n, this);
  this.div = n => (this.result /= n, this);
  this.sub = n => (this.result -= n, this);
  this.alert = () => (setTimeout(() => alert(this.result), 5000), this);
}