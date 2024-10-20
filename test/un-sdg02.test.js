import { html, fixture, expect } from '@open-wc/testing';
import "../un-sdg02.js";

describe("unSdg02 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <un-sdg02
        title="title"
      ></un-sdg02>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
