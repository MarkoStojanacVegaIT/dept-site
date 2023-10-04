import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ArticleBox from "./index.vue";

describe("ArticleBox", () => {
  test("renders component", () => {
    const wrapper = mount(ArticleBox, {
      propsData: {
        spanRange: 2,
        article: {
          id: 1,
          title: "Test title",
          category: "category",
          imgUrl: "test.url",
        },
      },
    });
    expect(wrapper).toBeTruthy();
  });

  test("correct props passed", () => {
    const wrapper = mount(ArticleBox, {
      propsData: {
        spanRange: 2,
        article: {
          id: 1,
          title: "Test title",
          category: "category",
          imgUrl: "test.url",
        },
      },
    });
    const title = wrapper.get('[data-test="title"]');
    const category = wrapper.get('[data-test="category"]');

    expect(title.text()).toBe("Test title");
    expect(category.text()).toBe("category");
  });
});
