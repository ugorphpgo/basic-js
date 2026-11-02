/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const nestedDepths = arr.filter((item) => Array.isArray(item)).map((item) => this.calculateDepth(item));
    return 1 + Math.max(0, ...nestedDepths);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
