import { generateSampleProducts } from "./data";

describe("generateSampleProducts function", () => {
  it("generates the specified number of products", () => {
    const count = 5;
    const products = generateSampleProducts(count);

    expect(products).toHaveLength(count);
  });

  it("generates products with correct properties", () => {
    const count = 3;
    const products = generateSampleProducts(count);

    products.forEach((product, index) => {
      expect(product.id).toBe(index + 1);
      expect(product.title).toBe(`Product ${index + 1}`);
      expect(product.description).toBe(`Description for Product ${index + 1}`);
      expect(product.price).toBeGreaterThanOrEqual(0);
      expect(product.price).toBeLessThanOrEqual(1000);
    });
  });
});
