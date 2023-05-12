class WordCount extends HTMLParagraphElement {
  constructor () {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    const wcParent = this.parentNode as HTMLElement;

    function countWords (node: HTMLElement) {
      const text = node.innerText || node.textContent || "";
      return text
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0).length;
    }

    const count = `Words: ${countWords(wcParent)}`;

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create text node and add word count to it
    const text = document.createElement("span");
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

    // Update count when element content changes
    setInterval(() => {
      text.textContent = `Words: ${countWords(wcParent)}`;
    }, 200);
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
